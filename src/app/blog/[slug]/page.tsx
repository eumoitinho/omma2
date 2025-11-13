import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getBlogPostBySlug, getAllBlogPosts } from '@/lib/sanity';
import { Calendar, Clock, ArrowLeft, Tag } from 'lucide-react';
import PortableTextRenderer from '@/components/blog/PortableTextRenderer';

export const revalidate = 60;

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = await getAllBlogPosts();
  return posts.map((post: any) => ({
    slug: post.slug.current,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post não encontrado',
    };
  }

  return {
    title: post.seo?.metaTitle || post.title,
    description: post.seo?.metaDescription || post.excerpt,
    keywords: post.seo?.keywords,
    openGraph: {
      title: post.seo?.metaTitle || post.title,
      description: post.seo?.metaDescription || post.excerpt,
      images: [post.mainImage?.asset?.url],
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const formattedDate = new Date(post.publishedAt).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

  return (
    <main className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="mx-auto max-w-4xl px-4 md:px-8 pt-24 pb-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-amber-600 transition"
          style={{ fontFamily: 'DM Sans, Inter' }}
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Voltar para o blog</span>
        </Link>
      </div>

      {/* Article Header */}
      <article className="mx-auto max-w-4xl px-4 md:px-8 pb-16">
        {/* Categories */}
        {post.categories && post.categories.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {post.categories.map((category: any) => (
              <Link
                key={category._id}
                href={`/blog/categoria/${category.slug.current}`}
                className="px-3 py-1 text-sm font-medium rounded-full transition hover:shadow-md"
                style={{
                  backgroundColor: `${category.color}15`,
                  color: category.color,
                  fontFamily: 'DM Sans, Inter',
                }}
              >
                {category.title}
              </Link>
            ))}
          </div>
        )}

        {/* Title */}
        <h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
          style={{ fontFamily: 'Exo, Inter' }}
        >
          {post.title}
        </h1>

        {/* Excerpt */}
        <p
          className="text-xl text-gray-600 mb-8 leading-relaxed"
          style={{ fontFamily: 'Inter' }}
        >
          {post.excerpt}
        </p>

        {/* Meta Info */}
        <div
          className="flex flex-wrap items-center gap-6 pb-8 mb-8 border-b border-gray-200"
          style={{ fontFamily: 'Inter' }}
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-amber-400/10 flex items-center justify-center">
              <span className="text-amber-600 font-bold text-lg">
                {post.author.charAt(0).toUpperCase()}
              </span>
            </div>
            <div>
              <p className="font-medium text-gray-900">{post.author}</p>
              <p className="text-sm text-gray-500">Autor</p>
            </div>
          </div>

          <div className="flex items-center gap-1 text-gray-600">
            <Calendar className="w-5 h-5" />
            <span>{formattedDate}</span>
          </div>

          {post.readingTime && (
            <div className="flex items-center gap-1 text-gray-600">
              <Clock className="w-5 h-5" />
              <span>{post.readingTime} min de leitura</span>
            </div>
          )}
        </div>

        {/* Featured Image */}
        {post.mainImage?.asset?.url && (
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-12 bg-gray-100">
            <Image
              src={post.mainImage.asset.url}
              alt={post.mainImage.alt || post.title}
              fill
              className="object-cover"
              priority
              unoptimized
            />
          </div>
        )}

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <PortableTextRenderer content={post.body} />
        </div>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-start gap-3">
              <Tag className="w-5 h-5 text-gray-400 mt-1" />
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag: string, index: number) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                    style={{ fontFamily: 'DM Sans, Inter' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Share Section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3
            className="text-lg font-bold text-gray-900 mb-4"
            style={{ fontFamily: 'Exo, Inter' }}
          >
            Gostou deste artigo?
          </h3>
          <p className="text-gray-600 mb-6" style={{ fontFamily: 'Inter' }}>
            Compartilhe com sua rede ou entre em contato conosco para saber mais sobre nossos
            serviços.
          </p>
          <div className="flex gap-4">
            <Link
              href="/contato"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-amber-400 text-white font-medium hover:bg-amber-500 transition"
              style={{ fontFamily: 'DM Sans, Inter' }}
            >
              Entre em contato
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition"
              style={{ fontFamily: 'DM Sans, Inter' }}
            >
              Ver mais posts
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
