import Container from '@/components/Container';
import Card from '@/components/Card';
import Tag from '@/components/Tag';
import Button from '@/components/Button';
import { profile } from '@/lib/profile';
import { projects } from '@/lib/projects';

/**
 * The home page — what people see first at http://localhost:3000
 * Nothing here is typed in by hand. It all comes from src/lib/profile.ts
 * and src/lib/projects.ts, so changing those changes this page.
 */
export default function HomePage() {
  // .slice(0, 2) means "just the first two". Your newest projects are at the
  // top of the list in projects.ts, so these are the newest two.
  const newest = projects.slice(0, 2);

  return (
    <Container>
      {/* The hero: the big introduction at the top of the page. */}
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{profile.name}</h1>
      <p className="mt-4 text-xl text-brand">{profile.tagline}</p>
      <p className="mt-6 leading-relaxed opacity-70">{profile.about}</p>

      {/* The skills row. flex-wrap lets the pills drop onto a new line if they run out of space. */}
      <div className="mt-8 flex flex-wrap gap-2">
        {profile.skills.map((skill) => (
          <Tag key={skill}>{skill}</Tag>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <Button href="/projects">See my projects</Button>
        <Button href="/contact" variant="secondary">
          Get in touch
        </Button>
      </div>

      {/* The newest projects, as cards you can click. */}
      <h2 className="mt-16 text-2xl font-semibold">Latest projects</h2>
      <div className="mt-6 grid gap-4">
        {newest.map((project) => (
          <Card key={project.slug} href={`/projects/${project.slug}`}>
            <h3 className="font-semibold">{project.title}</h3>
            <p className="mt-2 text-sm opacity-70">{project.summary}</p>
          </Card>
        ))}
      </div>
    </Container>
  );
}
