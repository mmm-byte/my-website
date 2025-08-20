export default function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-6xl p-4 text-xs text-gray-500">
        © {new Date().getFullYear()} FastOps. All rights reserved.
      </div>
    </footer>
  );
}
