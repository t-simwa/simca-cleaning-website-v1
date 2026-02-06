"use client"

import { useParams, notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, User, Clock, ArrowRight, Phone } from "lucide-react"
import { motion } from "framer-motion"
import React from "react"
import { getBlogPost, getRelatedPosts, blogPosts } from "@/lib/blog-data"
import ContactForm from "@/components/home/contact-form"
import { ScrollAnimation } from "@/components/ui/scroll-animation"
import ArticleSchema from "@/components/schema/article-schema"
import BreadcrumbSchema from "@/components/schema/breadcrumb-schema"

// Icon imports
import { FaBuilding } from "react-icons/fa"
import { MdCleaningServices } from "react-icons/md"
import { FaPumpSoap } from "react-icons/fa"
import { FaLeaf } from "react-icons/fa"
import { MdLightbulb } from "react-icons/md"

const categoryIcons: { [key: string]: React.ElementType } = {
  "Contract Cleaning": FaBuilding,
  "Specialized Cleaning": MdCleaningServices,
  "Hygiene": FaPumpSoap,
  "Eco-Friendly": FaLeaf,
  "Professional Tips": MdLightbulb,
}

export default function BlogPostPage() {
  const params = useParams()
  const slug = params.slug as string
  
  const post = getBlogPost(slug)
  
  if (!post) {
    notFound()
  }
  
  const relatedPosts = getRelatedPosts(slug, 3)
  const CategoryIcon = categoryIcons[post.category] || FaBuilding

  // Helper function to process bold text within a string
  const processBoldText = (text: string) => {
    if (!text.includes('**')) return text
    const parts = text.split(/\*\*/)
    return parts.map((part, partIndex) => 
      partIndex % 2 === 1 
        ? <strong key={partIndex} className="font-semibold text-gray-900 dark:text-white">{part}</strong>
        : part
    )
  }

  // Convert markdown-style content to HTML-friendly format
  const formatContent = (content: string) => {
    return content
      .split('\n')
      .map((line, index) => {
        // Headers
        if (line.startsWith('# ')) {
          return <h1 key={index} className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mt-8 mb-4">{line.replace('# ', '')}</h1>
        }
        if (line.startsWith('## ')) {
          return <h2 key={index} className="font-heading text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mt-8 mb-4">{line.replace('## ', '')}</h2>
        }
        if (line.startsWith('### ')) {
          return <h3 key={index} className="font-heading text-lg md:text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">{line.replace('### ', '')}</h3>
        }
        
        // Horizontal rule
        if (line.startsWith('---')) {
          return <hr key={index} className="my-8 border-gray-200 dark:border-gray-700" />
        }
        
        // Checkbox list items
        if (line.trim().startsWith('- [ ]')) {
          const textContent = line.replace('- [ ]', '').trim()
          return (
            <div key={index} className="flex items-start gap-3 py-1">
              <span className="w-5 h-5 mt-0.5 border-2 border-gray-300 dark:border-gray-600 rounded flex-shrink-0" />
              <span className="font-body text-base md:text-lg text-gray-700 dark:text-gray-300">{processBoldText(textContent)}</span>
            </div>
          )
        }
        
        // Bullet list items with checkmarks
        if (line.trim().startsWith('- ✅')) {
          const textContent = line.replace('- ✅', '').trim()
          return (
            <div key={index} className="flex items-start gap-3 py-1">
              <span className="text-teal-500 mt-0.5">✅</span>
              <span className="font-body text-base md:text-lg text-gray-700 dark:text-gray-300">{processBoldText(textContent)}</span>
            </div>
          )
        }
        
        // Regular bullet list items
        if (line.trim().startsWith('- ')) {
          const textContent = line.replace('- ', '').trim()
          return (
            <div key={index} className="flex items-start gap-3 py-1">
              <span className="w-2 h-2 mt-2.5 bg-teal-500 rounded-full flex-shrink-0" />
              <span className="font-body text-base md:text-lg text-gray-700 dark:text-gray-300">{processBoldText(textContent)}</span>
            </div>
          )
        }
        
        // Table rows (simple handling)
        if (line.startsWith('|') && !line.includes('---')) {
          const cells = line.split('|').filter(cell => cell.trim())
          if (cells.length > 0) {
            const isHeader = index > 0 && content.split('\n')[index + 1]?.includes('---')
            return (
              <div key={index} className={`grid gap-4 py-2 px-4 ${isHeader ? 'bg-gray-100 dark:bg-gray-800 font-semibold' : 'border-b border-gray-100 dark:border-gray-800'}`} style={{ gridTemplateColumns: `repeat(${cells.length}, 1fr)` }}>
                {cells.map((cell, cellIndex) => (
                  <span key={cellIndex} className="font-body text-sm md:text-base text-gray-700 dark:text-gray-300">{processBoldText(cell.trim())}</span>
                ))}
              </div>
            )
          }
        }
        
        // Bold text handling
        if (line.includes('**')) {
          return (
            <p key={index} className="font-body text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              {processBoldText(line)}
            </p>
          )
        }
        
        // Empty lines
        if (line.trim() === '') {
          return <div key={index} className="h-2" />
        }
        
        // Regular paragraphs
        return <p key={index} className="font-body text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">{line}</p>
      })
  }

  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
    { name: post.title, url: `/blog/${post.slug}` }
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Schema Markup for AI Search Optimization (GEO) */}
      <ArticleSchema
        title={post.title}
        description={post.metaDescription}
        url={`/blog/${post.slug}`}
        image={post.image}
        datePublished={new Date(post.date).toISOString().split('T')[0]}
        author={post.author}
        category={post.category}
      />
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16 md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(20,184,166,0.1),transparent_70%)]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            {/* Back Link */}
            <Link 
              href="/blog"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="font-body text-sm">Back to Blog</span>
            </Link>

            {/* Category Badge */}
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-2 bg-teal-500/20 text-teal-400 px-3 py-1.5 rounded-full text-sm font-medium">
                <CategoryIcon className="w-4 h-4" />
                {post.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 md:gap-6 text-gray-400">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span className="font-body text-sm">{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span className="font-body text-sm">{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span className="font-body text-sm">{post.readTime}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="container mx-auto px-4 -mt-8 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>

      {/* Article Content */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="prose prose-lg dark:prose-invert max-w-none"
          >
            {formatContent(post.content)}
          </motion.article>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 p-6 md:p-8 bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl text-white"
          >
            <h3 className="font-heading text-xl md:text-2xl font-bold mb-3">
              Ready for Professional Cleaning Services?
            </h3>
            <p className="font-body text-white/90 mb-6">
              Contact Simca Agencies for a free, no-obligation quote. Serving Kenya since 2005.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact#contact-form"
                className="inline-flex items-center justify-center gap-2 bg-white text-teal-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get a Free Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:+254721525901"
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                <Phone className="w-4 h-4" />
                Call 0721 525 901
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <ScrollAnimation>
          <div className="bg-gray-50 dark:bg-gray-800/50 py-12 md:py-16">
            <div className="container mx-auto px-4">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                Related Articles
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {relatedPosts.map((relatedPost) => {
                  const RelatedIcon = categoryIcons[relatedPost.category] || FaBuilding
                  return (
                    <motion.div
                      key={relatedPost.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="group"
                    >
                      <Link href={`/blog/${relatedPost.slug}`}>
                        <div className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full">
                          <div className="relative aspect-video">
                            <Image
                              src={relatedPost.image}
                              alt={relatedPost.title}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute top-3 left-3">
                              <span className="inline-flex items-center gap-1.5 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium text-gray-700 dark:text-gray-300">
                                <RelatedIcon className="w-3 h-3" />
                                {relatedPost.category}
                              </span>
                            </div>
                          </div>
                          <div className="p-4">
                            <h3 className="font-heading text-base font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2 group-hover:text-teal-500 transition-colors">
                              {relatedPost.title}
                            </h3>
                            <p className="font-body text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                              {relatedPost.excerpt}
                            </p>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </div>
        </ScrollAnimation>
      )}

      {/* Contact Form */}
      <ScrollAnimation>
        <div id="contact-form" className="relative bg-white dark:bg-gray-900 scroll-mt-24">
          <div className="absolute inset-0 bg-[linear-gradient(-45deg,#add8e6_1px,transparent_1px)] [background-size:20px_20px] opacity-5" />
          <ContactForm />
        </div>
      </ScrollAnimation>
    </div>
  )
}
