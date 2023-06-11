import "./App.css";
import Header from "./My Components/Header";
import Gallery from "./My Components/Gallery";
import Images from "./My Components/Images";
import React, { useEffect, useState } from "react";
import VideoSection from "./My Components/VideoSection";
import Rooms from "./My Components/Rooms";
import LiveInOdesa from "./My Components/liveInOdesa";
import Frenchchic from "./My Components/Frenchchic";
import Footer from "./My Components/Footer";
import Heading from "./My Components/Heading";
import LeaveARequest from "./My Components/LeaveARequest";
import { Routes, Route } from "react-router-dom";
import PropertyPrices from "./My Components/PropertyPrices";
const images = [
  {
    url: "https://trabotti.com.ua/_next/image?url=https%3A%2F%2Ftrabotti.com.ua%2Fupload%2F7%2Fcompression%2F1626447137645-Ptichka%201.jpg&w=1920&q=75",
    alt: "Image 5",
  },
  {
    url: "https://trabotti.com.ua/_next/image?url=https%3A%2F%2Ftrabotti.com.ua%2Fupload%2F1%2Fcompression%2F1626447140223-Ptichka%20dvor%201.jpg&w=1920&q=75",
    alt: "Image 6",
  },
  {
    url: "https://trabotti.com.ua/_next/image?url=https%3A%2F%2Ftrabotti.com.ua%2Fupload%2F1%2Fcompression%2F1626447142919-Ugolovoy%20rakurs%201.jpg&w=1920&q=75",
    alt: "Image 7",
  },
  {
    url: "https://trabotti.com.ua/_next/image?url=https%3A%2F%2Ftrabotti.com.ua%2Fupload%2F7%2Fcompression%2F1626447145910-Frontalnyy%20dve%20sekcii%201.jpg&w=1920&q=75",
    alt: "Image 8",
  },
  {
    url: "https://trabotti.com.ua/_next/image?url=https%3A%2F%2Ftrabotti.com.ua%2Fupload%2F5%2Fcompression%2F1626447153775-FBR_Water_Sea_final%201.jpg&w=1920&q=75",
    alt: "Image 9",
  },
  {
    url: "https://trabotti.com.ua/_next/image?url=https%3A%2F%2Ftrabotti.com.ua%2Fupload%2F0%2Fcompression%2F1626447156832-Odessa_Final_2%20(1)%201.jpg&w=1920&q=75",
    alt: "Image 10",
  },
  {
    url: "https://trabotti.com.ua/_next/image?url=https%3A%2F%2Ftrabotti.com.ua%2Fupload%2F8%2Fcompression%2F1626447159292-terrace%20final%201.jpg&w=1920&q=75",
    alt: "Image 11",
  },
  {
    url: "https://trabotti.com.ua/_next/image?url=https%3A%2F%2Ftrabotti.com.ua%2Fupload%2F9%2Fcompression%2F1626447113332-Ploshchad%201.jpg&w=1920&q=75",
    alt: "Image 12",
  },
  {
    url: "https://trabotti.com.ua/_next/image?url=https%3A%2F%2Ftrabotti.com.ua%2Fupload%2F7%2Fcompression%2F1626447148331-FBR_Sea_view1%201.jpg&w=1920&q=75",
    alt: "Image 13",
  },
  {
    url: "https://trabotti.com.ua/_next/image?url=https%3A%2F%2Ftrabotti.com.ua%2Fupload%2F7%2Fcompression%2F1626446096137-Vhodnaya%20gruppa%201%201.jpg&w=1920&q=75",
    alt: "Image 14",
  },
];
const galleryImages = [
  {
    url: "https://trabotti.com.ua/upload/3/compression/1617027614564-Fragment.png",
    alt: "img1",
    title: "Inspiration",
  },
  {
    url: "https://trabotti.com.ua/upload/2/compression/1617096087755-Fragment5.png",
    alt: "img2",
    title: "Amenitis",
  },
  {
    url: "https://trabotti.com.ua/upload/3/compression/1627303533813-Bezymyannyy.jpg",
    alt: "img3",
    title: "Perfection at the enterance",
  },
  {
    url: "https://trabotti.com.ua/upload/7/compression/1617092779507-Ptichka%20dvor2.png",
    alt: "img4",
    title: "Quality is in the details",
  },
  {
    url: "https://trabotti.com.ua/upload/8/compression/1617095154924-Fragment4.png",
    alt: "img5",
    title: "Fitness Space - your health zone",
  },
  {
    url: "https://trabotti.com.ua/upload/3/compression/1616684495109-Ploshchad.jpg",
    alt: "img6",
    title: "True Value is always inside",
  },
  {
    url: "https://trabotti.com.ua/upload/7/compression/1616689962054-Fragment%20(1).jpg",
    alt: "img7",
    title: "Sea. Culture. A life.",
  },
];
const rooms = [
  {
    url: "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    alt: "1",
  },
  {
    url: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    alt: "2",
  },
  {
    url: "https://images.unsplash.com/photo-1601086386762-0620518df7f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80",
    alt: "3",
  },
  {
    url: "https://images.unsplash.com/photo-1601221998768-c0cdf463a393?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80",
    alt: "4",
  },
  {
    url: "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    alt: "5",
  },
];
const propertyData = [
  { property: 'Property A', price: 500000 },
  { property: 'Property B', price: 700000 },
  { property: 'Property C', price: 600000 },
  { property: 'Property D', price: 900000 },
  { property: 'Property E', price: 800000 },
];
function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time with setTimeout
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="app">
      {isLoading && (
        <>
          <div
            className={`loading-line-container ${isLoading ? "" : "loaded"}`}
          >
            <div className="loading-line"></div>
          </div>
        </>
      )}
      {!isLoading && (
        <div className="content-container">
          <Header />
          {/* <Navbartwo/> */}
          <div className="content-wrappper">
            <Routes>
              <Route
                path="/Real-Estate-Landing-Page"
                element={
                  <>
                    <Heading />
                    <Images images={images} />
                    <VideoSection />
                    <Gallery galleryImages={galleryImages} />
                    <Rooms rooms={rooms} />
                    <LiveInOdesa />
                    <Frenchchic />
                    
                    <Footer />
                  </>
                }
              />
              <Route
                path="/Real-Estate-Landing-Page/leavearequest"
                element={<LeaveARequest />}
              />
              <Route path="/Real-Estate-Landing-Page/prices" element={<PropertyPrices data={propertyData}/>} />
              
            </Routes>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
