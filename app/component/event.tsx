import Image from "next/image";
export default function Eventstory() {
  return (
   <div className="p-4 max-w-9xl max-h-full mx-auto bg-gray-100">
    <div className="max-w-5xl max-h-4xl mx-auto flex items-center  bg-amber-100">
        <Image src="/evennt.jpg" alt="Story Image"  width={600}   // pick values matching your design
  height={520} className="h-130 w-150 rounded-lg shadow-lg mb-4" />
       <div className="p-4 flex flex-col">
        <h2 className="text-4xl font-bold text-black mb-2">Up Coming Event</h2>
        <p className="text-lg text-black">She always dreamed of doing something bold, something delicious. So, with courage in her heart and recipes passed down from her grandma, she opened her own burger shop a cozy little place on the corner where every bite tells a story of passion, grit, and flavor. This isn&apos;t just a burger joint; it&apos;s her dream served with fries.🍔✨
        </p>
        <p className="text-lg text-black mt-4">Join us in celebrating the journey</p>
        <p className="text-lg text-black">and savoring the flavors that make every burger a masterpiece.</p>    
        <button className="mt-4 bg-amber-300 text-black p-3 rounded-lg hover:bg-amber-400 transition duration-300 font-bold">
          Read More
        </button>
       </div>
        </div>
        </div>

  );
}