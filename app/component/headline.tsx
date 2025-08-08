import Image from "next/image";
export default function Headline() {
  return (
    <div className="font-serif p-4 shadow-md flex items-center justify-between">
     <div className="flex flex-col items-center">   
     <h1 className="text-7xl font-bold text-center my-4 p-5">A Premium And Authentic Burger House!</h1>
     <button className="text-2xl bg-amber-300 text-black p-5 rounded-lg hover:bg-amber-400 transition duration-300 font-bold">
       Order Now
     </button>
     </div>
     <Image src="/headline.jpg" alt="Restaurant Logo" className="h-150 w-200   " />
    </div>
           
    );
}