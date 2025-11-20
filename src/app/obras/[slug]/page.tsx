import { notFound } from 'next/navigation';
import ProjectDetail from '@/components/obras/ProjectDetail';
import { getObrasData } from '@/lib/sanity';

// Forçar geração estática
export const dynamic = 'force-static';
export const dynamicParams = false;

export async function generateStaticParams() {
  const data = await getObrasData();
  const projects = data?.projects || [];
  return projects.map((project: any) => ({ slug: project.slug }));
}

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const data = await getObrasData();
  const projects = data?.projects || [];

  const found = projects.find((p: any) => p.slug === slug);

  if (!found) return notFound();

  const project = {
    _id: found._id,
    slug: found.slug,
    client: found.client || '',
    title: found.title || '',
    category: found.category || '',
    location: found.location || '',
    area: found.area || '',
    duration: found.duration || '',
    year: found.year || '',
    description: found.description || '',
    thumbnail: found.thumbnail || '',
    gallery: found.gallery || [],
  };

  return (
    <main className="min-h-screen bg-black">
      <ProjectDetail project={project} />
    </main>
  );
}
