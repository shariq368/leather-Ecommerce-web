import { Button } from "@/components/ui/button"
import { FaCartShopping, FaHeart } from "react-icons/fa6";


const Slug = () => {
  return (
    <div>
        <section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <img
        alt="ecommerce"
        className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
        src="https://dummyimage.com/400x400"
      />
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 className="text-sm title-font text-gray-500 tracking-widest">
          Leather HandBag
        </h2>
        <h1 className="scroll-m-20 text-2xl font-semibold tracking-tigh text-myBlack capitalize">
          Camel Color HandBag
        </h1>
        {/* <div className="flex mb-4">
          <span className="flex items-center">
            <svg
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 text-indigo-500"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <svg
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 text-indigo-500"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <svg
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 text-indigo-500"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <svg
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 text-indigo-500"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 text-indigo-500"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <span className="text-gray-600 ml-3">4 Reviews</span>
          </span>
          <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
            <a className="text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a className="text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
            <a className="text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
              </svg>
            </a>
          </span>
        </div> */}
        <p className="leading-relaxed scroll-m-20 text-base font-normal text-myBlackPara">Best quality HandBag for women. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero minus, beatae reprehenderit voluptatum quis in cum, cupiditate cumque facere esse, sed autem dignissimos earum. Eligendi soluta ad fugiat culpa est!</p>
        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
          <div className="flex">
            <span className="mr-3">Color</span>
                        <button className="border-2 border-gray-300 mr-1 bg-orange-500 rounded-full w-6 h-6 focus:outline-none active:border-black focus:border-black " />
                        <button className="border-2 border-gray-300 mr-1 bg-[#000000] rounded-full w-6 h-6 focus:outline-none active:border-black focus:border-black " />
                        <button className="border-2 border-gray-300 mr-1 bg-[#C5796D] rounded-full w-6 h-6 focus:outline-none active:border-black focus:border-black " />
                        <button className="border-2 border-gray-300 mr-1 bg-[#3c1053] rounded-full w-6 h-6 focus:outline-none active:border-black focus:border-black " />
            
          </div>
          <div className="flex ml-6 items-center">
            <span className="mr-3">Size</span>
            <div className="relative">
              <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                <option>SM</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
              </select>
              <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className="title-font font-medium text-2xl text-gray-900">
            $58.00
          </span>
          <Button className="group bg-myBlack hover:bg-transparent text-myWhite hover:text-myBlack  scroll-m-20 text-xs font-semibold rounded-xl">
                        <FaCartShopping className="mr-2 h-4 w-4 group-hover:text-myOrange duration-300" />
                        Add to Cart
                    </Button>
          
        </div>
        <Button className="group bg-myBlack hover:bg-transparent text-myWhite hover:text-myBlack  scroll-m-20 text-xs font-semibold rounded-xl">
                        <FaCartShopping className="mr-2 h-4 w-4 group-hover:text-myOrange duration-300" />
                        Add to Cart
                    </Button>
        
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Slug