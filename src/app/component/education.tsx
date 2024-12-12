
export default function Education(){
    return(
        <main className="w-full h-full min-h-screen flex flex-col justify-center items-center bg-gray-100 mt-10">
           <div className="edu-text">
           <h1 className="text-center text-3xl text-slate-800 font-bold pb-5" >EDUCATION</h1>
            <p className="w-[60%] text-center m-auto text-slate-600 pb-5">"My educational journey has provided me with a strong foundation in science, equipping me with analytical and problem-solving skills that I apply in my development projects. Here is a summary of my academic background:"</p>
           </div>
           <div className="flex justify-between items-center w-[80%] bg-white pt-8 mt-10 px-3">
            <div className="flex flex-col">
                <h2 className="text-center text-2xl text-slate-800 font-semibold ">University of Karachi</h2>
                <span>Student</span>
            </div>
            <div className="flex flex-col">
                <h2 className="text-center text-2xl text-slate-800 font-semibold">Master of Science (M.Sc.)</h2>
                <p>Specialization: [Specialization in Parasitology]</p>
            </div>
           </div>

           <div className="flex justify-between items-center w-[80%] bg-white pt-8 px-3">
            <div className="flex flex-col">
                <h2 className="text-center text-2xl text-slate-800 font-semibold">Sir Syed College</h2>
                <span>Student</span>
            </div>
            <div className="flex flex-col">
                <h2 className="text-center text-2xl text-slate-800 font-semibold">Intermediate in Science</h2>
                <p>Major Subjects: Physics, Chemistry, Biology</p>
            </div>
              </div>
            <div className="flex justify-between items-center w-[80%] bg-white pt-8 px-3 pb-8">
            <div className="flex flex-col">
                <h2 className="text-center text-2xl text-slate-800 font-semibold">Helicon School</h2>
                <span>Student</span>
            </div>
            <div className="flex flex-col">
                <h2 className="text-center text-2xl text-slate-800 font-semibold">Matriculation in Science</h2>
                <p>Major Subjects: Physics, Chemistry, Biology</p>
            </div>

    
           </div>
        </main>

    )
}