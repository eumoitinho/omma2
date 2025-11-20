import ObrasGallery from '@/components/obras/ObrasGallery';
import { getObrasData } from '@/lib/sanity';

export default async function ObrasPage() {
  const data = await getObrasData();

  return (
    <main className="min-h-screen bg-white">
      <ObrasGallery data={data} />
    </main>
  );
}
