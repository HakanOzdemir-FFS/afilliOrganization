import React from "react";

import Navbar from "./Component/NavBar/Navbar";
import FixedSocialBar from "./Component/NavBar/FixedSocialBar";
import ImageGrid from "./Component/Section/MainSection/ImageGrid";
import Slider from "./Component/Section/MainSection/Slider";
import Footer from "./Component/Footer/Footer";
import LeftSection from "./Component/Section/SecondSection/LeftSection";
import RightSection from "./Component/Section/SecondSection/RightSection";
import ContactUsForm from "./Component/Section/TernitarySection/ContactUsForm";
import CardSection from "./Component/Section/TernitarySection/CardSection";
import Product from "./Component/Product/Product";

function App() {
  return (
    <React.Fragment>
      <FixedSocialBar />
      <Navbar />
      <Slider />
      <ImageGrid />
      <RightSection />
      <Product />
      <LeftSection />
      <CardSection />
      <ContactUsForm />

      <Footer />
    </React.Fragment>
  );
}

export default App;
