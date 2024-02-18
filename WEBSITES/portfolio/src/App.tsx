import React from "react";
// import logo from './logo.svg';
import Service from "./components/main/services/service";
import About from "./components/main/about/about";
import MainContent from "./components/main/mainContent/mainContent";
import Navbar from "./components/navbar/navbar";
import ContactUs from "./components/main/contact/contactUs";
import "./App.css";
import Project from "./components/main/project/project";
// import './img/about.jpg'

const App: React.FC = () => {
  // const dynamicPath: string | undefined = "./img/main.jpg";
  return (
    <>
      <Navbar/>
      {/* main section  */}
      <MainContent/>
      {/* about section  */}
      <About/>
      {/* Services section  */}
      <Service/>
      {/* project section  */}
      <Project/>
      {/* contact section */}
      <ContactUs/>
    </>
  );
};

export default App;
