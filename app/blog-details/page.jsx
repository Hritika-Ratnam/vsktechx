import BlogDetailsPage from "@/components/containers/blog/BlogDetailsPage";
import CustomCursor from "@/components/layout/CustomCursor";
import Footer from "@/components/layout/footer/Footer"
import Header from "@/components/layout/header/Header"
import PageHeader from "@/components/layout/PageHeader";

const page = () => {
  const breadcrumbs = [
    { label: '', link: '/' },
    { label: '', link: '/blog' },
    { label: '', link: null }
  ];
  return (
    <>
      <Header/>
      <PageHeader title="" breadcrumbs={breadcrumbs}/>
      <BlogDetailsPage/>
      <Footer/>
      <CustomCursor/>
    </>
  )
}

export default page
