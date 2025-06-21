export default function ClassicTemplate({ items }) {
  return (
    <div className="bg-gradient-to-b from-yellow-100 to-red-100 text-red-900 p-8 rounded-lg shadow-md border border-red-300 font-serif">
      <h3 className="text-3xl font-bold mb-6 border-b-4 border-red-500 pb-2 text-center tracking-wide">
        Classic Indian Menu
      </h3>
      <ul className="space-y-3 text-lg">
        {items.map((item, index) => (
          <li key={index} className="flex justify-between">
            <span>{item.name}</span>
            <span>₹{item.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
