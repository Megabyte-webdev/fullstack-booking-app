import Banner from "../components/Banner"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import SpecialitySection from "../components/SpecialitySection"
import TopDoctors from "../components/TopDoctors"

const HomePage = () => {
  return (
    <div>
      <Hero />
      <SpecialitySection />
      <TopDoctors />
      <Banner />
      <Footer />
    </div>
  )
}

export default HomePage