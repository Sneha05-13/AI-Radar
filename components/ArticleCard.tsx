type ArticleCardProps = {
  title: string;
};

export default function ArticleCard({
  title,
}: ArticleCardProps) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 hover:border-violet-500 hover:-translate-y-1 transition-all duration-300">

      <span className="text-violet-400 text-sm">
        Tutorial
      </span>

      <h3 className="text-white text-xl font-semibold mt-3">
        {title}
      </h3>

      <button className="mt-4 text-violet-400">
        Read More →
      </button>

    </div>
  );
}