import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

function About(){
    return(
        <div className="w-full h-full min-h-screen flex justify-center items-center bg-gray-100 ">
            <div className="w-[80%] h-full flex flex-col md:flex-row justify-center items-center">
                {/* left */}
                <div className="flex justify-center items-center flex-col w-full md:w-[40%] mt-5 ">
                    <div className="mt-10">
                    {/* <img src="image1.jpg" alt="my-pic" className="rounded-full border shadow-lg" /> */}
                    <Image src={"/image1.jpg"} width={250} height={180} alt="my-image round" />
                    </div>
                    <div className="flex p-5 gap-5">
                   <Link href= "facebook.com"><FaFacebook className="text-blue-700 hover:text-blue-950 text-3xl" /></Link>
                   <Link href="" ><FaGithub className="text-red-500 hover:text-red-900 text-3xl"/></Link>
                   <Link href="" ><FaLinkedin className="text-green-600 hover:text-green-950 text-3xl" /></Link>
                 </div>
                </div>
                {/* right */}
                <div className="w-[80%] md:w-[60%] mb-8">
                    <h1 className="text-3xl  font-bold text-slate-800 mb-5">About us </h1>
                    <p className="text-slate-600"> I am learning the essentials of HTML, CSS, and JavaScript. I am starting to understand the basics of front-end design, responsive layouts, and adding interactivity to make sites more engaging. With each new project, I'm gaining confidence in my coding skills and looking forward to exploring more advanced topics like frameworks and APIs the essentials of HTML, CSS, and JavaScript. I’m starting to understand the basics of front-end design, responsive layouts, and adding interactivity to make sites more engaging. With each new project.</p>
                   
                </div>
                


            </div>
        </div>
    )
}
export default About