import Image from "next/image"
import Delievery from "../../public/picture/delivery_870181.png"
import Hours from "../../public/picture/24 hours.png"
import Money from "../../public/picture/money.png"

const Services = () => {
  return (
   <div>
    <section className=" body-font mb-[100px] mt-[100px]">
  <div className="container px-5  mx-auto">
    <div className="text-center mb-10">
      <h1 className="text-myBlack scroll-m-20 text-xl font-extrabold tracking-tight lg:text-2xl ">
       Our Services
      </h1>
      
      <div className="flex mt-2 justify-center">
        <div className="w-16 h-1 rounded-full bg-myOrange inline-flex" />
      </div>
    </div>
    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
        {/* Delivery */}
      <div className="group p-4 mx-auto lg:w-1/3 flex flex-col text-center items-center">
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full  mb-5 flex-shrink-0">
         <Image
         alt="Delievery"
         src={Delievery} 
         width={100}
         height={100}
         className="w-20 h-20"/>

         
        </div>
        <div className="flex-grow">
          <h2 className="text-myBlackPara scroll-m-20 text-lg font-bold tracking-tight lg:text-xl capitalize mb-3 group-hover:text-myOrange">
            free delivery
          </h2>
          <p className="text-myBlackPara scroll-m-20  text-base font-semibold tracking-tight  line-clamp-2 group-hover:text-myBlackPara/80">
           We offer free delivery on all orders over $50.00. Orders under $50.00 will be charged a $5.00 delivery fee
          </p>
        </div>
      </div>
       {/* 24/7*/}
       <div className="group p-4 mx-auto lg:w-1/3 flex flex-col text-center items-center">
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full  mb-5 flex-shrink-0">
         <Image
         alt="Delievery"
         src={Hours} 
         width={100}
         height={100}
         className="w-20 h-20"/>

         
        </div>
        <div className="flex-grow">
          <h2 className="text-myBlackPara scroll-m-20 text-lg font-bold tracking-tight lg:text-xl capitalize mb-3 group-hover:text-myOrange">
            24/7 Customer Service
          </h2>
          <p className="text-myBlackPara scroll-m-20  text-base font-semibold tracking-tight  line-clamp-2 group-hover:text-myBlackPara/80">
          We offer 24/7 customer service to ensure that you get the best experience possible. Our team is always available to answer any questions you may
          </p>
        </div>
      </div>
      {/* Money back*/}
      <div className="group p-4 mx-auto lg:w-1/3 flex flex-col text-center items-center">
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full  mb-5 flex-shrink-0">
         <Image
         alt="Delievery"
         src={Money} 
         width={100}
         height={100}
         className="w-20 h-20"/>

         
        </div>
        <div className="flex-grow">
          <h2 className="text-myBlackPara scroll-m-20 text-lg font-bold tracking-tight lg:text-xl capitalize mb-3 group-hover:text-myOrange">
            Money Back Guarantee
          </h2>
          <p className="text-myBlackPara scroll-m-20  text-base font-semibold tracking-tight  line-clamp-2 group-hover:text-myBlackPara/80">
          If you are not satisfied with your purchase, you can return it within 30 days for a full refund.
          </p>
        </div>
      </div>
   
      
    </div>
    
  </div>
</section>

   </div>
  )
}

export default Services