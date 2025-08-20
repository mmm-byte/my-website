"use client";

import { useState } from "react";
import LayoutShell from "@/components/LayoutShell";
import Card from "@/components/Card";
import Field from "@/components/Field";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";

type FormState = {
  fullName: string;
  phone: string;
  date: string;
  slot: string;
};

export default function BookingsPage() {
  const router = useRouter();
  const [form, setForm] = useState<FormState>({ fullName: "", phone: "", date: "", slot: "" });
  const [errors, setErrors] = useState<Partial<FormState>>({});

  function validate(values: FormState) {
    const e: Partial<FormState> = {};
    if (!values.fullName) e.fullName = "Your full name is required";
    if (!/^\+?[0-9\s-]{8,}$/.test(values.phone)) e.phone = "Enter a valid phone number";
    if (!values.date) e.date = "Pick a date";
    if (!values.slot) e.slot = "Select a time slot";
    return e;
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const eobj = validate(form);
    setErrors(eobj);
    if (Object.keys(eobj).length) return;

    // TODO: POST to /api/book (server action or route handler)
    // For now, pretend success:
    router.push("/bookings/success");
  }

  function onChange<K extends keyof FormState>(key: K) {
    return (evt: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
      setForm((p) => ({ ...p, [key]: evt.target.value }));
  }

  return (
    <LayoutShell>
      <Card>
        <form className="grid gap-4 p-6" onSubmit={onSubmit} noValidate>
          <h1 className="text-xl font-semibold">Book an appointment</h1>

          <Field id="fullName" label="Full name" error={errors.fullName}>
            <input
              id="fullName"
              name="fullName"
              autoComplete="name"
              className="w-full rounded-lg border px-3 py-2"
              value={form.fullName}
              onChange={onChange("fullName")}
              required
            />
          </Field>

          <Field id="phone" label="Phone" hint="Include country code" error={errors.phone}>
            <input
              id="phone"
              name="phone"
              inputMode="tel"
              className="w-full rounded-lg border px-3 py-2"
              value={form.phone}
              onChange={onChange("phone")}
              required
            />
          </Field>

          <div className="grid gap-4 sm:grid-cols-2">
            <Field id="date" label="Date" error={errors.date}>
              <input
                id="date"
                name="date"
                type="date"
                className="w-full rounded-lg border px-3 py-2"
                value={form.date}
                onChange={onChange("date")}
                required
              />
            </Field>

            <Field id="slot" label="Time slot" error={errors.slot}>
              <select
                id="slot"
                name="slot"
                className="w-full rounded-lg border px-3 py-2"
                value={form.slot}
                onChange={onChange("slot")}
                required
              >
                <option value="">Select…</option>
                <option>09:00</option>
                <option>11:00</option>
                <option>14:00</option>
                <option>16:00</option>
              </select>
            </Field>
          </div>

          <div className="pt-2">
            <Button type="submit" aria-label="Confirm appointment">Confirm Booking</Button>
          </div>
        </form>
      </Card>
    </LayoutShell>
  );
}
