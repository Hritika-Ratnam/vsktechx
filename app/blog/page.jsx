import BlogPage from "@/components/containers/blog/BlogPage";
import CustomCursor from "@/components/layout/CustomCursor";
import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import PageHeader from "@/components/layout/PageHeader";

const page = () => {
  const breadcrumbs = [
    { label: '', link: '/' },
    { label: '', link: ' ' }
  ];

  return (
    <>
      <Header />
    <PageHeader title="" breadcrumbs={breadcrumbs} />

      {/* Added Blog Heading */}
      <div className="text-center pt-120 mb-4">
        <h2 className="text-3xl font-bold">Blog</h2>
      </div>

      <BlogPage />
      <Footer />
      <CustomCursor />
    </>
  );
};

export default page;
