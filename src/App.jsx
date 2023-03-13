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

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <OurServices />
      <Humanity />
      <PhotoGallery />
      <VideoGallery />
      <ContactUs />
      <DonateUs />
      <Footer />

      <CssBaseline />
    </div>
  );
}

export default App;
