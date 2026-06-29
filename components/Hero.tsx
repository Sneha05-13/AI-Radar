export default function Hero() {
  return (
    <section className="bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-24">


        <h1 className="text-5xl md:text-7xl font-bold max-w-4xl">
        Discover, Compare & Learn AI Tools
        </h1>

        <p className="mt-6 text-slate-300 text-lg max-w-2xl">
           Find honest AI tool reviews, tutorials,
           comparisons and real-world workflows
            for students, developers and creators.
        </p>

<div className="mt-8 max-w-xl">
  <input
    type="text"
    placeholder="Search AI tools..."
    className="w-full p-4 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder:text-slate-500 focus:outline-none focus:border-violet-500"
  />
</div>

<p className="mt-3 text-slate-500 text-sm">
  Popular: ChatGPT, Claude, Cursor, Gemini
</p>

        <div className="mt-8 flex gap-4">

          <button className="bg-violet-600 px-6 py-3 rounded-lg">
            Explore Tools
          </button>

          <button className="border border-slate-700 px-6 py-3 rounded-lg">
            Read Tutorials
          </button>

        </div>

      </div>
    </section>
  );
}