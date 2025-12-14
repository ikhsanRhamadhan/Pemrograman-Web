import { motion } from 'motion/react';
import { Rocket, Star } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Rocket className="w-6 h-6 text-blue-400" />
            <span className="text-white">Jelajah Antariksa</span>
          </div>
          
          <p className="text-blue-200 mb-6">
            Menjelajahi keajaiban alam semesta, satu planet pada satu waktu
          </p>

          <div className="flex items-center justify-center gap-6 mb-6">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.2, 1]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.2
                }}
              >
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              </motion.div>
            ))}
          </div>

          <div className="text-blue-300 text-sm">
            © 2025 Ikhsan. Jelajah Antariksa - Website Interaktif Edukasi
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
