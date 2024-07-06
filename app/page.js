import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";
import Programs from "@/components/Programs";
import Summary from "@/components/Summary";
import CallToAction from "@/components/CallToAction";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <Summary />
        <CallToAction />
        {/* <Programs /> */}
      </main>
      {/* <Footer /> */}
    </>
  );
}
