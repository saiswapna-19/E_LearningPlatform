export default function Contact() {
  return (
    <main className="min-h-[70vh] bg-gray-50 px-6 py-16">
      <div className="mx-auto max-w-2xl rounded-2xl bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-bold text-gray-900">Contact Us</h1>
        <p className="mt-3 text-gray-600">
          Have questions about our courses? We'd love to hear from you.
        </p>

        <form className="mt-8 space-y-4" onSubmit={e => e.preventDefault()}>
          <input required placeholder="Your name" className="w-full rounded-lg border p-3" />
          <input required type="email" placeholder="Email address" className="w-full rounded-lg border p-3" />
          <textarea required placeholder="Your message" rows="4" className="w-full rounded-lg border p-3" />
          <button className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700">
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
}