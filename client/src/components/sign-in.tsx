import { useLogto } from "@logto/react";

export function SignIn() {
  const { signIn, isAuthenticated } = useLogto();

  if (isAuthenticated) {
    return <div>Signed in</div>;
  }

  return (
    <button onClick={() => signIn("http://localhost:5173/auth/callback")}>
      Sign In
    </button>
  );
}
