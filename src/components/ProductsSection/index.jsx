import { ProductsNav, ProductsRelease, Section } from "../../components";

export const ProductsSection = () => {
  return (
    <Section>
      <ProductsNav />
      <ProductsRelease label={"LANÇAMENTOS"} />
    </Section>
  );
};
