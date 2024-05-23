"use client"
import SlugComponent from "@/components/SlugComponent";
import { Button } from "@/components/ui/button"
import { FaCartShopping, FaHeart, FaPlus, FaMinus } from "react-icons/fa6";


const Slug = () => {
  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            {/* Image */}
            {/* <img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src="https://dummyimage.com/400x400"
            /> */}
            <SlugComponent/>
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              {/* Heading */}
              <h2 className="scroll-m-20 text-sm font-semibold text-gray-500 tracking-widest">
                Leather HandBag
              </h2>

              <h1 className="mt-2 scroll-m-20 text-2xl font-semibold tracking-tigh text-myBlack capitalize">
                Camel Color HandBag
              </h1>
              {/* rating */}
              <div className="rating rating-sm mt-2">
                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
              </div>
              {/* description */}

              <p className="mt-2 leading-relaxed scroll-m-20 text-base font-normal text-myBlackPara">Best quality HandBag for women. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero minus, beatae reprehenderit voluptatum quis in cum, cupiditate cumque facere esse, sed autem dignissimos earum. Eligendi soluta ad fugiat culpa est!</p>
              <div className="flex mt-6 items-center  mb-5">
                <div className="flex">
                  <span className="mr-3 scroll-m-20 text-base font-semibold tracking-tight text-myBlackPara">Color</span>
                  <button className="border-2 border-gray-300 mr-1 bg-orange-500 rounded-full w-6 h-6 focus:outline-none active:border-black focus:border-black " />
                  <button className="border-2 border-gray-300 mr-1 bg-[#000000] rounded-full w-6 h-6 focus:outline-none active:border-black focus:border-black " />
                  <button className="border-2 border-gray-300 mr-1 bg-[#C5796D] rounded-full w-6 h-6 focus:outline-none active:border-black focus:border-black " />
                  <button className="border-2 border-gray-300 mr-1 bg-[#3c1053] rounded-full w-6 h-6 focus:outline-none active:border-black focus:border-black " />

                </div>
                {/* Sizing */}
                <span className="mr-3 scroll-m-20 text-base font-semibold tracking-tight text-myBlackPara">Size</span>
                <div className="relative">
                  <label className="form-control w-full max-w-xs">
                    <select className="select select-bordered scroll-m-20 text-sm font-semibold tracking-tight text-myBlack">
                      <option disabled selected>Select Size</option>
                      <option>S</option>
                      <option>M</option>
                      <option>L</option>
                      <option>XL</option>
                      <option>XXL</option>
                    </select>
                  </label>
                </div>
              </div>
              {/* Quantity */}
              <div className="flex items-center">
              <span className="mr-3 scroll-m-20 text-base font-semibold tracking-tight text-myBlackPara">Quantity</span>

              <Button className=" group bg-myBlack hover:bg-transparent text-myWhite hover:text-myBlack  scroll-m-20 text-xs font-semibold rounded-xl w-fit h-fit">
                <FaMinus className="mr-2 h-4 w-4 group-hover:text-myOrange duration-300" />
                Less
              </Button>
              <div className="mr-2 ml-2 scroll-m-20 text-bs font-semibold tracking-tight">1</div>
              <Button className=" group bg-myBlack hover:bg-transparent text-myWhite hover:text-myBlack  scroll-m-20 text-xs font-semibold rounded-xl w-fit h-fit">
                <FaPlus className="mr-2 h-4 w-4 group-hover:text-myOrange duration-300" />
                Add
              </Button>
              </div>

              <div className="divider"></div>
              {/* Price */}
              <div className="flex items-center justify-between">
                <span className="scroll-m-20 text-2xl font-semibold tracking-tight text-myBlack">
                  $58.00
                </span>
                <Button className=" group bg-myBlack hover:bg-transparent text-myWhite hover:text-myBlack  scroll-m-20 text-xs font-semibold rounded-xl">
                  <FaCartShopping className="mr-2 h-4 w-4 group-hover:text-myOrange duration-300" />
                  Add to Cart
                </Button>

              </div>
              <Button className=" mt-2 group w-full bg-myBlack hover:bg-transparent text-myWhite hover:text-myBlack  scroll-m-20 text-xs font-semibold rounded-xl">
                <FaHeart className="mr-2 h-4 w-4 group-hover:text-myOrange duration-300" />
                Buy Now
              </Button>

            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Slug