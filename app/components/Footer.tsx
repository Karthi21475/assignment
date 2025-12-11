import Button from "./Button"
import facebook from "../assets/Facebook.svg"
import youtube from "../assets/Youtube.svg"
import twitter from "../assets/Twitter.svg"
import medium from "../assets/Medium.svg"
import pinterest from "../assets/Pinterest.svg"
import linkedin from "../assets/Linkedin.svg"
import Image from "next/image"
import logo from "../assets/Group 236.svg"
function Footer() {
return (
    <footer className="bg-[#202221] h-[500px] max-[1025px]:h-screen flex justify-around items-center max-[1025px]:flex-col">
        <div className="flex flex-col justify-around h-full">
            <div className="w-[440px] rounded-2xl p-2.5 border border-white flex justify-between">
                <input type="text" placeholder="Enter Your Email Here" className="text-white text-[14px]"/>
                <Button Text="Subscribe To Newsletter" className="bg-[#2E302F] text-white border-none w-[185px] h-[45px] rounded-[15px] text-[12px] font-bold" />
            </div>
            <h1 className="w-[440px] h-[68px] text-white text-[24px] font-extrabold">
                Signup and start enjoying the benifits today!
            </h1>
            <Button Text={"Sign Up To Lilypads"}
            className="w-[200px] h-[60px] text-[14px] font-extrabold bg-[#7C5AC7] text-white border-none"/>
            <div className="flex">
                <Image src={facebook} alt="facebook"/>
                <Image src={youtube} alt="youtube"/>
                <Image src={twitter} alt="twitter"/>
                <Image src={medium} alt="medium"/>
                <Image src={pinterest} alt="pinterest"/>
                <Image src={linkedin} alt="linkedin"/>
            </div>
        </div>
        <div className="flex flex-col justify-around h-full">
            <div className="flex items-center gap-[70]">
                <Image src={logo} alt="Logo" width={120} height={70}/>
                <div>
                    <p className="text-[12px] text-white">Reach Us At</p>
                    <p className="w-[180] h-[51] text-[12px] opacity-60 text-white">6751 Columbia Gateway Dr.,
                    3rd floor, Columbia,
                    MD 21046</p>
                </div>
            </div>
            <div className="grid grid-rows-2 grid-cols-3 h-[260] w-full">
                <div className="flex flex-col gap-2">
                    <p className="text-[12px] text-white">Network</p>
                    <p className="w-[180] text-[12px] opacity-60 text-white">Community</p>
                    <p className="w-[180] text-[12px] opacity-60 text-white">Investor</p>
                    <p className="w-[180] text-[12px] opacity-60 text-white">Broker</p>
                </div>
                <div className="flex flex-col gap-2">
                    <p className="text-[12px] text-white">Product</p>
                    <p className="w-[180] text-[12px] opacity-60 text-white">Invest</p>
                    <p className="w-[180] text-[12px] opacity-60 text-white">Discover</p>
                    <p className="w-[180] text-[12px] opacity-60 text-white">Transact</p>
                    <p className="w-[180] text-[12px] opacity-60 text-white">Manage</p>
                </div>
                <div className="flex flex-col gap-2">
                    <p className="text-[12px] text-white">Our Story</p>
                    <p className="w-[180] text-[12px] opacity-60 text-white">Approach</p>
                    <p className="w-[180] text-[12px] opacity-60 text-white">AboutUs</p>
                </div>
                <div className="flex flex-col gap-2">
                    <p className="text-[12px] text-white">Technology</p>
                    <p className="w-[180] text-[12px] opacity-60 text-white">Artificial Intelligence</p>
                    <p className="w-[180] text-[12px] opacity-60 text-white">Block Chain</p>
                </div>
                <div className="flex flex-col gap-2">
                    <p className="text-[12px] text-white">Highlights</p>
                    <p className="w-[180] text-[12px] opacity-60 text-white">Impact of COVID-19 on the food and beverage industry and the retail sector</p>
                    <p className="w-[180] text-[12px] opacity-60 text-white">Commercial lending during COVID-19: navigating the impact</p>
                </div>
                <div className="flex flex-col gap-2">
                    <p className="text-[12px] text-white">Knowledge Center</p>
                    <p className="w-[180] text-[12px] opacity-60 text-white">Resource</p>
                    <p className="w-[180] text-[12px] opacity-60 text-white">Blog</p>
                </div>
            </div>
        </div>
    </footer>
)
}

export default Footer