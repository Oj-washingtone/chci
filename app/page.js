import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Banner from "@/components/banner/Banner";
import About from "@/components/About";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <About />
      </main>
      <Footer />
    </>
  );
}
