"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Article } from "@/lib/data/articles";
import { ArrowRight, Clock, Calendar, User, Search, Tag } from "lucide-react";

interface BlogListClientProps {
  articles: Article[];
  categories: string[];
}

export default function BlogListClient({ articles, categories }: BlogListClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredArticles = articles.filter((article) => {
    const matchesCategory =
      selectedCategory === "All" || article.category === selectedCategory;
    const matchesSearch =
      searchQuery.trim() === "" ||
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  const featuredArticle = articles[0];
  const isFiltered = selectedCategory !== "All" || searchQuery.trim() !== "";

  return (
    <div className="w-full">
      {/* Search & Category Filter Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-12 pb-6 border-b border-slate-200">
        
        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
          <button
            onClick={() => setSelectedCategory("All")}
            className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all cursor-pointer whitespace-nowrap ${
              selectedCategory === "All"
                ? "bg-slate-900 text-white shadow-xs"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
            }`}
          >
            All Articles ({articles.length})
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all cursor-pointer whitespace-nowrap ${
                selectedCategory === category
                  ? "bg-blue-600 text-white shadow-xs"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative min-w-[260px]">
          <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search articles & topics..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-slate-400 hover:text-slate-700 uppercase font-semibold"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Featured Article (When not actively filtering) */}
      {!isFiltered && featuredArticle && (
        <div className="mb-16">
          <div className="text-[11px] font-mono tracking-widest text-blue-600 uppercase font-bold mb-3 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-blue-600"></span>
            Featured Analysis
          </div>
          <Link
            href={`/blog/${featuredArticle.slug}`}
            className="group block bg-white rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all duration-300 overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full">
                      {featuredArticle.category}
                    </span>
                    <span className="text-xs text-slate-400 flex items-center gap-1">
                      <Clock size={13} />
                      {featuredArticle.readingTime}
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 group-hover:text-blue-600 transition-colors tracking-tight leading-tight mb-4">
                    {featuredArticle.title}
                  </h2>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed line-clamp-3 mb-6">
                    {featuredArticle.excerpt}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-xs">
                      {featuredArticle.author.name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-900">
                        {featuredArticle.author.name}
                      </div>
                      <div className="text-[11px] text-slate-500">
                        {featuredArticle.author.role}
                      </div>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 group-hover:translate-x-1 transition-transform">
                    Read Article <ArrowRight size={14} />
                  </span>
                </div>
              </div>

              <div className="lg:col-span-5 bg-slate-900 relative min-h-[260px] lg:min-h-full">
                <Image
                  src={featuredArticle.coverImage}
                  alt={featuredArticle.coverAlt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </Link>
        </div>
      )}

      {/* Filtered Count indicator */}
      {isFiltered && (
        <div className="mb-6 flex items-center justify-between">
          <div className="text-xs text-slate-500">
            Showing <strong className="text-slate-900">{filteredArticles.length}</strong> {filteredArticles.length === 1 ? "article" : "articles"}
            {selectedCategory !== "All" && <span> in <strong className="text-blue-600">{selectedCategory}</strong></span>}
            {searchQuery && <span> matching &ldquo;{searchQuery}&rdquo;</span>}
          </div>
          <button
            onClick={() => {
              setSelectedCategory("All");
              setSearchQuery("");
            }}
            className="text-xs font-semibold text-blue-600 hover:text-blue-800"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Article Grid */}
      {filteredArticles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <article
              key={article.slug}
              className="group bg-white rounded-xl border border-slate-200/90 hover:border-slate-300 hover:shadow-md transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              <div>
                {/* Cover Image */}
                <Link href={`/blog/${article.slug}`} className="block relative aspect-video bg-slate-950 overflow-hidden">
                  <Image
                    src={article.coverImage}
                    alt={article.coverAlt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 bg-white/90 backdrop-blur-xs text-slate-900 text-[11px] font-semibold rounded-md shadow-xs">
                      {article.category}
                    </span>
                  </div>
                </Link>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 text-[11px] text-slate-400 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {new Date(article.publishedAt).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric"
                      })}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      {article.readingTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-950 group-hover:text-blue-600 transition-colors tracking-tight leading-snug mb-3">
                    <Link href={`/blog/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3 mb-4">
                    {article.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {article.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 bg-slate-50 border border-slate-100 text-[10px] text-slate-500 font-medium rounded-sm"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer: Author & Read More */}
              <div className="p-6 pt-0 mt-auto">
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-[10px]">
                      {article.author.name.charAt(0)}
                    </div>
                    <span className="text-xs text-slate-700 font-medium">
                      {article.author.name}
                    </span>
                  </div>

                  <Link
                    href={`/blog/${article.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 group-hover:translate-x-1 transition-transform"
                  >
                    Read <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="text-center py-20 px-4 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
          <Tag className="mx-auto text-slate-400 mb-3" size={32} />
          <h3 className="text-base font-bold text-slate-900 mb-1">No articles found</h3>
          <p className="text-xs text-slate-500 max-w-sm mx-auto mb-6">
            We couldn&apos;t find any published articles matching your current filter criteria.
          </p>
          <button
            onClick={() => {
              setSelectedCategory("All");
              setSearchQuery("");
            }}
            className="px-4 py-2 bg-slate-900 text-white text-xs font-semibold rounded-lg hover:bg-slate-800 transition-colors"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
}
