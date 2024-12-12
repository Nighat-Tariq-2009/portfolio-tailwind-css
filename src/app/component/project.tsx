       
import Link from "next/link"

import Image from "next/image"

// project section
 export default function Project (){
    return(
     

        
       <main className="w-full h-full flex  justify-center items-center flex-col  ">
        <div className="w-[80%] flex justify-center items-center flex-col ">
            {/* top container */}
            <div className="top-container">
                <h2 className="text-center text-3xl font-bold text-slate-800 p-5">My Projects</h2>
                <p className="w-[80%] text-center m-auto text-slate-600 mb-8">
                I help people learn web development step by step, from basic HTML to advanced JavaScript. I make coding easy with  exercises. </p>
            </div>
            {/* bottom container */}
            <div className="flex justify-center items-center flex-wrap gap-4">

                <div className="w-[250px] border rounded-lg shadow-2xl p-6 max-w-sm text-center bg-white hover:shadow-slate-600 transition-shadow duration-300">
                <Link href=" https://nighat-tariq-2009.github.io/bulb-on-off-project/">
                <Image src={"/img1.png"} width={120} height={100}  className="m-auto transition-transform duration-300 hover:scale-110" alt="my-project" />
                </Link>
                <h3 className="text-xl font-semibold mb-2">Bulb turn on/off</h3>
                
                </div>
                <div className="w-[250px] border rounded-lg shadow-2xl p-6 max-w-sm text-center bg-white hover:shadow-slate-600 transition-shadow duration-300">
                <Link href="https://nighat-tariq-2009.github.io/signup-form/">
                <Image src={"/img2.png"} width={140} height={100}  className="m-auto transition-transform duration-300 hover:scale-110" alt="my-project" /></Link>
                <h3 className="text-xl font-semibold mb-2">Sign-Up Form</h3>
                
                </div>
                <div className="w-[250px] border rounded-lg shadow-2xl p-6 max-w-sm text-center bg-white hover:shadow-slate-600 transition-shadow duration-300">
                <Link  href="https://nighat-tariq-2009.github.io/mySimple-calculator/">
                <Image src={"/img1.png"} width={120} height={100}  className="m-auto transition-transform duration-300 hover:scale-110" alt="my-project" />
                </Link>
                    <h3 className="text-xl font-semibold mb-2">Simple Calculator</h3>
                </div>
                <div className="w-[250px] border rounded-lg shadow-2xl p-6 max-w-sm text-center bg-white hover:shadow-slate-600 transition-shadow duration-300">
                <Link href="https://nighat-tariq-2009.github.io/post-application/">
                <Image src={"/img4.png"} width={100} height={100}  className="m-auto transition-transform duration-300 hover:scale-110" alt="my-project" />
                </Link>
                    <h3 className="text-xl font-semibold mb-2">Post Application</h3>
                    
                </div>
                <div className="w-[250px] border rounded-lg shadow-2xl p-6 max-w-sm text-center bg-white hover:shadow-slate-600 transition-shadow duration-300">
                <Link href="https://nighat-tariq-2009.github.io/quiz-application/">
                <Image src={"/img5.png"} width={150} height={100}  className="m-auto transition-transform duration-300 hover:scale-110" alt="my-project" />
                </Link>
                    <h3 className="text-xl font-semibold mb-2">Quiz Application</h3>
                  
                    </div>
                <div className="w-[250px] border rounded-lg shadow-2xl p-6 max-w-sm text-center bg-white hover:shadow-slate-600 transition-shadow duration-300">
                <Link href="https://nighat-tariq-2009.github.io/todo-list/">
                <Image src={"/img6.png"} width={200} height={100}  className="m-auto transition-transform duration-300 hover:scale-110" alt="my-project" /></Link>
                <h3 className="text-xl font-semibold mb-2">To-Do List</h3>
                   
                    </div>

            </div>

        </div>
       </main>
    )
}