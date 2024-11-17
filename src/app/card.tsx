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
        <div className="flex flex-row rounded-xl drop-shadow-md bg-white p-4 border border-1 border-gray-100 gap-[18px] w-[310px]">
            <Image 
                alt=""
                className="object-cover w-[115px] h-[130px]"
                src={image}
                width={115}
                height={130}
            />
            <div className="flex flex-col justify-between text-[#5A5A5A]">
                <div>
                    <p className="font-semibold">
                        {title}
                    </p>
                    <p className="text-[20px]">
                        {description}
                    </p>
                </div>
                <a
                    className="bg-[#B268E8] text-white w-full p-1 text-center block rounded-md drop-shadow hover:drop-shadow-md hover:brightness-105 active:brightness-95"
                    target="_blank"
                    href={link}  
                >
                    Presentear
                </a>
            </div>
        </div>
    )
}