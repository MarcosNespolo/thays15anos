import Image from "next/image"

type CardProps = {
    title: string,
    description: string,
    image: string,
    link: string
}

export default function Card({
    title,
    description,
    image,
    link
}:CardProps){

    return (
        <div className="flex flex-col sm:flex-row rounded-xl drop-shadow-md bg-white p-4 border border-1 border-gray-100 gap-2 sm:gap-[18px] w-[144px] min-w-[144px] sm:w-[310px]">
            <Image 
                alt=""
                className="object-cover w-[60px] h-[60px] mx-auto sm:w-[115px] sm:h-[130px]"
                src={image}
                width={115}
                height={130}
            />
            <div className="w-full flex flex-col gap-1 xl:gap-0 justify-between text-[#5A5A5A]">
                <div>
                    <p className="font-semibold text-[12px] sm:text-[16px]">
                        {title}
                    </p>
                    <p className="text-[14px] mt-1 sm:mt-0 sm:text-[20px]">
                        {description}
                    </p>
                </div>
                <a
                    className="bg-[#8A7CCB] text-white w-full p-1 text-center block rounded-md drop-shadow hover:drop-shadow-md hover:brightness-105 active:brightness-95 text-[12px] sm:text-[16px]"
                    target="_blank"
                    href={link}  
                >
                    Presentear
                </a>
            </div>
        </div>
    )
}