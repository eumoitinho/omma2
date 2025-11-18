import { notFound } from 'next/navigation';
import ProjectDetail from '@/components/obras/ProjectDetail';
import { getLocalProjects, getProjectBySlug } from '@/lib/local-projects';

// Força geração estática
export const dynamic = 'force-static';
export const dynamicParams = false;

export function generateStaticParams() {
  const projects = getLocalProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const localProject = getProjectBySlug(slug);

  if (!localProject) {
    notFound();
  }

  // Converter para o formato esperado pelo ProjectDetail
  const project = {
    _id: localProject.id,
    slug: localProject.slug,
    client: localProject.title,
    title: localProject.title,
    category: localProject.category,
    location: localProject.location,
    area: localProject.area,
    duration: localProject.duration,
    year: localProject.year,
    description: localProject.description,
    thumbnail: localProject.thumbnail,
    gallery: localProject.gallery,
  };

  return (
    <main className="min-h-screen bg-black">
      <ProjectDetail project={project} />
    </main>
  );
}
