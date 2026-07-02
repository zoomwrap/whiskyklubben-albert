"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";

type ProtectedRouteProps = {
  children: React.ReactNode;
  requireAdmin?: boolean;
};

export function ProtectedRoute({
  children,
  requireAdmin = false,
}: ProtectedRouteProps) {
  const { user, isLoaded } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoaded) {
      return;
    }

    if (!user) {
      router.replace("/login");
      return;
    }

    if (requireAdmin && user.role !== "ADMIN") {
      router.replace("/medlem");
    }
  }, [isLoaded, requireAdmin, router, user]);

  if (!isLoaded || !user) {
    return null;
  }

  if (requireAdmin && user.role !== "ADMIN") {
    return null;
  }

  return <>{children}</>;
}
