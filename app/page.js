import Navbar from "@/components/Navbar";
import OurService from "@/components/OurService";
import Packages from "@/components/Packages";
import Slider from "@/components/Slider";

export default function Home() {
  return (
    <main className=" ">
      <Navbar />
      <Slider />
      <OurService />
      <Packages />
    </main>
  );
}
