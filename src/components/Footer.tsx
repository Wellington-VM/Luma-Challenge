import Image from "next/image";
import Link from "next/link";

const columns = [
  {
    title: "Explore",
    links: [
      { label: "Courses", href: "#" },
      { label: "Categories", href: "#" },
      { label: "Instructors", href: "#" },
      { label: "For Teams", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Journal", href: "#" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", href: "#" },
      { label: "Contact", href: "#" },
      { label: "Terms", href: "#" },
      { label: "Privacy", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-night text-white">
      <div className="mx-auto max-w-6xl px-6 pt-16 md:pt-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[2fr_3fr]">
          <div>
            <Link href="/">
              <Image
                src="/lumawhite.svg"
                alt="Luma Footer"
                width={64}
                height={24}
                className="h-auto w-16"
                style={{ width: "auto", height: "auto" }}
              />
            </Link>
            <p className="mt-4 max-w-50 text-sm text-fog">Practical learning for curious people.</p>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {columns.map((column) => (
              <div key={column.title}>
                <h2 className="text-xs font-semibold uppercase tracking-widest">{column.title}</h2>
                <ul className="mt-5 flex flex-col gap-4">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="text-sm text-fog transition-colors hover:text-white">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-16 border-t border-white/10 py-8 text-xs text-fog">&copy; 2026 Luma Learning</div>
      </div>
    </footer>
  );
}
