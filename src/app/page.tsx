import BestSelling from "@/components/BestSelling"
import Categories from "@/components/Categories"
import Hero from "@/components/Hero"
import Promotion from "@/components/Promotion"
import Services from "@/components/Services"

const page = () => {
  return (
    <div>
     <Hero/>
     <Services/>
     <Promotion/>
     <Categories/>
     <BestSelling/>
    </div>
  )
}

export default page