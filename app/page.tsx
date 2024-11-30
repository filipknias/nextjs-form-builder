import { Button } from "@/components/ui/button";
import { MoveRight } from 'lucide-react';
import Link from "next/link";

export default function Home() {
  return (
    <section className="bg-gray-800 pt-32 pb-24">
        <div className="container">
            <h1 className="text-center text-5xl text-white font-bold mb-12">
                Form Builder
                <br />
                Design Forms in Minutes
            </h1>
            <div className="flex justify-center gap-8">
                <Button variant="secondary" className="text-lg p-6" asChild>
                    <Link href="/builder">
                        Try Builder <MoveRight />
                    </Link>
                </Button>
            </div>
        </div>
    </section>
  );
}
