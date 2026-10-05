import { profile } from '@/lib/profile';

/**
 * The strip at the bottom of every page: your name, the year, and your links.
 * All of it comes from src/lib/profile.ts.
 */
export default function Footer() {
  // new Date().getFullYear() is "whatever year it is right now",
  // so you never have to come back and update it.
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-current/10">
      <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-between gap-4 px-6 py-8 text-sm opacity-70">
        <p>
          © {year} {profile.name}
        </p>

        <div className="flex flex-wrap gap-4">
          {profile.links.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-brand">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
