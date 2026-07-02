"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type UserRole = "ADMIN" | "MEMBER";

type User = {
  id: string;
  name: string;
  email: string;
  role: UserRole;
};

type AuthState = {
  accessToken: string;
  refreshToken?: string;
  user: User;
};

type AuthContextValue = {
  user: User | null;
  accessToken: string | null;
  isLoaded: boolean;
  login: (email: string, password: string) => Promise<User | null>;
  logout: () => void;
  fetchWithAuth: (input: RequestInfo, init?: RequestInit) => Promise<Response>;
};

const storageKey = "whiskyklubben-auth";
const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:5000";

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

function getStoredAuthState(): AuthState | null {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    const stored = window.localStorage.getItem(storageKey);
    if (!stored) {
      return null;
    }

    const parsed = JSON.parse(stored) as AuthState;
    if (
      !parsed?.accessToken ||
      !parsed?.user ||
      typeof parsed.user.id !== "string" ||
      typeof parsed.user.email !== "string"
    ) {
      return null;
    }

    return parsed;
  } catch {
    return null;
  }
}

async function refreshAccessToken(
  refreshToken: string,
): Promise<{ accessToken: string; refreshToken?: string } | null> {
  try {
    const response = await fetch(`${apiBaseUrl}/api/auth/refresh`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ refreshToken }),
    });

    if (!response.ok) {
      return null;
    }

    return (await response.json()) as {
      accessToken: string;
      refreshToken?: string;
    };
  } catch {
    return null;
  }
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [authState, setAuthState] = useState<AuthState | null>(() =>
    getStoredAuthState(),
  );
  const isLoaded = true;

  useEffect(() => {
    if (authState) {
      window.localStorage.setItem(storageKey, JSON.stringify(authState));
    } else {
      window.localStorage.removeItem(storageKey);
    }
  }, [authState]);

  const login = useCallback(async (email: string, password: string) => {
    try {
      const response = await fetch(`${apiBaseUrl}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        return null;
      }

      const data = (await response.json()) as {
        accessToken: string;
        refreshToken?: string;
        user: User;
      };

      const newAuthState: AuthState = {
        accessToken: data.accessToken,
        refreshToken: data.refreshToken,
        user: data.user,
      };

      setAuthState(newAuthState);
      return data.user;
    } catch {
      return null;
    }
  }, []);

  const logout = useCallback(() => {
    setAuthState(null);
  }, []);

  const fetchWithAuth = useCallback(
    async (input: RequestInfo, init: RequestInit = {}) => {
      const token = authState?.accessToken;
      if (!token) {
        return fetch(input, init);
      }

      const authHeaders = new Headers(init.headers ?? undefined);
      authHeaders.set("Authorization", `Bearer ${token}`);
      authHeaders.set(
        "Content-Type",
        authHeaders.get("Content-Type") ?? "application/json",
      );

      const response = await fetch(input, {
        ...init,
        headers: authHeaders,
      });

      if (response.status !== 401) {
        return response;
      }

      if (!authState?.refreshToken) {
        logout();
        return response;
      }

      const refreshed = await refreshAccessToken(authState.refreshToken);
      if (!refreshed) {
        logout();
        return response;
      }

      const updatedAuthState: AuthState = {
        ...authState,
        accessToken: refreshed.accessToken,
        refreshToken: refreshed.refreshToken ?? authState.refreshToken,
      };

      setAuthState(updatedAuthState);

      const retryHeaders = new Headers(init.headers ?? undefined);
      retryHeaders.set(
        "Authorization",
        `Bearer ${updatedAuthState.accessToken}`,
      );
      retryHeaders.set(
        "Content-Type",
        retryHeaders.get("Content-Type") ?? "application/json",
      );

      return fetch(input, {
        ...init,
        headers: retryHeaders,
      });
    },
    [authState, logout],
  );

  const value = useMemo(
    () => ({
      user: authState?.user ?? null,
      accessToken: authState?.accessToken ?? null,
      isLoaded,
      login,
      logout,
      fetchWithAuth,
    }),
    [authState, isLoaded, login, logout, fetchWithAuth],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }
  return context;
}
