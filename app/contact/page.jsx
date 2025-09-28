import ContactPage from "@/components/containers/contact/ContactPage";
import CustomCursor from "@/components/layout/CustomCursor";
import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header"
import PageHeader from "@/components/layout/PageHeader";

const Page = () => {
  const breadcrumbs = [
    { label: '', link: '/' },
    { label: '', link: null }
  ];
  return (
    <>
      <Header/>
      <PageHeader title="" breadcrumbs={breadcrumbs}/>
      <ContactPage/>
      <Footer/>
      <CustomCursor/>
    </>
  );
}

export default Page;

