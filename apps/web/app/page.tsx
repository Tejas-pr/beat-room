"use client";

import { Button } from "@workspace/ui/components/button";
import { useRouter } from "next/navigation";

export default function TestPage() {
  const router = useRouter();

  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Hello World</h1>
        <Button
          size="sm"
          onClick={() => {
            router.push("/signup");
          }}
        >
          SignUp
        </Button>
        <Button
          size="sm"
          onClick={() => {
            router.push("/signin");
          }}
        >
          SignIn
        </Button>
      </div>
    </div>
  );
}
