export default function BlogPage() {
  const articles = [
    "How I Use ChatGPT For Coding",
    "Claude vs ChatGPT",
    "Best Free AI Tools For Students",
    "My Favorite AI Tools In 2026",
    "Cursor AI Review",
    "Perplexity AI Review",
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">

        <h1 className="text-5xl font-bold mb-12">
          Blog
        </h1>

        <div className="grid md:grid-cols-2 gap-6">

          {articles.map((article) => (
            <div
              key={article}
              className="bg-slate-900 border border-slate-800 rounded-xl p-6"
            >
              <span className="text-violet-400 text-sm">
                Tutorial
              </span>

              <h2 className="text-2xl font-semibold mt-3">
                {article}
              </h2>

              <button className="mt-4 text-violet-400">
                Read More →
              </button>
            </div>
          ))}

        </div>

      </div>
    </main>
  );
}