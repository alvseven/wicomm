import {
  Header,
  Main,
  ActionFooter,
  ProductsSection,
  GetToKnowUs,
  ProductsWithDiscountSection,
  Blog,
  Goals,
  AboutUs,
} from "./components";
import { Footer } from "./components/Footer";

import GlobalStyles from "./styles/global";

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Main />
      <ActionFooter />
      <ProductsSection />
      <GetToKnowUs />
      <ProductsWithDiscountSection />
      <Blog />
      <Goals />
      <AboutUs />
      <Footer />
    </>
  );
}

export default App;
