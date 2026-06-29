type ToolCardProps = {
  name: string;
  category: string;
  description: string;
};

export default function ToolCard({
  name,
  category,
  description,
}: ToolCardProps) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 hover:border-violet-500 hover:-translate-y-1 transition-all duration-300">

      <div className="w-12 h-12 bg-violet-600 rounded-lg mb-4"></div>

       <span className="text-violet-400 text-sm">
         {category}
       </span>

      <h3 className="text-white text-xl font-semibold mt-2">
        {name}
      </h3>

     <p className="text-slate-400 mt-2">
      {description}
      </p>

      <button className="mt-4 text-violet-400">
        View Details →
      </button>

    </div>
  );
}