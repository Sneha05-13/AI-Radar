export default function Hero() {
  return (
    <section className="bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-24">

        <h1 className="text-6xl font-bold max-w-3xl">
          Discover The Best AI Tools
        </h1>

        <p className="mt-6 text-slate-300 text-lg max-w-2xl">
          Reviews, tutorials, comparisons and
          real-world workflows for developers,
          students and creators.
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