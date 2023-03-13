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
import { getDocs, collection } from "firebase/firestore";
import db from "./utils/firebase";
import { useEffect, useState } from "react";

const collection_name = "Images";

function App() {
  const [images, setImages] = useState([]);
  console.log("🚀 ~ file: App.jsx:20 ~ App ~ images:", images);

  const findAll = async () => {
    const doc_refs = await getDocs(collection(db, collection_name));

    const images = [];

    doc_refs.docs.forEach((image) => {
      images.push(image._document.data.value.mapValue.fields.url);
    });

    setImages(images);
  };

  useEffect(() => {
    findAll();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Home />
      <HeadingContainer heading="OUR SERVICES">
        <OurServices />
      </HeadingContainer>
      <Humanity />
      <HeadingContainer heading="PHOTO GALLERY">
        <PhotoGallery images={images} />
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
