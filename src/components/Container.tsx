/**
 * Container puts a sensible width and some breathing room around a page.
 * Every page wraps its content in one so the whole site lines up.
 */
export default function Container({ children }: { children: React.ReactNode }) {
  // max-w-3xl = do not get too wide.  mx-auto = sit in the middle.
  // px-6 = space at the sides.  py-16 = space above and below.
  return <div className="mx-auto max-w-3xl px-6 py-16">{children}</div>;
}
