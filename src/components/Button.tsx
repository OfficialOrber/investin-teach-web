import Link from 'next/link';

/**
 * Button is used for both real buttons and links that should look like buttons.
 *
 * There are two looks ("variants"):
 *   primary   – filled in with the brand colour. For the main thing on the page.
 *   secondary – just an outline. For everything else.
 */

type Variant = 'primary' | 'secondary';

const styles: Record<Variant, string> = {
  primary: 'bg-brand text-white hover:opacity-90',
  secondary: 'border border-current/20 hover:border-current/40',
};

const base =
  'inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition disabled:opacity-40';

export default function Button({
  children,
  href,
  variant = 'primary',
  type = 'button',
  onClick,
}: {
  children: React.ReactNode;
  // Pass an href to get a link. Leave it out to get a button you can click.
  href?: string;
  variant?: Variant;
  type?: 'button' | 'submit';
  onClick?: () => void;
}) {
  const className = `${base} ${styles[variant]}`;

  if (href) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={className}>
      {children}
    </button>
  );
}
