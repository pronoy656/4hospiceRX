import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Solutions",
      links: [
        { name: "Pharmacy Services", href: "/pharmacy-solutions" },
        { name: "Cost Management", href: "/tools" },
        { name: "PBM Integration", href: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Articles", href: "/resources" },
        { name: "E-books", href: "#" },
        { name: "Webinars", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#" },
        { name: "Contact", href: "/contact" },
        { name: "Careers", href: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-bg-secondary pt-20 pb-8 border-t border-border-color mt-auto">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-16 mb-16">
          <div className="max-w-[300px]">
            <Link href="/" className="text-2xl font-extrabold text-text-primary mb-4 block">
              4hospice<span className="text-primary">Rx</span>
            </Link>
            <p className="text-text-secondary text-[0.95rem] leading-relaxed">
              Optimizing medication management for hospice care providers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {footerLinks.map((section) => (
              <div key={section.title} className="space-y-6">
                <h3 className="text-[1.1rem] font-bold text-text-primary">{section.title}</h3>
                <ul className="flex flex-col gap-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link href={link.href} className="text-text-secondary text-[0.95rem] transition-colors hover:text-primary">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border-color text-text-secondary text-[0.85rem] gap-4">
          <p>© {currentYear} 4hospiceRx. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-text-primary transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

