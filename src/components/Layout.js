import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="font-sans flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
