import Image from "next/image";
import heroBg from "../assets/heroBg.png"
import hero1 from "../assets/hero1.svg"
import hero2 from "../assets/hero2.svg"
import Button from "./Button";
function Hero() {
return (
    <div className="h-[900px] w-screen flex justify-between">
        <div className="h-[fit] flex flex-col justify-center z-3 bg-[#ffffff] pl-[75px]">
            <p className="text-[#9E2349] w-fit h-6 text-[16px]/24px">Welcome to the</p>
            <div className="w-[548px] h-[338px] gap-2.5 mb-10">
                <h1 className="text-[71px]/20 font-[DM_Serif_Display] font-normal h-[276px]">Unprecedented Era of <span className="text-[#9E2349]">Real Estate Investing</span></h1>
                <p className="h-[52px] text-[16px]/9 text-gray-400 font-medium">Lilypads uses sophisticated technologies for data-driven decisions in investing, managing and funding commercial real estate assets</p>
            </div>
            <Button Text="Start Investing Now ->" className="text-white bg-[#7c59c1] px-10 py-5 text-[16px] mb-[110px]"/>
            <div className="flex gap-[30px] w-[630px]">
                <div className="w-[190px]">
                    <h1 className="text-[36px] text-[#7c59c1] font-bold">658+</h1>
                    <p className="text-[14px]">Properties Registered</p>
                </div>
                <div className="w-[190px]">
                    <h1 className="text-[36px] text-[#7c59c1] font-bold">685+</h1>
                    <p className="text-[14px]">Deals Craked</p>
                </div>
                <div className="w-[190px]">
                    <h1 className="text-[36px] text-[#7c59c1] font-bold">255+</h1>
                    <p className="text-[14px]">Investors</p>
                </div>
            </div>
        </div>
        <div className="w-[595px] max-w-full h-[900px] relative ">
            <Image
                src={heroBg}
                alt="HeroBG"
                fill
            />
            <div className="flex z-2 absolute w-[720] fit right-0 top-[142px]">
                <Image
                src={hero1}
                alt="relative image"
                width={417}
                height={706}
                />
                <Image
                src={hero2}
                alt="relative image"
                width={338}
                height={706}
                />
            </div>
        </div>
    </div>
)
}

export default Hero