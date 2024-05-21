import Image from "next/image"
import handbag from "../../public/picture/handbag.jpg"
import purse from "../../public/picture/wallet (2).jpeg"
import accesories from "../../public/picture/shoes (2).jpeg"
import belt from "../../public/picture/Beltpic.jpeg"
import Link from "next/link"

const Categories = () => {
  return (
    <div className="mb-[100px] mt-[100px">
          {/* Heading */}
          <div className="container px-5  mx-auto">
                <div className="text-center mb-10">
                    <h1 className="text-myBlack scroll-m-20 text-xl font-extrabold tracking-tight lg:text-2xl ">
                        Our Categories
                    </h1>

                    <div className="flex mt-2 justify-center">
                        <div className="w-16 h-1 rounded-full bg-myOrange inline-flex" />
                    </div>
                </div>
            </div>
            {/* Categories Starts from here */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Category 1 */}
                <div className="mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative">
                    <Link href={'/handbag'}>
                    <Image 
                    alt="Hand bag"
                    src={handbag}
                    width={350}
                    height={350}
                    className="rounded-xl duration-500 group-hover:scale-125 w-[25rem] h-[25rem]"/>
                    <div className="hidden lg:block absolute -bottom-24 group-hover:bottom-0 duration-500 scroll-m-20 text-4xl font-extrabold tracking-tight  bg-myBlack/70 text-center text-myWhite w-full">
                        <h1 className="uppercase">Hand Bag</h1>
                    </div>
                    <div className="block lg:hidden absolute bottom-28  duration-500 z-[100] scroll-m-20 text-4xl font-extrabold tracking-tight  bg-myBlack/70 text-center text-myWhite w-full">
                        <h1 className="uppercase">Hand Bag</h1>
                    </div>
                    </Link>

                </div>
                 {/* Category 2 */}
                 <div className="mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative">
                    <Link href={'/wallet'}>
                    <Image 
                    alt="wallet"
                    src={purse}
                    width={350}
                    height={350}
                    className="rounded-xl duration-500 group-hover:scale-125 w-[25rem] h-[25rem]"/>
                    <div className=" hidden lg:block absolute -bottom-24 group-hover:bottom-0 duration-500 scroll-m-20 text-4xl font-extrabold tracking-tight  bg-myBlack/70 text-center text-myWhite w-full">
                        <h1 className="uppercase">Wallet</h1>
                    </div>
                    <div className="block lg:hidden absolute bottom-28  duration-500 z-[100] scroll-m-20 text-4xl font-extrabold tracking-tight  bg-myBlack/70 text-center text-myWhite w-full">
                        <h1 className="uppercase">Wallet</h1>
                    </div>
                    </Link>

                </div>
                {/* Category 3 */}
                <div className="mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative">
                    <Link href={'/shoes'}>
                    <Image 
                    alt="shoes"
                    src={accesories}
                    width={350}
                    height={350}
                    className="rounded-xl duration-500 group-hover:scale-125 w-[25rem] h-[25rem]"/>
                    <div className=" hidden lg:block absolute -bottom-24 group-hover:bottom-0 duration-500 scroll-m-20 text-4xl font-extrabold tracking-tight  bg-myBlack/70 text-center text-myWhite w-full">
                        <h1 className="uppercase">Shoes</h1>
                    </div>
                    <div className="block lg:hidden absolute bottom-28  duration-500 z-[100] scroll-m-20 text-4xl font-extrabold tracking-tight  bg-myBlack/70 text-center text-myWhite w-full">
                        <h1 className="uppercase">Shoes</h1>
                    </div>
                    </Link>

                </div>
                {/* Category 4 */}
                <div className="mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative">
                    <Link href={'/belts'}>
                    <Image 
                    alt="Belt"
                    src={belt}
                    width={350}
                    height={350}
                    className="rounded-xl duration-500 group-hover:scale-125 w-[25rem] h-[25rem]"/>
                    <div className=" hidden lg:block absolute -bottom-24 group-hover:bottom-0 duration-500 scroll-m-20 text-4xl font-extrabold tracking-tight  bg-myBlack/70 text-center text-myWhite w-full">
                        <h1 className="uppercase">Belts</h1>
                    </div>
                    <div className="block lg:hidden absolute bottom-28  duration-500 z-[100] scroll-m-20 text-4xl font-extrabold tracking-tight  bg-myBlack/70 text-center text-myWhite w-full">
                        <h1 className="uppercase">Belts</h1>
                    </div>
                    </Link>

                </div>
                

            </div>
    </div>
  )
}

export default Categories