import { Header } from "@/components/navigation/header";
import { Hero } from "@/components/hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
    </main>
  );
}