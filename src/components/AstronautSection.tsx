import { motion } from 'motion/react';
import { Rocket, Satellite, Users } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function AstronautSection() {
  return (
    <div className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Image Side */}
          <motion.div
            className="relative"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="rounded-3xl overflow-hidden border-4 border-white/20 shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1710267224216-8eced3320dac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc3Ryb25hdXQlMjBzcGFjZXxlbnwxfHx8fDE3NjU2NDgzNTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Astronaut in space"
                className="w-full h-[500px] object-cover"
              />
            </div>
            
            {/* Floating badge */}
            <motion.div
              className="absolute -top-6 -right-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full p-6 shadow-2xl"
              animate={{ rotate: [0, 10, 0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              <Rocket className="w-12 h-12 text-white" />
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <div className="text-white">
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              Eksplorasi Manusia di Antariksa
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-blue-200 mb-8"
            >
              Sejak Yuri Gagarin menjadi manusia pertama di luar angkasa pada 1961, 
              eksplorasi antariksa telah berkembang pesat. Kini kita memiliki stasiun 
              luar angkasa, misi ke Mars, dan impian kolonisasi planet lain.
            </motion.p>

            <div className="space-y-6">
              {[
                {
                  icon: Users,
                  title: 'Stasiun Luar Angkasa Internasional',
                  desc: 'Laboratorium mengambang yang terus dihuni sejak tahun 2000',
                  color: 'from-blue-400 to-cyan-500'
                },
                {
                  icon: Satellite,
                  title: 'Teleskop Luar Angkasa',
                  desc: 'Mengungkap rahasia alam semesta dengan gambar yang menakjubkan',
                  color: 'from-purple-400 to-pink-500'
                },
                {
                  icon: Rocket,
                  title: 'Misi ke Mars',
                  desc: 'Rover dan teknologi baru menjelajahi planet merah',
                  color: 'from-orange-400 to-red-500'
                }
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    whileHover={{ x: 10 }}
                    className="flex items-start gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/30 transition-all"
                  >
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="mb-1">{item.title}</h4>
                      <p className="text-blue-200 text-sm">{item.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
