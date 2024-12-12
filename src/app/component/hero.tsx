import { Dot, Facebook, Github, Linkedin, MapPinCheckInside } from "lucide-react";
import Image from "next/image";

export default function Hero(){
    return(
        <main className="w-full h-[450px]   flex justify-center items-center mt-10 md:mt-5">
            <div className="flex w-full md:w-[80%] h-full  justify-center items-center pt-10 flex-col md:flex-row shadow-lg p-3 mt-3">
                {/* left */}
                <div className=" md:w-[40%]   pt-48 md:pt-10 ">
                    <Image src={"/image1.jpg"} className="rounded-full" width={300} height={300} alt="profile-image" />
                </div>
                {/* right */}
                <div className="w-full p-5 md:w-[60%]  space-y-5">
                    <h1 className="text-3xl  font-bold text-slate-800">Hi, I am Nighat Tariq</h1>
                    <p className="text-slate-600">My role involves transforming creative ideas into responsive 
                        and dynamic web applications using technologies like HTML, CSS, JavaScript, 
                        and frameworks such as React or Next.js.</p>
                        <div>
                            <p className="flex"><MapPinCheckInside className="text-red-800" />Karachi, Pakistan</p>
                            <p className="flex"><Dot className="text-green-600  " />Available for new projects</p>
                        </div>
                        <div className="flex space-x-3">
                        <Github className="text-red-500 hover:text-red-900" /> 
                        <Linkedin className="text-green-600 hover:text-green-950"/> 
                        <Facebook className="text-blue-700 hover:text-blue-950"/>
                        </div>
                         

                </div>
            </div>
        </main>
    )
}