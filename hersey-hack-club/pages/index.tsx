import FAQ from "./components/homepage_component/faq/FAQ";
import Footer from "./components/global/footer/Footer";
import Header from "./components/global/header/Header";
import Landing from "./components/homepage_component/landing/Landing";  
import Head from "next/head";
import Summary from "./components/homepage_component/summary/Summary";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hersey Hack Club</title>
        <link rel="icon" href="/HackClub_Logo.png" />
        <link rel="preload" href="/LandingBackground.jpg" as="image" />
      </Head>
      <Header />
      <Landing />  
      <Summary />
      <FAQ />
      <Footer />
    </>
  );
}
