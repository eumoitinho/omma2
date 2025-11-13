import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  getBlogPostsByCategory,
  getBlogCategoryBySlug,
  getAllBlogCategories,
} from '@/lib/sanity';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';

export const revalidate = 60;

interface CategoryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const categories = await getAllBlogCategories();
  return categories.map((category: any) => ({
    slug: category.slug.current,
  }));
}

export async function generateMetadata({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = await getBlogCategoryBySlug(slug);

  if (!category) {
    return {
      title: 'Categoria não encontrada',
    };
  }

  return {
    title: `${category.title} - Blog OMMA`,
    description: category.description || `Posts sobre ${category.title}`,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = await getBlogCategoryBySlug(slug);
  const posts = await getBlogPostsByCategory(slug);

  if (!category) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Header */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,193,7,0.08),transparent_50%)]" />

        <div className="relative mx-auto max-w-7xl px-4 md:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-amber-600 transition mb-8"
            style={{ fontFamily: 'DM Sans, Inter' }}
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar para o blog</span>
          </Link>

          <div className="text-center">
            <span
              className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4"
              style={{
                backgroundColor: `${category.color}15`,
                color: category.color,
                fontFamily: 'DM Sans, Inter',
              }}
            >
              Categoria
            </span>

            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
              style={{ fontFamily: 'Exo, Inter' }}
            >
              {category.title}
            </h1>

            {category.description && (
              <p
                className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
                style={{ fontFamily: 'Inter' }}
              >
                {category.description}
              </p>
            )}

            <p className="text-sm text-gray-500 mt-4" style={{ fontFamily: 'Inter' }}>
              {posts.length} {posts.length === 1 ? 'post encontrado' : 'posts encontrados'}
            </p>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="relative py-12 pb-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post: any) => (
                <BlogPostCard key={post._id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500" style={{ fontFamily: 'Inter' }}>
                Nenhum post nesta categoria ainda.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

function BlogPostCard({ post }: { post: any }) {
  const formattedDate = new Date(post.publishedAt).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

  return (
    <Link href={`/blog/${post.slug.current}`} className="group">
      <article className="h-full rounded-2xl overflow-hidden bg-white border border-gray-200 hover:border-amber-400/40 hover:shadow-xl transition-all duration-300">
        {/* Image */}
        <div className="relative aspect-[16/9] overflow-hidden bg-gray-100">
          {post.mainImage?.asset?.url && (
            <Image
              src={post.mainImage.asset.url}
              alt={post.mainImage.alt || post.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              unoptimized
            />
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Categories */}
          {post.categories && post.categories.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-3">
              {post.categories.slice(0, 2).map((category: any) => (
                <span
                  key={category._id}
                  className="px-2 py-1 text-xs font-medium rounded"
                  style={{
                    backgroundColor: `${category.color}15`,
                    color: category.color,
                    fontFamily: 'DM Sans, Inter',
                  }}
                >
                  {category.title}
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          <h3
            className="text-xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition line-clamp-2"
            style={{ fontFamily: 'Exo, Inter' }}
          >
            {post.title}
          </h3>

          {/* Excerpt */}
          <p
            className="text-gray-600 text-sm mb-4 line-clamp-3"
            style={{ fontFamily: 'Inter' }}
          >
            {post.excerpt}
          </p>

          {/* Meta */}
          <div
            className="flex items-center gap-4 text-xs text-gray-500 pt-4 border-t border-gray-100"
            style={{ fontFamily: 'Inter' }}
          >
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{formattedDate}</span>
            </div>
            {post.readingTime && (
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{post.readingTime} min</span>
              </div>
            )}
          </div>
        </div>
      </article>
    </Link>
  );
}
