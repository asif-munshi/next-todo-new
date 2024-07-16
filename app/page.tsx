import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-center font-mono text-sm lg:flex">
        <Navbar />
        <Button>Click me</Button>
      </div>
    </main>
  );
}
