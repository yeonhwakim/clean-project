import Footer from "../footer/ui";
import Header from "../header/ui";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex min-h-screen flex-col items-center py-4 px-0">
      <div className="w-full max-w-md">
        <Header />
        <main className="px-4">{children}</main>
        <Footer />
      </div>
    </main>
  );
}
