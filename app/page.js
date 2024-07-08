import Image from "next/image";
import styles from "./page.module.css";
import Footer from "@/components/Footer";
import Banner from "@/components/banner/Banner";
import About from "@/components/About";

export default function Home() {
  return (
    <>
      <main>
        <Banner />
        <About />
      </main>
      <Footer />
    </>
  );
}
