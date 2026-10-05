import Container from '@/components/Container';
import Card from '@/components/Card';
import Tag from '@/components/Tag';
import { projects } from '@/lib/projects';

/**
 * The projects list page.
 *
 * This page is about ONE idea: taking a list of things and turning it into
 * a list of boxes on screen. That is what .map() does below — it goes through
 * every project and gives back a Card for each one. Add a fourth project to
 * src/lib/projects.ts and a fourth card appears here on its own.
 */
export default function ProjectsPage() {
  return (
    <Container>
      <h1 className="text-3xl font-bold">Projects</h1>
      <p className="mt-4 opacity-70">Things I have built. Click one to read more about it.</p>

      <div className="mt-10 grid gap-4">
        {projects.map((project) => (
          // `key` helps React tell the cards apart. Every .map() over a list needs one.
          <Card key={project.slug} href={`/projects/${project.slug}`}>
            <h2 className="font-semibold">{project.title}</h2>
            <p className="mt-2 text-sm opacity-70">{project.summary}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Container>
  );
}
