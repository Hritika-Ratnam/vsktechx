import About from "@/components/containers/home-two/About";
// import Pricing from "@/components/containers/home-two/Pricing";
import WhoWeAre from "@/components/containers/home-two/WhoWeAre";
import Cta from "@/components/containers/home/Cta";
//import Team from "@/components/containers/home/Team";
import TextSlider from "@/components/containers/home/TextSlider";
import CustomCursor from "@/components/layout/CustomCursor";
import Footer from "@/components/layout/footer/Footer"
import Header from "@/components/layout/header/Header"
import PageHeader from "@/components/layout/PageHeader"

const page = () => {
  const breadcrumbs = [
    { label: '', link: '/' },
    { label: '', link: null }
  ];
  return (
    <>
      <Header/>
      <PageHeader title="" breadcrumbs={breadcrumbs}/>
      <About extraClassName="style2"/>
      <TextSlider/>
      <WhoWeAre/>
      {/* <Team/> */}
      {/* <Cta/> */}
  {/* <Pricing extraClassName="style2"/> */}
      <Footer/>
      <CustomCursor/>
    </>
  )
}

export default page
