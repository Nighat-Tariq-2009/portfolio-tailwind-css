// import Link from "next/link"
// import Image from "next/image"
// import {
//     Sheet,
//     SheetContent,
//     SheetDescription,
//     SheetHeader,
//     SheetTitle,
//     SheetTrigger,
//   } from "@/components/ui/sheet"
// import { Menu } from "lucide-react"
// function Header(){
//     return(
//         <header className="w-full flex  justify-between items-center h-14 px-3 bg-blue-700 text-white">
//             {/* logo */}
//             <div>
//                  <Image src={"/logo.png"} className="rounded-full" width={50} height={50} alt="logo" />
//             </div>
//             {/* Nav links */}
//             <ul className="hidden md:block">
//                 <li className="space-x-5">
//                     <Link href={"/"} className="hover:text-red-500">Home</Link>
//                     <Link href={"about"}>About</Link>
//                     <Link href={"contact"}>Contact</Link>
//                     <Link href={"project"}>Project</Link>
//                     <button className="bg- bgray-600 hover:bg-gray-950 text-white px-4 py-2 rounded-lg font-bold">Download CV</button>
//                     </li>
//             </ul>
//             <Sheet>
//     <SheetTrigger className="text-xl md:hidden p-2 rounded-md border-none hover:bg-gray-200 focus:ring-2 focus:ring-gray-400">
//     <Menu />
//     </SheetTrigger>
//     <SheetContent className="bg-white shadow-lg rounded-lg p-4">
//     <SheetHeader>
//     <SheetTitle></SheetTitle>
//     <SheetDescription>
//     <ul >
//               <li className=" flex flex-col gap-5 ">
//                     <Link href={"/"}>Home</Link>
//                     <Link href={"about"}>About</Link>
//                     <Link href={"contact"}>Contact</Link>
//                     <Link href={"project"}>Project</Link>
//                     <button className="bg-gray-800 text-white px-4 py-2 rounded-lg font-bold">Download CV</button>
//                     </li>
//             </ul>
//       </SheetDescription>
//     </SheetHeader>
//   </SheetContent>
// </Sheet>

//         </header>

//     )
// }
// export default Header


import Link from "next/link"
import Image from "next/image"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

function Header(){
    return(
        <header className="w-full flex justify-between items-center h-14 px-3 bg-blue-700 text-white">
            {/* logo */}
            <div>
                <Image src={"/logo.png"} className="rounded-full" width={50} height={50} alt="logo" />
            </div>
            {/* Nav links */}
            <ul className="hidden md:block">
                <li className="space-x-5">
                    <Link href={"/"} className="hover:text-red-500 transition-colors duration-300">Home</Link>
                    <Link href={"about"} className="hover:text-red-500 transition-colors duration-300">About</Link>
                    <Link href={"contact"} className="hover:text-red-500 transition-colors duration-300">Contact</Link>
                    <Link href={"project"} className="hover:text-red-500 transition-colors duration-300">Project</Link>
                    <button className="bg-gray-600 hover:bg-gray-950 text-white px-4 py-2 rounded-lg font-bold transition-colors duration-300">Download CV</button>
                </li>
            </ul>
            <Sheet>
                <SheetTrigger className="text-xl md:hidden p-2 rounded-md border-none hover:bg-gray-200 focus:ring-2 focus:ring-gray-400 transition-colors duration-300">
                    <Menu />
                </SheetTrigger>
                <SheetContent className="bg-white shadow-lg rounded-lg p-4">
                    <SheetHeader>
                        <SheetTitle></SheetTitle>
                        <SheetDescription>
                            <ul>
                                <li className="flex flex-col gap-5">
                                    <Link href={"/"} className="hover:text-red-500 transition-colors duration-300">Home</Link>
                                    <Link href={"about"} className="hover:text-red-500 transition-colors duration-300">About</Link>
                                    <Link href={"contact"} className="hover:text-red-500 transition-colors duration-300">Contact</Link>
                                    <Link href={"project"} className="hover:text-red-500 transition-colors duration-300">Project</Link>
                                    <button className="bg-gray-800 text-white px-4 py-2 rounded-lg font-bold transition-colors duration-300">Download CV</button>
                                </li>
                            </ul>
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </header>
    )
}

export default Header
