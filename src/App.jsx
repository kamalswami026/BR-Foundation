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
import axios from "axios";

const collection_name = "Images";

function App() {
  const [images, setImages] = useState([]);
  const [videos, setVideos] = useState([]);
  console.log("🚀 ~ file: App.jsx:22 ~ App ~ videos:", videos);

  const findAll = async () => {
    const doc_refs = await getDocs(collection(db, collection_name));

    const images = [];

    doc_refs.docs.forEach((image) => {
      images.push(image._document.data.value.mapValue.fields.url);
    });

    setImages(images);
  };

  const fetchVideos = () => {
    axios
      .get(
        "https://www.googleapis.com/youtube/v3/playlistItems?part=contentDetails%2Csnippet&playlistId=PLSwr27OAr5e_a-Iqv4d53wYz6pEjjETvy&key=AIzaSyDLl5oi9n6Ie59Okz9Oz_t4MYM8CYHiGd4&maxResults=50"
      )
      .then((data) => {
        console.log("🚀 ~ file: App.jsx:42 ~ .then ~ data:", data);
        let items = [];
        data.data.items.map((item) =>
          items.push(item.snippet.resourceId.videoId)
        );
        setVideos(items);
      });
  };

  useEffect(() => {
    findAll();
    fetchVideos();
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
        <VideoGallery videos={videos} />
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
