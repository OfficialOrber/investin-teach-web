import Link from 'next/link';

/**
 * Card is the bordered box used all over the site.
 * Give it an `href` and the whole card becomes a link.
 */

// border-current/10 means "a border in the current text colour, 10% visible".
// That is the trick that makes the cards look right in both light and dark mode
// without us writing two sets of colours.
const base = 'block rounded-xl border border-current/10 p-5';

export default function Card({
  children,
  href,
}: {
  children: React.ReactNode;
  href?: string;
}) {
  // No href? Then it is just a box.
  if (!href) {
    return <div className={base}>{children}</div>;
  }

  // With an href it is a clickable box that lifts a little when you hover.
  return (
    <Link href={href} className={`${base} transition hover:border-current/30`}>
      {children}
    </Link>
  );
}
