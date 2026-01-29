import { Helmet } from "react-helmet-async";
import { Header } from "./Header";
import { Footer } from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

export const Layout = ({
  children,
  title = "Rare Candy Center – Play & Chill | TCG Center Maribor",
  description = "Rare Candy Center je tvoj TCG center v Mariboru. Prostor za igranje, zbiranje in uživanje v svetu zbirateljskih iger kart. Pridruži se skupnosti!",
}: LayoutProps) => {
  const fullTitle = title.includes("Rare Candy Center")
    ? title
    : `${title} | Rare Candy Center`;

  return (
    <>
      <Helmet>
        <title>{fullTitle}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="sl_SI" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={fullTitle} />
        <meta name="twitter:description" content={description} />
        <link rel="canonical" href={window.location.href} />
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </>
  );
};
