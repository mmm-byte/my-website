export default function Card({ children }: { children: React.ReactNode }) {
  return <div className="rounded-2xl border bg-white shadow-sm">{children}</div>;
}
