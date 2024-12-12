import { MdEmail } from "react-icons/md"
import { FaPhoneAlt, } from "react-icons/fa"
import { IoLogoWhatsapp } from "react-icons/io"


export default function Contact(){
    return(
        <main className="w-full h-full flex  justify-center items-center flex-col ">
            <div className="w-[80%] flex justify-center items-center flex-col ">
         {/* top container */}


<div className="w-full flex justify-center items-center flex-wrap ">
    <div className="w-[200px] border rounded-lg shadow-2xl p-6 max-w-sm text-center m-3 bg-white hover:shadow-slate-600 transition-shadow duration-300 transform hover:scale-105">
        <FaPhoneAlt className="text-red-600 text-3xl mx-auto mb-1" />
        <h3 className="text-xl font-semibold mb-2">Phone number</h3>
        <p className="text-medium mb-2 break-words">0315-2907886</p>
    </div>
    <div className="w-[200px] border rounded-lg shadow-2xl p-5 max-w-sm text-center m-3 bg-white hover:shadow-slate-600 transition-shadow duration-300 transform hover:scale-105">
        <MdEmail className="text-blue-600 text-3xl mx-auto mb-1" />
        <h3 className="text-xl font-semibold mb-2">Email address</h3>
        <p className="text-sm break-words">nighattariq1986@gmail.com</p>
    </div>
    <div className="w-[200px] border rounded-lg shadow-2xl p-6 max-w-sm text-center m-3 bg-white hover:shadow-slate-600 transition-shadow duration-300 transform hover:scale-105">
        <IoLogoWhatsapp className="text-green-700 text-3xl mx-auto mb-1" />
        <h3 className="text-xl font-semibold mb-2">WhatsApp</h3>
        <p className="text-medium mb-2 break-words">0315-2907886</p>
    </div>
</div>



            {/* bottom container */}

 <div className="w-full flex justify-center items-center min-h-screen bg-gray-100">
    <div className="w-[80%] bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Contact Us</h1>
        <form action="" className="space-y-4">
          
            <input 
                type="text" 
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            /> 
         
            <input 
                type="text" 
                placeholder="abc@gmail.com"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
        
            <textarea 
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 h-32 resize-none" 
                placeholder="Your message"
            ></textarea>
          
            <button 
                type="submit" 
                className="w-full bg-blue-500 text-white font-semibold py-3 rounded-lg hover:bg-blue-600 transition-colors"
            >
                Submit
            </button>
        </form>
    </div>
</div> 

</div>

</main>
    )
}