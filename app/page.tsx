import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ToolCard from "../components/ToolCard";
import ArticleCard from "../components/ArticleCard";
import Footer from "../components/Footer";

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

            <ToolCard
              name="ChatGPT"
              category="AI Assistant"
            />

            <ToolCard
              name="Claude"
              category="Writing AI"
            />

            <ToolCard
              name="Cursor"
              category="Coding AI"
            />

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