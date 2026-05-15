import { motion } from 'framer-motion';
import { galleryImages } from '../data/gallery.js';
import SectionHeading from './SectionHeading.jsx';

export default function Gallery() {
  return (
    <section id="gallery" className="relative z-20 py-24">
      <div className="section-shell">
        <SectionHeading eyebrow="Divine gallery" title="Sacred architecture in soft motion">
          Temple, mosque, church, gurudwara, monastery, and Jain temple visuals arranged for calm browsing.
        </SectionHeading>
        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
          {galleryImages.map((image, index) => (
            <motion.figure
              key={image.title}
              className="reveal premium-glass group mb-5 break-inside-avoid overflow-hidden rounded-[2rem]"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: (index % 3) * 0.08 }}
            >
              <img src={image.src} alt={`${image.place} peaceful view`} className="w-full object-cover opacity-80 transition duration-700 group-hover:scale-105 group-hover:opacity-100" loading="lazy" />
              <figcaption className="p-4">
                <p className="font-bold text-white">{image.title}</p>
                <p className="text-sm text-white/48">{image.place}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
