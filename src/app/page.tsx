import Image from "next/image";
import LiquidChrome from '../component/LiquidChrome'
import Hero from '../component/Hero'
import ReactLenis from "lenis/react"
import Nav from '../components/Nav'
import IconiCollection from '../component/IconiCollection'
import { Footer,CustomerReviews,SpecialOffer,SupperQuality,Subscribe,Services,PopularProduct} from '../sections'
import HeroPage from "../component/Heropage"
import Section from "@/component/Section";
import Scene from "@/components/3d/scene";


export default function Home() {
  return (
 <ReactLenis root className="  w-screen overflow-x-hidden bg-black ">
<HeroPage/>

<PopularProduct/>
<SupperQuality/> 

<Section/>

<Subscribe/>
<Footer/>
 {/* <div className=" h-100vh  bg-black  w-full  relative   ">
         <Scene/>
        </div> */}



</ReactLenis>
  );
}
