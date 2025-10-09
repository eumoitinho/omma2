import { getObrasData } from '@/lib/sanity';
import ObrasGallery from '@/components/obras/ObrasGallery';

export const revalidate = 60;

export default async function ObrasPage() {
  const data = await getObrasData();

  return (
    <main className="min-h-screen bg-white">
      <ObrasGallery data={data} />
    </main>
  );
}
