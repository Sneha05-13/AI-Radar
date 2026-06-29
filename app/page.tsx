import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ToolCard from "../components/ToolCard";
import ArticleCard from "../components/ArticleCard";
import Footer from "../components/Footer";
import { tools } from "../data/tools";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />

      <section className="bg-slate-950 py-20">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-white mb-10">
            Featured AI Tools
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

          {tools.map((tool) => (
         <ToolCard
          key={tool.name}
         name={tool.name}
         category={tool.category}
         description={tool.description}
          />
         ))}

         </div>

        </div>
      </section>


      <section className="bg-slate-950 py-20">
  <div className="max-w-7xl mx-auto px-6">

    <h2 className="text-4xl font-bold text-white mb-10">
      Popular Categories
    </h2>

    <div className="grid md:grid-cols-3 gap-6">

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
        🧠 Writing AI
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
        💻 Coding AI
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
        🎨 Image AI
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
        🎥 Video AI
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
        📈 Marketing AI
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
        📚 Education AI
      </div>

      </div>

     </div>
     </section>

      <section className="bg-slate-950 py-20">
  <div className="max-w-7xl mx-auto px-6">

    <h2 className="text-4xl font-bold text-white mb-10">
      Latest Articles
    </h2>

    <div className="grid md:grid-cols-3 gap-6">

      <ArticleCard
        title="How I Use ChatGPT For Coding"
      />

      <ArticleCard
        title="Claude vs ChatGPT"
      />

      <ArticleCard
        title="Best Free AI Tools For Students"
      />

    </div>

  </div>
</section>
<Footer />
    </>

  );
}