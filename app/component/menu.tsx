import Image from 'next/image';
export default function MenuBar() { 

  return (
    <div className="bg-amber-300 p-4">
      <h1 className="text-4xl font-bold font-serif  mb-6">Menu</h1> 
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-2">Burger</h2>
          <p className="text-lg mb-4">Juicy beef patty with fresh lettuce, tomato, and our special sauce.</p>
          <Image src="/burger.jpg" alt="Burger" width={350} height={200} className="rounded-lg mb-4" />
          <p className="text-xl font-bold">$9.99</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-2">Fries</h2>
          <p className="text-lg mb-4">Crispy golden fries served with your choice of dipping sauce.</p>
          <Image src="/friess.gif" alt="Fries" width={380} height={220} className="rounded-lg mb-4" />
          <p className="text-xl font-bold">$3.99</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold
            mb-2">Salad</h2>
            <p className="text-lg mb-4">Fresh garden salad with mixed greens, cherry tomatoes, cucumbers, and vinaigrette.</p>
            <Image src="/salad.jpg" alt="Salad" width={380} height={240} className="rounded-lg mb-4" />
            <p className="text-xl font-bold">$5.99</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-2">Soda</h2>
            <p className="text-lg mb-4">Refreshing soda to complement your meal.</p>
            <Image src="/soda.jpg" alt="Soda" width={380} height={270} className="rounded-lg mb-4" />
            <p className="text-xl font-bold">$1.99</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-2">Dessert</h2>
            <p className="text-lg mb-4">Indulge in our delicious dessert of the day.</p>
            <Image src="/desserts.jpg" alt="Dessert" width={330} height={290} className="rounded-lg mb-4" />
            <p className="text-xl font-bold">$4.99</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-2">Special Drink</h2>
            <p className="text-lg mb-4">Special drink crafted with fresh ingredients.</p>
            <Image src="/special drink.jpg" alt="Special Drink" width={380} height={270} className="rounded-lg mb-4" />
            
            <p className="text-xl font-bold">$2.99</p>
        </div>
        </div>
       
    </div>
  );
}