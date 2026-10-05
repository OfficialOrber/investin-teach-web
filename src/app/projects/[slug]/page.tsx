import { notFound } from 'next/navigation';
import Container from '@/components/Container';
import Tag from '@/components/Tag';
import Button from '@/components/Button';
import { projects } from '@/lib/projects';

/**
 * ONE project's own page.
 *
 * The folder is called [slug] with square brackets, which means "this part of
 * the web address changes". /projects/pixel-pet and /projects/homework-timer
 * are both handled by this single file. The changing bit arrives as `params`.
 */

/**
 * Because this site is built into plain HTML files ahead of time, Next.js needs
 * to know every address it should build. This function hands it the list:
 * one page per project. Forget it and the build fails.
 */
export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  // Pull the changing part of the address out of params.
  const { slug } = await params;

  // .find() looks through the list for the project with that slug.
  const project = projects.find((p) => p.slug === slug);

  // If somebody types an address that does not exist, show the "not found" page
  // instead of crashing.
  if (!project) {
    notFound();
  }

  return (
    <Container>
      <Button href="/projects" variant="secondary">
        ← All projects
      </Button>

      <h1 className="mt-8 text-3xl font-bold">{project.title}</h1>
      <p className="mt-4 text-lg text-brand">{project.summary}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>

      <div className="mt-8 rounded-xl border border-current/10 p-5 leading-relaxed">
        {project.body}
      </div>

      {/* `project.href &&` means "only show this if the project has an href". */}
      {project.href && (
        <div className="mt-8">
          <Button href={project.href}>Visit the project</Button>
        </div>
      )}
    </Container>
  );
}
