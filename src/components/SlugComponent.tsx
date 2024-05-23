"use client"
import Image from "next/image"
import React, { useState } from "react"


const SlugComponent = () => {
    const [path, setPath] = useState("")
    return (
        <div>
            <Image
             src={path ? path :'/picture/camelhand.jpeg'}
             alt="ecommerce"
              width={400} 
              height={400} />
            <div className="flex items-center justify-evenly mx-auto mt-2">
                <div className="cursor-pointer w-16 h-16">
                    <Image
                     src={'/picture/camelhand.jpeg'}
                      alt="abc" 
                      width={60} 
                      height={60} 
                      onClick={()=> setPath('/picture/camelhand.jpeg')}/>
                </div>
                <div className="cursor-pointer w-16 h-16">
                    <Image
                     src={'/picture/beltpic-2.jpeg'}
                      alt="abc" 
                      width={60} 
                      height={60} 
                      onClick={()=> setPath('/picture/beltpic-2.jpeg')}/>
                </div>
                <div className="cursor-pointer w-16 h-16">
                    <Image
                     src={'/picture/wallet-3.jpeg'}
                      alt="abc" 
                      width={60} 
                      height={60} 
                      onClick={()=> setPath('/picture/wallet-3.jpeg')}/>
                </div>
                

            </div>
        </div>

    )
}

export default SlugComponent