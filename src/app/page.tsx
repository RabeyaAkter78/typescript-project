import CategoryBlog from "@/Components/Home/CategoryBlog/CategoryBlog";
import Destination from "@/Components/Home/Destination/Destination";
import FeaturedBlogs from "@/Components/Home/FeaturedBlogs/FeaturedBlogs";
import Hero from "@/Components/Home/Hero/Hero";
import NewsLetter from "@/Components/Home/Newsletter/NewsLetter";
import TravelEssentials from "@/Components/Home/TravelEssentials/TravelEssentials";
import TravelTips from "@/Components/Home/TravelTips/TravelTips";
import Footer from "@/Components/Shared/Footer/Footer";
import NavBar from "@/Components/Shared/Navbar/Navbar";
export default function Home() {
  return (
    <main className="h-screen">
      <div className=" py-2">
        <NavBar></NavBar>
        <Hero></Hero>
        <CategoryBlog />
        <TravelTips />
        <NewsLetter />
        <FeaturedBlogs />
        <TravelEssentials />
        <Destination />
        <Footer />
      </div>
    </main>
  );
}
