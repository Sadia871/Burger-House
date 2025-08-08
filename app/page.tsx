import Image from "next/image";
import  { Header } from "./component/home";
import Headline from "./component/headline";
import MenuBar from "./component/menu";
import Eventstory from "./component/event";
import Footer from "./component/footer";
import Banner from "./component/banner";
import HeroWithSlider from "./component/slider";

import "./globals.css";
export default function Home() {
  return (
    <div>
      <Header />
      <Headline />
      <HeroWithSlider />
      
      <MenuBar />
      
      <Eventstory />
      <Banner />
      <Footer />
    </div>
  );
}
