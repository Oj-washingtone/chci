import Image from "next/image";
import styles from "./page.module.css";
import Footer from "@/components/Footer";
import Banner from "@/components/banner/Banner";
import About from "@/components/About";
import Mission from "@/components/Mission";
import Activities from "@/components/Activities";
import Statistics from "@/components/Statistics";
import Events from "@/components/Events";
import CallToAction from "@/components/CallToAction";
import Team from "@/components/Team";
import Subscribe from "@/components/Subscribe";
import ContactUs from "@/components/ContactUs";
import Gallery from "@/components/Gallery";
import Fab from "@/components/FAB";

export default function Home() {
  return (
    <>
      <main>
        <Banner />
        <About />
        <Mission />
        <Activities />
        <Statistics />
        <Events />
        <CallToAction />
        <Team />
        {/* <ContactUs /> */}
        <Subscribe />
        {/* <Gallery /> */}
        <Fab />
      </main>
      <Footer />
    </>
  );
}
