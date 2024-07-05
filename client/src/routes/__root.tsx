import { SignIn } from "@/components/sign-in";
import { SignOut } from "@/components/sign-out";
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
      <div className="p-2 flex gap-2">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>{" "}
        <Link to="/about" className="[&.active]:font-bold">
          About
        </Link>
        <Link to="/shipments" className="[&.active]:font-bold">
          Shipments
        </Link>
      </div>
      <hr />
      {userId && <p>Logged in as {userId}</p>}
      {isAuthenticated ? <SignOut /> : <SignIn />}
      <Outlet />
      <TanStackRouterDevtools />
    </ThemeProvider>
  );
}
