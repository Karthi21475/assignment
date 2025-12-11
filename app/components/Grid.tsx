import Image from "next/image"

function Grid(props:{image:string,heading:string,para:string}) {
return (
    <div>
          <div className="flex items-center">
            <Image
              src={props.image}
              alt="relative image"
              width={90}
              height={90}
              className="w-[90] h-[90]"
            />
            <p>{props.heading}</p>
          </div>
          <p className="text-gray-500">{props.para}</p>
    </div>
)
}

export default Grid