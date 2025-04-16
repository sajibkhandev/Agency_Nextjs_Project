import Banner from "@/layouts/Banner";
import Navber from "@/layouts/Navber";
import Service from "@/layouts/Service";
import Product from "@/layouts/Product";
import Teams from "@/layouts/Teams";
import About from "@/layouts/About";




export default function Home() {
  return (
    <>
    <Navber/>
    <Banner/>
    <Service/>
    <Product/>
    <Teams/>
    <About/>
    </>
   
  );
}
