export default function ModernTemplate({ items }) {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-700 text-white p-8 rounded-xl shadow-xl font-mono">
      <h3 className="text-2xl font-semibold mb-6 border-b border-gray-500 pb-2 text-center tracking-wider text-blue-400">
        Modern Drinks Menu
      </h3>
      <ul className="space-y-4 text-base">
        {items.map((item, index) => (
          <li key={index} className="flex justify-between">
            <span className="text-gray-200">{item.name}</span>
            <span className="text-blue-300 font-bold">₹{item.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
