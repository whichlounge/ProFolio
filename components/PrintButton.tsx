"use client";

import Button from "@/components/Button";

export default function PrintButton() {
  return (
    <Button onClick={() => window.print()}>
      Print Resume
    </Button>
  );
}