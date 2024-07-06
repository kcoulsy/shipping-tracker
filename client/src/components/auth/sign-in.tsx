import { useLogto } from "@logto/react";

export function SignIn() {
  const { signIn, isAuthenticated } = useLogto();

  if (isAuthenticated) {
    return <div>Signed in</div>;
  }

  return (
    <button
      onClick={() => signIn(`${import.meta.env.VITE_BASE_URL}/auth/callback"`)}
    >
      Courier Sign In
    </button>
  );
}
