export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto px-6 py-20">

        <h1 className="text-5xl font-bold">
          Contact
        </h1>

        <p className="mt-4 text-slate-400">
          Have a question or want to suggest an AI tool?
        </p>

        <form className="mt-10 space-y-6">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 rounded-lg bg-slate-900 border border-slate-800"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-4 rounded-lg bg-slate-900 border border-slate-800"
          />

          <textarea
            placeholder="Your Message"
            rows={5}
            className="w-full p-4 rounded-lg bg-slate-900 border border-slate-800"
          />

          <button
            type="submit"
            className="bg-violet-600 px-6 py-3 rounded-lg"
          >
            Send Message
          </button>

        </form>

      </div>
    </main>
  );
}