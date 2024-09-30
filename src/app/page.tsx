import CategoryBlog from "@/Components/Home/CategoryBlog/CategoryBlog";
import FeaturedBlogs from "@/Components/Home/FeaturedBlogs/FeaturedBlogs";
import Hero from "@/Components/Home/Hero/Hero";
import NewsLetter from "@/Components/Home/Newsletter/NewsLetter";
import TravelTips from "@/Components/Home/TravelTips/TravelTips";
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
      </div>
    </main>
  );
}
