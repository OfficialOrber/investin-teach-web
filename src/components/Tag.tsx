/**
 * Tag is one of the small rounded pills used for skills and project tags.
 */
export default function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-current/10 px-3 py-1 text-sm opacity-70">
      {children}
    </span>
  );
}
