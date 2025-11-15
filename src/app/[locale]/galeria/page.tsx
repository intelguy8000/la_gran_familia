'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Expand, Play } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { galleryItems, videoItems, getCategoryCount, filterByCategory, type GalleryCategory } from '@/lib/gallery-data';

export default function GalleryPage() {
  const t = useTranslations('gallery');
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory>('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredItems = filterByCategory(selectedCategory);

  const categories: { key: GalleryCategory; label: string }[] = [
    { key: 'all', label: t('filters.all') },
    { key: 'hospital', label: t('filters.hospital') },
    { key: 'retreats', label: t('filters.retreats') },
    { key: 'community', label: t('filters.community') },
    { key: 'events', label: t('filters.events') },
    { key: 'spiritual', label: t('filters.spiritual') },
  ];

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? filteredItems.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev === filteredItems.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center bg-gradient-to-r from-[#FFD700] to-[#2D3B5F] text-white pt-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 container mx-auto px-4 text-center py-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {t('title')}
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-gray-50 sticky top-20 z-40 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((cat) => (
              <Button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                variant={selectedCategory === cat.key ? 'default' : 'outline'}
                className={`flex-shrink-0 ${
                  selectedCategory === cat.key
                    ? 'bg-[#00A4E4] hover:bg-[#0078A8] text-white'
                    : 'hover:bg-gray-100'
                }`}
              >
                {cat.label} ({getCategoryCount(cat.key)})
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {filteredItems.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-gray-500">{t('noResults')}</p>
            </div>
          ) : (
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              <AnimatePresence>
                {filteredItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="group relative aspect-square overflow-hidden rounded-lg shadow-lg cursor-pointer"
                    onClick={() => openLightbox(index)}
                  >
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                        {item.description && (
                          <p className="text-sm opacity-90">{item.description}</p>
                        )}
                      </div>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="p-3 bg-white/20 backdrop-blur-sm rounded-full">
                          <Expand className="w-8 h-8 text-white" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </section>

      {/* Videos Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#2D3B5F] mb-4">
              {t('videos.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('videos.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {videoItems.map((video) => (
              <div key={video.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative aspect-video bg-black">
                  <video
                    controls
                    className="w-full h-full"
                    preload="metadata"
                  >
                    <source src={video.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#2D3B5F] mb-2">
                    {video.title}
                  </h3>
                  {video.description && (
                    <p className="text-gray-600">{video.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
        <DialogContent className="max-w-7xl w-full h-[90vh] p-0 bg-black/95">
          <DialogTitle className="sr-only">
            {filteredItems[currentImageIndex]?.title}
          </DialogTitle>
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Close Button */}
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute top-4 right-4 z-50 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              aria-label={t('close')}
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Image Counter */}
            <div className="absolute top-4 left-4 z-50 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm">
              {currentImageIndex + 1} / {filteredItems.length}
            </div>

            {/* Previous Button */}
            {filteredItems.length > 1 && (
              <button
                onClick={goToPrevious}
                className="absolute left-4 z-50 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                aria-label={t('previous')}
              >
                <ChevronLeft className="w-8 h-8 text-white" />
              </button>
            )}

            {/* Image */}
            <div className="relative w-full h-full p-16">
              {filteredItems[currentImageIndex] && (
                <>
                  <Image
                    src={filteredItems[currentImageIndex].src}
                    alt={filteredItems[currentImageIndex].title}
                    fill
                    className="object-contain"
                    sizes="100vw"
                    priority
                  />
                  {/* Caption */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white text-center">
                    <h3 className="text-2xl font-bold mb-2">
                      {filteredItems[currentImageIndex].title}
                    </h3>
                    {filteredItems[currentImageIndex].description && (
                      <p className="text-lg opacity-90">
                        {filteredItems[currentImageIndex].description}
                      </p>
                    )}
                  </div>
                </>
              )}
            </div>

            {/* Next Button */}
            {filteredItems.length > 1 && (
              <button
                onClick={goToNext}
                className="absolute right-4 z-50 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                aria-label={t('next')}
              >
                <ChevronRight className="w-8 h-8 text-white" />
              </button>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
