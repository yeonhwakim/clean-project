import Footer from "../footer/ui";
import Header from "../header/ui";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
