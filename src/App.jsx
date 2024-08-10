import Button1 from "./components/Buttons/EncryptButton"
import VerticalAccordion from "./components/Accordions/VerticalAccordion"
import D3Phone from "./components/Features/3D1"
import { CardsFeatures } from "./components/Features/CardsFeatures"
import { AuroraHero } from "./components/Heros/Hero2"
import ShuffleHero from "./components/Heros/Hero3"
import { SmoothScrollHero } from "./components/Heros/ScrollHero"
import { TextParallaxContent1 } from "./components/ParallelEffects/ParallaxContent1"
import Card1 from "./components/Cards/TiltCard"
import { DragCards } from "./components/Cards/DragCards"
import SquishyCard from "./components/Cards/SquishyCard"
import HoverDevCards from "./components/Cards/HoverDevCards"
import { SwipeCarousel } from "./components/Carousels/SwipeCarousel"
import HorizontalScroll from "./components/Carousels/HorizontalScrollCarousel"
import { ShiftingDropDown } from "./components/Dropdowns.jsx/ShiftingDropDown"
import Dropdown from "./components/Dropdowns.jsx/FlyoutLink"
import StaggeredDropDown from "./components/Dropdowns.jsx/StaggeredDropDown"
import { RevealBento } from "./components/Features/RevealBento"
import { RevealLinks } from "./components/Features/RevealLinks"
import { Links } from "./components/Features/ClipPathLinks"
import { HoverImageLinks } from "./components/Features/HoverImageLinks"
import { VanishList } from "./components/Features/VanishList"
import { DivOrigami } from "./components/Features/LogoOrigami"
import { HoverImageTrail } from "./components/Features/MouseImageTrail"
import StackCards from "./components/Accordions/code"
import { CursorTrail } from "./components/Accordions/CursorMove"
import LabelIndicatorCarousel from "./components/Accordions/CardMove"
import { TextTypingEffectWithTextsFadeOut } from "./components/Accordions/TypingEffect"



function App() {
  return (
    <>
   <SmoothScrollHero/>
   <AuroraHero/>
   <ShuffleHero/>
   <TextParallaxContent1/>
   <CardsFeatures/>
   <D3Phone/>
   <VerticalAccordion/>
   <Button1/>
  <Card1/>
  <DragCards/>
  <SquishyCard/>
  <HoverDevCards/>
  <SwipeCarousel/>
  <HorizontalScroll/>
  <ShiftingDropDown/>
  <Dropdown/>
  <StaggeredDropDown/>
  <RevealBento/>
  <RevealLinks/>
  <Links/>
  <HoverImageLinks/>
  <VanishList/>
  <DivOrigami/>
  <HoverImageTrail/>
  <StackCards/>
  <CursorTrail/>
  <LabelIndicatorCarousel/>
  <TextTypingEffectWithTextsFadeOut/>
    </>
  )
}
export default App
