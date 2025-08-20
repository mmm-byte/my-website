type Props = {
  id: string;
  label: string;
  hint?: string;
  error?: string;
  children: React.ReactNode;
};
export default function Field({ id, label, hint, error, children }: Props) {
  return (
    <div className="space-y-1">
      <label htmlFor={id} className="block text-sm font-medium">{label}</label>
      {children}
      {hint && <p className="text-xs text-gray-500">{hint}</p>}
      {error && <p className="text-xs text-red-600">{error}</p>}
    </div>
  );
}
