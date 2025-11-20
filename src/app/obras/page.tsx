import { getLocalProjects } from '@/lib/local-projects';
import ObrasGallery from '@/components/obras/ObrasGallery';

export default function ObrasPage() {
  const projects = getLocalProjects();

  const data = {
    title: 'Nossas Obras',
    subtitle: 'Conheça alguns dos nossos principais projetos executados com excelência e qualidade',
    projects: projects.map(p => ({
      _id: p.id,
      slug: p.slug,
      title: p.title,
      client: p.title,
      location: p.location,
      area: p.area,
      duration: p.duration,
      year: p.year,
      thumbnail: p.thumbnail,
      gallery: p.gallery,
      category: p.category,
      description: p.description
    }))
  };

  return (
    <main className="min-h-screen bg-white">
      <ObrasGallery data={data} />
    </main>
  );
}
