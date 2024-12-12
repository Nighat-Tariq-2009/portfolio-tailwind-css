
import { FaLaptopCode, FaHtml5 ,  FaCss3Alt , FaReact, } from "react-icons/fa"
import { TbBrandJavascript } from "react-icons/tb";
import { RiNextjsFill } from "react-icons/ri";


export default function Skills(){
    return(
       <main className="w-full h-full flex  justify-center items-center flex-col md:mt-20 mt-64">
        <div className="w-[80%] flex justify-center items-center flex-col">
            {/* top container */}
            <div className="top-container">
                <h2 className="text-center text-3xl font-bold text-slate-800 p-5 ">My Skills</h2>
                <p className="w-[80%] text-center m-auto text-slate-600 mb-8">
                I help people learn web development step by step, from basic HTML to advanced JavaScript. I make coding easy with  exercises. </p>
            </div>
            {/* bottom container */}
            <div className="flex justify-center items-center flex-wrap gap-4 mb-6">
                
                <div className="w-[250px] border rounded-lg shadow-2xl p-6 max-w-sm text-center bg-white hover:shadow-slate-600 transition-shadow duration-300 hover:scale-105">
               <FaLaptopCode className="text-red-600 text-8xl mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Web Development</h3>
  
              </div>
                <div className="w-[250px] border rounded-lg shadow-2xl p-6 max-w-sm text-center bg-white hover:shadow-slate-600 transition-shadow duration-300 hover:scale-105">
                <FaHtml5 className="text-green-600 text-8xl m-auto mb-4 " />
                <h3 className="text-xl font-semibold mb-2">Html 5</h3>
                </div>
                <div className="w-[250px] border rounded-lg shadow-2xl p-6 max-w-sm text-center bg-white hover:shadow-slate-600 transition-shadow duration-300 hover:scale-105">
                    <FaCss3Alt className="text-blue-600 text-8xl mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">CSS 3</h3>
                 
                </div>
                <div className="w-[250px] border rounded-lg shadow-2xl p-6 max-w-sm text-center bg-white hover:shadow-slate-600 transition-shadow duration-300 hover:scale-105">
                    <FaReact className="text-yellow-600 text-8xl mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">React.Js</h3>
               
                </div>
                <div className="w-[250px] border rounded-lg shadow-2xl p-6 max-w-sm text-center bg-white hover:shadow-slate-600 transition-shadow duration-300 hover:scale-105">
                    <TbBrandJavascript className="text-purple-800 text-8xl mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">JavaScript</h3>
                    
                    </div>
                <div className="w-[250px] border rounded-lg shadow-2xl p-6 max-w-sm text-center bg-white hover:shadow-slate-600 transition-shadow duration-300 hover:scale-105">
                    <RiNextjsFill className="text-pink-600 text-8xl" />
                    <h3 className="text-xl font-semibold mb-2">Next.Js</h3>
                    
                    </div>

            </div>

        </div>
       </main>
    )
}