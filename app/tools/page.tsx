export default function ToolsPage() {
  const tools = [
    "ChatGPT",
    "Claude",
    "Gemini",
    "Cursor",
    "Perplexity",
    "Notion AI",
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">

        <h1 className="text-5xl font-bold mb-12">
          AI Tools
        </h1>

        <div className="grid md:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <div
              key={tool}
              className="bg-slate-900 border border-slate-800 rounded-xl p-6"
            >
              <div className="w-12 h-12 bg-violet-600 rounded-lg mb-4"></div>

              <h2 className="text-2xl font-semibold">
                {tool}
              </h2>

              <p className="text-slate-400 mt-2">
                AI productivity tool.
              </p>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}