import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import ProductViewer from "./components/productViewer"
import { ScrollTrigger, SplitText } from "gsap/all"
import gsap from "gsap"

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
        <Navbar />
        <Hero />
        <ProductViewer />
    </main>
  )
}

export default App