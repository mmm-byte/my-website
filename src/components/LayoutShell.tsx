import Navbar from "./Navbar";
import Footer from "./Footer";

export default function LayoutShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-dvh flex-col">
      <Navbar />
      <main className="mx-auto w-full max-w-6xl flex-1 p-6">{children}</main>
      <Footer />
    </div>
  );
}
