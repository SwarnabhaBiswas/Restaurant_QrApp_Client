export default function ContactForm() {
  return (
    <section id="contact" className="bg-secondary-200 py-16 px-6">
      <h2 className="text-[40px] font-semibold text-primary-600 text-center mb-6">Contact Us</h2>
      <form className="max-w-xl mx-auto space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border border-secondary-300 rounded px-4 py-2"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full border border-secondary-300 rounded px-4 py-2"
        />
        <textarea
          placeholder="Your Message"
          rows="4"
          className="w-full border border-secondary-300 rounded px-4 py-2"
        />
        <button
          type="submit"
          className="bg-primary-600 text-tertiary px-6 py-2 rounded hover:bg-blue-700"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
