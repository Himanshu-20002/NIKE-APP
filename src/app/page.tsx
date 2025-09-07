


import ReactLenis from "lenis/react"


import { Footer,SupperQuality,Subscribe,PopularProduct} from '../sections'
import HeroPage from "../component/Heropage"
import Section from "@/component/Section";



export default function Home() {
  return (
 <ReactLenis root className="  w-screen overflow-x-hidden bg-black ">
<HeroPage/>

<PopularProduct/>
<SupperQuality/> 

<Section/>

<Subscribe/>
<Footer/>




</ReactLenis>
  );
}
