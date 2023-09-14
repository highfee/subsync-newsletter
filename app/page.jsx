import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Button asChild variant="outline">
        <Link href="">Hello</Link>
      </Button>
    </main>
  );
}
