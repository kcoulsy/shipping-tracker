import { useHandleSignInCallback } from "@logto/react";
import { useNavigate } from "@tanstack/react-router";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/auth/callback")({
  component: Callback,
});

function Callback() {
  const navigate = useNavigate();
  const { isLoading } = useHandleSignInCallback(() => {
    navigate({
      to: "/",
    });
  });

  // When it's working in progress
  if (isLoading) {
    return <div>Redirecting...</div>;
  }
}
