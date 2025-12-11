import Image from "next/image"
import Link from "next/link"
import Button from "./Button"
function Nav() {
    return (
        <nav className="w-screen h-fit p-4 px-12 fixed z-999 backdrop-blur-sm">
            <div className="flex justify-between">
                <div className="flex gap-8">
                    <div className="w-[90px] h-[54px] relative">
                        <Image
                        src={"./logo.svg"}
                        alt="logo"
                        fill
                        />
                    </div>
                    <ul className="flex gap-8 items-center text-[14px]">
                        <li className="text-[#7C5AC7] relative"><Link href="/" className="after:w-1 after:h-1 after:content-[''] after:top-5  after:left-5 after:absolute after:bg-[#7C5AC7] after:rounded-[50%]">Home</Link></li>
                        <li><Link href="/network">Network</Link></li>
                        <li><Link href="/product">Product</Link></li>
                        <li className="max-[820px]:hidden"><Link href="/technology">Technology</Link></li>
                        <li className="max-[920px]:hidden"><Link href="/our-story">Our Story</Link></li>
                        <li className="max-[1080px]:hidden"><Link href="/knowledge-center">Knowledge Center</Link></li>
                    </ul>
                </div>
                <div className="flex gap-4">
                    <Button Text="Contact Us" className="bg-[#7c59c1] text-white text-[14px] max-[720px]:hidden"/>
                    <Button Text="Log In" className="text-[#7c59c1] bg-white text-[14px]"/>
                </div>
            </div>
        </nav>
    )
}

export default Nav