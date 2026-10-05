import Container from '@/components/Container';
import Tag from '@/components/Tag';
import { profile } from '@/lib/profile';

/**
 * The about page. Every word of it comes from src/lib/profile.ts —
 * there is nothing to edit in this file.
 */
export default function AboutPage() {
  return (
    <Container>
      <h1 className="text-3xl font-bold">About me</h1>

      <p className="mt-6 leading-relaxed">{profile.about}</p>

      <h2 className="mt-12 text-xl font-semibold">What I know</h2>
      <div className="mt-4 flex flex-wrap gap-2">
        {profile.skills.map((skill) => (
          <Tag key={skill}>{skill}</Tag>
        ))}
      </div>

      <h2 className="mt-12 text-xl font-semibold">Find me online</h2>
      <ul className="mt-4 grid gap-2">
        {profile.links.map((link) => (
          <li key={link.href}>
            {/* A normal <a> tag, not a Next.js Link, because these go to other websites. */}
            <a href={link.href} className="text-brand hover:underline">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </Container>
  );
}
