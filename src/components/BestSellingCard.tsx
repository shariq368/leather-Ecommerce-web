import Image from "next/image"

import { Button } from "./ui/button"
import { FaCartShopping, FaHeart } from "react-icons/fa6";
import Link from "next/link";

const BestSellingCard = ({
    src,
    alt,
    title,
    description,
    price,
    category,
    slug,

}: {
    src: string,
    alt: string,
    title: string,
    description: string,
    price: number,
    category: string,
    slug: string,


}) => {
    return (
        <div>
            <div className="w-[350px] h-[35rem] p-4 mx-auto shadow-md rounded-xl relative group">
                <Link href={`/${category}/${slug}`}>
                <div className="block  h-[23rem] rounded overflow-hidden">
                    <Image
                        src={src}
                        alt={alt}
                        width={400}
                        height={400} />
                </div>
                <div className="mt-4 ">
                    {title && (
                        <h2 key={title} className="scroll-m-20 border-b pb-2 text-lg text-myBlack font-semibold tracking-tight first:mt-0 line-clamp-1">{title}</h2>
                    )}
                    {description &&(
                        <p  className="mt-2 scroll-m-20 text-sm font-semibold tracking-tight text-myBlackPara line-clamp-1">{description}</p>
                    )}
                    {price &&(
                        <p  className="mt-2 scroll-m-20 text-base font-semibold tracking-tight text-myBlack line-clamp-1">${price}</p>
                    )}
                </div>
                </Link>
                <div>
                    <Button className="group bg-myBlack hover:bg-transparent text-myWhite hover:text-myBlack  scroll-m-20 text-xs font-semibold rounded-xl absolute bottom-2 right-2 ">
                        <FaCartShopping className="mr-2 h-4 w-4 group-hover:text-myOrange duration-300" />
                        Add to Cart
                    </Button>
                    <Button className="group bg-myBlack hover:bg-transparent text-myWhite hover:text-myBlack  scroll-m-20 text-xs font-semibold rounded-xl absolute bottom-2 left-2 ">
                        <FaHeart className="mr-2 h-4 w-4 group-hover:text-myOrange duration-300" />
                        Buy Now
                    </Button>

                </div>
            </div>
        </div>
    )
}

export default BestSellingCard