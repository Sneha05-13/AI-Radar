type ToolCardProps = {
  name: string;
  category: string;
};

export default function ToolCard({
  name,
  category,
}: ToolCardProps) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">

      <div className="w-12 h-12 bg-violet-600 rounded-lg mb-4"></div>

      <h3 className="text-white text-xl font-semibold">
        {name}
      </h3>

      <p className="text-slate-400 mt-2">
        {category}
      </p>

      <button className="mt-4 text-violet-400">
        View Details →
      </button>

    </div>
  );
}