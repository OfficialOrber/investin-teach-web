import Link from 'next/link';
import { profile } from '@/lib/profile';

/**
 * The bar across the top of every page.
 * To add a page to the menu, add a line to this list.
 */
const pages = [
  { label: 'Projects', href: '/projects' },
  { label: 'About', href: '/about' },
  { label: 'Playground', href: '/playground' },
  { label: 'Contact', href: '/contact' },
];

export default function Nav() {
  return (
    <header className="border-b border-current/10">
      <nav className="mx-auto flex max-w-3xl flex-wrap items-center gap-x-5 gap-y-2 px-6 py-4">
        {/* Your name, on the left, links back to the home page. */}
        <Link href="/" className="font-semibold">
          {profile.name}
        </Link>

        {/* Then every page from the list above. */}
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
          {pages.map((page) => (
            <Link key={page.href} href={page.href} className="opacity-70 hover:opacity-100">
              {page.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
