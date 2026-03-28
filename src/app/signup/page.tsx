import Link from "next/link";

export default function Signup() {
  return (
    <div className="min-h-[calc(100vh-400px)] flex items-center justify-center py-20 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.03),transparent_70%)]">
      <div className="w-full max-w-[480px] bg-bg-primary border border-border-color p-12 rounded-3xl shadow-2xl">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-text-primary mb-2">Join 4hospiceRx</h1>
          <p className="text-text-secondary text-sm">Start optimizing your medication workflows today.</p>
        </div>
        <form className="space-y-8">
           <div className="space-y-6">
            <div className="space-y-2">
              <label className="block text-sm font-bold text-text-primary pl-1">Organization Name</label>
              <input type="text" placeholder="Hospice Care Central" className="w-full px-5 py-3.5 rounded-xl border border-border-color focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-bold text-text-primary pl-1">Administrator Email</label>
              <input type="email" placeholder="admin@care.org" className="w-full px-5 py-3.5 rounded-xl border border-border-color focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-bold text-text-primary pl-1">Password</label>
              <input type="password" placeholder="••••••••" className="w-full px-5 py-3.5 rounded-xl border border-border-color focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
            </div>
          </div>
          <button type="submit" className="w-full py-4 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/20 transition-all hover:bg-primary-hover hover:-translate-y-0.5">Initialize Integration</button>
          <div className="text-center text-sm text-text-secondary">
            Already on the platform? <Link href="/login" className="text-primary font-bold hover:underline">Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

