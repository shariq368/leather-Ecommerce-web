import BestSellingCard from "@/components/BestSellingCard";


const Category = () => {
    const bestsell = [
        {

            src: "/picture/bestsell.jpg",
            alt: "hand Bag",
            title: "Women HandBag",
            description: "Best quality HandBag for women",
            price: 150,
            category:"handbag",
            slug:"Leather handbag"
        },
        {

            src: "/picture/bestsell.jpg",
            alt: "hand Bag",
            title: "Women HandBag",
            description: "Best quality HandBag for women",
            price: 150,
            category:"handbag",
            slug:"Leather handbag"
        },
        {

            src: "/picture/bestsell.jpg",
            alt: "hand Bag",
            title: "Women HandBag",
            description: "Best quality HandBag for women",
            price: 150,
            category:"handbag",
            slug:"Leather handbag"
        },
        {

            src: "/picture/bestsell.jpg",
            alt: "hand Bag",
            title: "Women HandBag",
            description: "Best quality HandBag for women",
            price: 150,
            category:"handbag",
            slug:"Leather handbag"
        },
        {

            src: "/picture/bestsell.jpg",
            alt: "hand Bag",
            title: "Women HandBag",
            description: "Best quality HandBag for women",
            price: 150,
            category:"handbag",
            slug:"Leather handbag"
        },
        {

            src: "/picture/bestsell.jpg",
            alt: "hand Bag",
            title: "Women HandBag",
            description: "Best quality HandBag for women",
            price: 150,
            category:"handbag",
            slug:"Leather handbag"
        },
        {

            src: "/picture/bestsell.jpg",
            alt: "hand Bag",
            title: "Women HandBag",
            description: "Best quality HandBag for women",
            price: 150,
            category:"handbag",
            slug:"Leather handbag"
        },
        {

            src: "/picture/bestsell.jpg",
            alt: "hand Bag",
            title: "Women HandBag",
            description: "Best quality HandBag for women",
            price: 150,
            category:"handbag",
            slug:"Leather handbag"
        },
        {

            src: "/picture/bestsell.jpg",
            alt: "hand Bag",
            title: "Women HandBag",
            description: "Best quality HandBag for women",
            price: 150,
            category:"handbag",
            slug:"Leather handbag"
        },
        


    ];
    return (
        <div className="mt-[50px] mb-[100px] ">
            {/* Heading */}
            <div className="container px-5  mx-auto">
                <div className="text-center mb-10">
                    <h1 className="text-myBlack scroll-m-20 text-xl font-extrabold tracking-tight lg:text-2xl capitalize ">
                        hand bag
                    </h1>

                    <div className="flex mt-2 justify-center">
                        <div className="w-16 h-1 rounded-full bg-myOrange inline-flex" />
                    </div>
                </div>
            </div>
            {/* Category page starts here */}
            <div className="flex flex-wrap justify-center gap-16">
                {
                    bestsell.map((items, i) => (
                        <BestSellingCard
                            key={i}
                            src={items.src}
                            alt={items.alt}
                            title={items.title}
                            description={items.description}
                            price={items.price}
                            category={items.category}
                            slug={items.slug} />

                    ))
                }


            </div>
        </div>
    )
}

export default Category