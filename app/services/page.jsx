import MessagesTwo from "@/components/containers/home-two/MessagesTwo";
//import Cta from "@/components/containers/home/Cta";
//import Faq from "@/components/containers/home/Faq";
import Services from "@/components/containers/home/Services";
import CustomCursor from "@/components/layout/CustomCursor";
import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header"
import PageHeader from "@/components/layout/PageHeader";

const page = () => {
  const breadcrumbs = [
    { label: '', link: '/' },
    { label: '', link: null }
  ];
  return (
    <>
      <Header/>
    <Services isSlider={false} showTitle={false} showHeading={true} extraClassName="style2 mt-5"/>
      {/* <Cta/> */}
      {/* <Faq extraClassName="style2"/> */}
      
      <MessagesTwo extraClassName="style2"/>
      <Footer/>
      <CustomCursor/>
    </>
  )
}

export default page
