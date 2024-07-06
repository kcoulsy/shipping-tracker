import { useLogto } from "@logto/react";

export function SignOut() {
  const { signOut } = useLogto();

  return (
    <button onClick={() => signOut("http://localhost:5173")}>Sign out</button>
  );
}
