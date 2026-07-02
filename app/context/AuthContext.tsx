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

type AuthContextValue = {
  user: User | null;
  isLoaded: boolean;
  login: (email: string, password: string) => User | null;
  logout: () => void;
};

const storageKey = "whiskyklubben-user";

const demoUsers: Array<User & { password: string }> = [
  {
    id: "1",
    name: "Kim",
    email: "kim@whiskyklubben.dk",
    password: "whisky123",
    role: "ADMIN",
  },
  {
    id: "2",
    name: "Michael",
    email: "michael@whiskyklubben.dk",
    password: "whisky456",
    role: "MEMBER",
  },
];

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

function getStoredUser() {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    const storedUser = window.localStorage.getItem(storageKey);
    return storedUser ? (JSON.parse(storedUser) as User) : null;
  } catch {
    return null;
  }
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(getStoredUser);
  const isLoaded = true;

  useEffect(() => {
    if (user) {
      window.localStorage.setItem(storageKey, JSON.stringify(user));
    } else {
      window.localStorage.removeItem(storageKey);
    }
  }, [user]);

  const login = useCallback((email: string, password: string) => {
    const foundUser = demoUsers.find(
      (candidate) =>
        candidate.email.toLowerCase() === email.toLowerCase() &&
        candidate.password === password,
    );

    if (!foundUser) {
      return null;
    }

    const safeUser: User = {
      id: foundUser.id,
      name: foundUser.name,
      email: foundUser.email,
      role: foundUser.role,
    };

    setUser(safeUser);
    return safeUser;
  }, []);

  const logout = useCallback(() => {
    setUser(null);
  }, []);

  const value = useMemo(
    () => ({ user, isLoaded, login, logout }),
    [isLoaded, login, logout, user],
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
