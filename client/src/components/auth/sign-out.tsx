import { useLogto } from "@logto/react";

export function SignOut() {
  const { signOut } = useLogto();

  return (
    <button onClick={() => signOut(`${import.meta.env.VITE_BASE_URL}`)}>
      Sign out
    </button>
  );
}
