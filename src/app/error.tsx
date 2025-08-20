"use client";
export default function GlobalError({ error }: { error: Error }) {
  return (
    <html>
      <body className="p-6 text-red-600">
        <h1 className="text-xl font-semibold">Something went wrong</h1>
        <p className="mt-2">{error.message}</p>
      </body>
    </html>
  );
}
