import LayoutShell from "@/components/LayoutShell";
import Card from "@/components/Card";
import Button from "@/components/Button";
import Link from "next/link";

export default function Home() {
  return (
    <LayoutShell>
      <section className="grid gap-6 md:grid-cols-2">
        <Card>
          <div className="p-6">
            <h1 className="text-3xl font-semibold">Same‑Day Appointments</h1>
            <p className="mt-2 text-gray-600">
              Book in minutes. Real‑time slots. Instant confirmation.
            </p>
            <div className="mt-6">
              <Link href="/bookings">
                <Button aria-label="Book an appointment now">Book Now</Button>
              </Link>
            </div>
          </div>
        </Card>
        <Card>
          <div className="p-6">
            <h2 className="text-xl font-semibold">Why FastOps?</h2>
            <ul className="mt-3 list-disc pl-5 text-gray-700">
              <li>Mobile‑first, blazing fast</li>
              <li>Accessible & secure by design</li>
              <li>Transparent pricing</li>
            </ul>
          </div>
        </Card>
      </section>
    </LayoutShell>
  );
}
