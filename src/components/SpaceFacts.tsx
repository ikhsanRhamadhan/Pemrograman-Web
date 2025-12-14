import { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Moon, Star, Zap } from 'lucide-react';

const facts = [
  {
    icon: Star,
    title: 'Cahaya Bintang',
    fact: 'Cahaya dari bintang terjauh membutuhkan miliaran tahun untuk sampai ke Bumi. Kita melihat masa lalu!',
    color: 'from-yellow-400 to-orange-500'
  },
  {
    icon: Moon,
    title: 'Bulan Menjauh',
    fact: 'Bulan menjauh dari Bumi sekitar 3.8 cm setiap tahun. Dulunya Bulan jauh lebih dekat!',
    color: 'from-gray-300 to-gray-500'
  },
  {
    icon: Sparkles,
    title: 'Lubang Hitam',
    fact: 'Lubang hitam memiliki gravitasi sangat kuat hingga bahkan cahaya tidak bisa lolos darinya.',
    color: 'from-purple-500 to-indigo-600'
  },
  {
    icon: Zap,
    title: 'Neutron Star',
    fact: 'Satu sendok teh materi dari bintang neutron beratnya sekitar 6 miliar ton!',
    color: 'from-blue-400 to-cyan-500'
  },
  {
    icon: Star,
    title: 'Alam Semesta Mengembang',
    fact: 'Alam semesta terus mengembang dan galaksi-galaksi saling menjauh satu sama lain.',
    color: 'from-pink-500 to-rose-600'
  },
  {
    icon: Sparkles,
    title: 'Berlian di Langit',
    fact: 'Para ilmuwan menemukan planet yang dipenuhi hujan berlian dan lautan grafit!',
    color: 'from-emerald-400 to-teal-500'
  }
];

export function SpaceFacts() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <div className="min-h-screen py-20 px-4 bg-gradient-to-b from-transparent to-black/30">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-16">
          <h2 className="text-white mb-4">Fakta Menakjubkan Antariksa</h2>
          <p className="text-blue-200">Temukan keajaiban dan misteri alam semesta</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facts.map((item, index) => {
            const Icon = item.icon;
            const isActive = activeCard === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                onHoverStart={() => setActiveCard(index)}
                onHoverEnd={() => setActiveCard(null)}
                className="relative group cursor-pointer"
              >
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all h-full">
                  {/* Icon with gradient background */}
                  <motion.div
                    className={`w-16 h-16 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center mb-4`}
                    animate={isActive ? { rotate: 360 } : { rotate: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>

                  <h3 className="text-white mb-3">{item.title}</h3>
                  <p className="text-blue-200">{item.fact}</p>

                  {/* Glow effect on hover */}
                  {isActive && (
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-20 rounded-2xl blur-xl -z-10`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.3 }}
                      exit={{ opacity: 0 }}
                    />
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Interactive Counter */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 inline-block">
            <p className="text-blue-200 mb-2">Usia Alam Semesta</p>
            <motion.div
              className="text-white"
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
            >
              ~13.8 Miliar Tahun
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
