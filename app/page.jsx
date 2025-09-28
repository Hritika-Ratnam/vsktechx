import Banner from "@/components/containers/home/Banner";
import Technologies from "@/components/containers/home/Technologies";
import WhyWorkWithUs from "@/components/containers/home/WhyWorkWithUs";
import Blog from "@/components/containers/home/Blog";
import Counter from "@/components/containers/home/Counter";
//import Cta from "@/components/containers/home/Cta";
//import Faq from "@/components/containers/home/Faq";
//import Features from "@/components/containers/home/Features";
import Messages from "@/components/containers/home/Messages";
//import Projects from "@/components/containers/home/Projects";
import Services from "@/components/containers/home/Services";
//import Team from "@/components/containers/home/Team";
import Testimonial from "@/components/containers/home/Testimonial";
import TextSlider from "@/components/containers/home/TextSlider";
import CustomCursor from "@/components/layout/CustomCursor";
import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";

export default function Home() {
  return (
    <>
      <Header/>
      <Banner/>
      {/* <Features/> */}
      <Services showDropdown={false}/>
    <Technologies/>
    <WhyWorkWithUs/>
    <TextSlider/>
    <Counter/>
      {/* //<Team/> */}
      {/* <Messages/> */}
      {/* <Cta/> */}
      <Testimonial/>
      {/* <Projects/> */}
      {/* <Faq/> */}
      <Blog/>
      <Footer/>
      <CustomCursor/>
    </>
  );
}
