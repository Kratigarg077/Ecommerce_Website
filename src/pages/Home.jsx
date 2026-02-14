import Banner from "../components/Banner"
import DealOfTheDay from "../components/DealOfTheDay"
import HeroSlider from "../components/HeroSlider"
import HotProducts from "../components/HotProducts"
import ServiceArea from "../components/ServiceArea"

function Home() {
  return (
    <>
      <HeroSlider/>
      <Banner/>
      <DealOfTheDay/>
      <ServiceArea/>
      <HotProducts/>
    </>
  )
}

export default Home