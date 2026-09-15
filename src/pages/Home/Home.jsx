import Hero from "../../sections/Hero/Hero"
import FeaturedCategories from "../../sections/FeaturedCategories/FeaturedCategories"
import CuratedPicks from "../../sections/CuratedPicks/CuratedPicks"
import Cellar from "../../sections/Cellar/Cellar"
import Collections from "../../sections/Collections/Collections"
import Reviews from "../../sections/Reviews/Reviews"
import WineClub from "../../sections/WineClub/WineClub"
export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedCategories />
      <CuratedPicks />
      <Cellar />
      <Collections />
      <Reviews />
      <WineClub />
    </main>
  )
}
