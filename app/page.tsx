import { UserProvider } from "@/components/UserProvider";
import { useUser } from "@/components/UserProvider";

export default function Home() {
  return (
    <UserProvider>
      <HomeContent />
    </UserProvider>
  );
}

function HomeContent() {
  const { user, isLoading, error } = useUser();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* Your existing page content */}
    </main>
  );
}
