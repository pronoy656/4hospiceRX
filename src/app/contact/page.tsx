export default function Contact() {
  return (
    <div className="max-w-[1200px] mx-auto px-6 py-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div className="space-y-8">
          <h1 className="text-6xl font-extrabold text-text-primary leading-tight">
            Let's Start a <span className="text-primary">Conversation</span>
          </h1>
          <p className="text-xl text-text-secondary leading-relaxed max-w-md">
            Our team of clinical specialists and pharmacy experts are ready to assist you.
          </p>
          <div className="space-y-6">
            <div className="p-1 border-l-4 border-primary pl-4">
              <strong className="block text-primary text-sm uppercase tracking-widest mb-1">Support Email</strong>
              <span className="text-lg font-semibold">support@4hospicerx.com</span>
            </div>
            <div className="p-1 border-l-4 border-primary pl-4">
              <strong className="block text-primary text-sm uppercase tracking-widest mb-1">Direct Line</strong>
              <span className="text-lg font-semibold">+1 (800) 4HOSPICE</span>
            </div>
          </div>
        </div>
        
        <form className="bg-bg-secondary p-12 rounded-3xl border border-border-color shadow-xl space-y-6">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-bold text-text-primary">Full Name</label>
            <input type="text" id="name" placeholder="John Doe" className="w-full px-5 py-4 rounded-xl border border-border-color bg-bg-primary focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-bold text-text-primary">Email Address</label>
            <input type="email" id="email" placeholder="john@example.com" className="w-full px-5 py-4 rounded-xl border border-border-color bg-bg-primary focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="block text-sm font-bold text-text-primary">How can we help?</label>
            <textarea id="message" rows={5} placeholder="Tell us about your needs..." className="w-full px-5 py-4 rounded-xl border border-border-color bg-bg-primary focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"></textarea>
          </div>
          <button type="submit" className="w-full py-4.5 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/20 transition-all hover:bg-primary-hover hover:-translate-y-0.5 active:translate-y-0">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

