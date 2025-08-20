import LayoutShell from "@/components/LayoutShell";
import Button from "@/components/Button";
import Link from "next/link";

export default function BookingSuccess() {
  return (
    <LayoutShell>
      <div className="mx-auto max-w-lg text-center">
        <h1 className="text-2xl font-semibold">Booked! 🎉</h1>
        <p className="mt-2 text-gray-600">You’ll receive a confirmation shortly.</p>
        <div className="mt-6 space-x-2">
          <Link href="/bookings"><Button variant="secondary">Make another</Button></Link>
          <Link href="/"><Button>Home</Button></Link>
        </div>
      </div>
    </LayoutShell>
  );
}
