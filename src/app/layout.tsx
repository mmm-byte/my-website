import "@/styles/globals.css";

export const metadata = {
  title: "FastOps — Same‑Day Appointments",
  description: "Book same‑day appointments in minutes.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-dvh bg-white text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}
