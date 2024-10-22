import { SignIn } from "@/components/auth/sign-in";
import { SignOut } from "@/components/auth/sign-out";
import { ThemeProvider } from "@/components/theme";
import { useLogto } from "@logto/react";
import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { useEffect, useState } from "react";

export const Route = createRootRoute({
  component: Root,
});

function Root() {
  const { isAuthenticated, getIdTokenClaims } = useLogto();
  const [userId, setUserId] = useState("");

  useEffect(() => {
    (async () => {
      if (isAuthenticated) {
        const claims = await getIdTokenClaims();
        setUserId(claims?.sub ?? "");
      }
    })();
  }, [isAuthenticated, getIdTokenClaims]);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="p-2 flex gap-2 container mx-auto py-4 items-center">
        <Link to="/" className="font-bold italic text-2xl mr-4">
          Shippy
        </Link>{" "}
        <Link to="/track" className="[&.active]:font-bold">
          Track
        </Link>
        {isAuthenticated && (
          <Link to="/shipments" className="[&.active]:font-bold">
            Shipments
          </Link>
        )}
        <div className="flex-1"></div>
        {userId && <p>Logged in as {userId}</p>}
        {isAuthenticated ? <SignOut /> : <SignIn />}
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </ThemeProvider>
  );
}
