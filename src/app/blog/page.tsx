import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getAllBlogPosts, getAllBlogCategories } from '@/lib/sanity';
import { Calendar, Clock } from 'lucide-react';

export const revalidate = 60; // Revalidar a cada 60 segundos

interface BlogPost {
  _id: string;
  title: string;
  slug: { current: string };
  author: string;
  publishedAt: string;
  excerpt: string;
  mainImage: {
    asset: { url: string };
    alt: string;
  };
  categories?: Array<{
    _id: string;
    title: string;
    slug: { current: string };
    color: string;
  }>;
  tags?: string[];
  readingTime?: number;
  featured?: boolean;
}

interface Category {
  _id: string;
  title: string;
  slug: { current: string };
  color: string;
}

export default async function BlogPage() {
  const posts: BlogPost[] = await getAllBlogPosts();
  const categories: Category[] = await getAllBlogCategories();

  const featuredPosts = posts.filter((post) => post.featured);
  const regularPosts = posts.filter((post) => !post.featured);

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,193,7,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,193,7,0.05),transparent_50%)]" />

        <div className="relative mx-auto max-w-7xl px-4 md:px-8">
          <div className="text-center">
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
              style={{ fontFamily: 'Exo, Inter' }}
            >
              Blog
            </h1>
            <p
              className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
              style={{ fontFamily: 'Inter' }}
            >
              Insights, tendências e novidades sobre engenharia, construção e gestão de obras
            </p>
          </div>

          {/* Categories Filter */}
          {categories.length > 0 && (
            <div className="mt-12 flex flex-wrap justify-center gap-3">
              <Link
                href="/blog"
                className="px-4 py-2 rounded-full bg-amber-400/10 text-amber-600 border border-amber-400/20 hover:bg-amber-400/20 transition text-sm font-medium"
                style={{ fontFamily: 'DM Sans, Inter' }}
              >
                Todos
              </Link>
              {categories.map((category) => (
                <Link
                  key={category._id}
                  href={`/blog/categoria/${category.slug.current}`}
                  className="px-4 py-2 rounded-full bg-white text-gray-700 border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition text-sm font-medium"
                  style={{ fontFamily: 'DM Sans, Inter' }}
                >
                  {category.title}
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="relative py-12">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <h2
              className="text-2xl md:text-3xl font-bold text-gray-900 mb-8"
              style={{ fontFamily: 'Exo, Inter' }}
            >
              Posts em Destaque
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredPosts.map((post) => (
                <BlogPostCard key={post._id} post={post} featured />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular Posts */}
      <section className="relative py-12 pb-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          {featuredPosts.length > 0 && (
            <h2
              className="text-2xl md:text-3xl font-bold text-gray-900 mb-8"
              style={{ fontFamily: 'Exo, Inter' }}
            >
              Últimas Publicações
            </h2>
          )}
          {regularPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularPosts.map((post) => (
                <BlogPostCard key={post._id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500" style={{ fontFamily: 'Inter' }}>
                Nenhum post publicado ainda. Volte em breve!
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

function BlogPostCard({ post, featured = false }: { post: BlogPost; featured?: boolean }) {
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
          {featured && (
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 bg-amber-400 text-white text-xs font-bold rounded-full">
                DESTAQUE
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Categories */}
          {post.categories && post.categories.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-3">
              {post.categories.slice(0, 2).map((category) => (
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
