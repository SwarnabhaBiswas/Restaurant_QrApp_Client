export default function MinimalTemplate({ items }) {
  return (
    <div className="bg-white text-gray-800 p-8 rounded-lg shadow-md border border-gray-200 font-sans">
      <h3 className="text-2xl font-bold mb-6 border-b-2 border-gray-300 pb-2 tracking-wide">
        Minimal Menu
      </h3>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex justify-between text-lg">
            <span className="font-medium">{item.name}</span>
            <span className="font-semibold">₹{item.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
