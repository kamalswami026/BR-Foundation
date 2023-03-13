import { Box, CssBaseline } from "@mui/material";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import OurServices from "./components/OurServices";
import Humanity from "./components/Humanity";
import PhotoGallery from "./components/PhotoGallery";
import VideoGallery from "./components/VideoGallery";
import ContactUs from "./components/ContactUs";
import DonateUs from "./components/DonateUs";
import Footer from "./components/Footer";
import HeadingContainer from "./elements/HeadingContainer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <HeadingContainer heading="OUR SERVICES">
        <OurServices />
      </HeadingContainer>
      <Humanity />
      <HeadingContainer heading="PHOTO GALLERY">
        <PhotoGallery />
      </HeadingContainer>
      <HeadingContainer heading="VIDEO GALLERY">
        <VideoGallery />
      </HeadingContainer>
      <HeadingContainer heading="CONTACT US">
        <ContactUs />
      </HeadingContainer>
      <HeadingContainer heading="DONATE US">
        <DonateUs />
      </HeadingContainer>
      <Footer />
      <CssBaseline />
    </div>
  );
}

export default App;
