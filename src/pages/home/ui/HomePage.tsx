import { Hero } from "@/widgets/hero";
import { Header } from "../../../widgets/header";
import { Footer } from "@/widgets/footer";
import { Catalog } from "@/widgets/catalog";

export const HomePage = () => {
  return (
    <>
      <Header />
      <Hero />
      <Catalog />
      <Footer />
    </>
  );
};
