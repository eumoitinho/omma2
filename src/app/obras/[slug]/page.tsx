import { notFound } from 'next/navigation';
import ProjectDetail from '@/components/obras/ProjectDetail';
import { getObrasData } from '@/lib/sanity';

export async function generateStaticParams() {
  const data = await getObrasData();
  const projects = data?.projects || [];

  return projects.map((project: any) => ({ slug: project.slug }));
}

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const data = await getObrasData();
  const projects = data?.projects || [];

  const project = projects.find((p: any) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black">
      <ProjectDetail project={project} />
    </main>
  );
}
