import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Globe, Thermometer, Ruler, Clock } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const planets = [
  {
    id: 1,
    name: 'Merkurius',
    color: 'from-gray-400 to-gray-600',
    image: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXJjdXJ5JTIwcGxhbmV0fGVufDF8fHx8MTc2NTY4NTkyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    size: 60,
    distance: '57.9 juta km dari Matahari',
    temperature: '430°C (siang) / -180°C (malam)',
    diameter: '4,879 km',
    orbital: '88 hari',
    description: 'Planet terkecil dan terdekat dengan Matahari. Permukaannya penuh kawah seperti bulan.',
    facts: ['Tidak memiliki atmosfer', 'Satu hari lebih panjang dari setahun', 'Suhu paling ekstrem']
  },
  {
    id: 2,
    name: 'Venus',
    color: 'from-yellow-600 to-orange-500',
    image: 'https://images.unsplash.com/photo-1632395627732-005012dbc286?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZW51cyUyMHBsYW5ldHxlbnwxfHx8fDE3NjU1ODUyMDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    size: 90,
    distance: '108.2 juta km dari Matahari',
    temperature: '465°C',
    diameter: '12,104 km',
    orbital: '225 hari',
    description: 'Planet paling panas di tata surya dengan atmosfer beracun yang tebal.',
    facts: ['Berotasi mundur', 'Awan asam sulfat', 'Bintang paling terang setelah Matahari dan Bulan']
  },
  {
    id: 3,
    name: 'Bumi',
    color: 'from-blue-500 to-green-500',
    image: 'https://images.unsplash.com/photo-1727363584291-433dcd86a0fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlYXJ0aCUyMHBsYW5ldCUyMHNwYWNlfGVufDF8fHx8MTc2NTY0NzcxNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    size: 95,
    distance: '149.6 juta km dari Matahari',
    temperature: '15°C (rata-rata)',
    diameter: '12,742 km',
    orbital: '365.25 hari',
    description: 'Rumah kita! Satu-satunya planet yang diketahui mendukung kehidupan.',
    facts: ['71% tertutup air', 'Memiliki satu bulan', 'Medan magnet melindungi dari radiasi']
  },
  {
    id: 4,
    name: 'Mars',
    color: 'from-red-600 to-orange-700',
    image: 'https://images.unsplash.com/photo-1710676145418-51accf3af505?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJzJTIwcGxhbmV0JTIwc3VyZmFjZXxlbnwxfHx8fDE3NjU2ODU5MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    size: 70,
    distance: '227.9 juta km dari Matahari',
    temperature: '-63°C (rata-rata)',
    diameter: '6,779 km',
    orbital: '687 hari',
    description: 'Planet merah dengan gunung tertinggi di tata surya, Olympus Mons.',
    facts: ['Memiliki es di kutub', 'Dua bulan: Phobos dan Deimos', 'Target kolonisasi manusia']
  },
  {
    id: 5,
    name: 'Jupiter',
    color: 'from-orange-400 to-yellow-600',
    image: 'https://images.unsplash.com/photo-1630839437035-dac17da580d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqdXBpdGVyJTIwcGxhbmV0fGVufDF8fHx8MTc2NTY2NDA2MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    size: 140,
    distance: '778.5 juta km dari Matahari',
    temperature: '-108°C',
    diameter: '139,820 km',
    orbital: '12 tahun',
    description: 'Planet terbesar dengan Bintik Merah Besar yang merupakan badai raksasa.',
    facts: ['Memiliki 79+ bulan', 'Pelindung Bumi dari asteroid', 'Hari tersingkat: 10 jam']
  },
  {
    id: 6,
    name: 'Saturnus',
    color: 'from-yellow-300 to-amber-500',
    image: 'https://images.unsplash.com/photo-1614732414444-096e5f1122d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYXR1cm4lMjBwbGFuZXQlMjByaW5nc3xlbnwxfHx8fDE3NjU2ODU5Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    size: 120,
    distance: '1.4 miliar km dari Matahari',
    temperature: '-139°C',
    diameter: '116,460 km',
    orbital: '29 tahun',
    description: 'Terkenal dengan cincin indahnya yang terbuat dari es dan batu.',
    facts: ['Cincin dari es dan batu', 'Densitas paling rendah', 'Memiliki 80+ bulan']
  },
  {
    id: 7,
    name: 'Uranus',
    color: 'from-cyan-400 to-blue-500',
    image: 'https://images.unsplash.com/photo-1614732484003-ef9881555dc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmFudXMlMjBwbGFuZXR8ZW58MXx8fHwxNzY1Njg1OTI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    size: 100,
    distance: '2.9 miliar km dari Matahari',
    temperature: '-197°C',
    diameter: '50,724 km',
    orbital: '84 tahun',
    description: 'Planet yang berotasi miring, seolah menggelinding di orbitnya.',
    facts: ['Berotasi miring 98°', 'Warna biru dari metana', '27 bulan yang diketahui']
  },
  {
    id: 8,
    name: 'Neptunus',
    color: 'from-blue-600 to-indigo-700',
    image: 'https://images.unsplash.com/photo-1614313913007-2b4ae8ce32d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXB0dW5lJTIwcGxhbmV0fGVufDF8fHx8MTc2NTY4NTkyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    size: 95,
    distance: '4.5 miliar km dari Matahari',
    temperature: '-201°C',
    diameter: '49,244 km',
    orbital: '165 tahun',
    description: 'Planet terjauh dengan angin tercepat di tata surya.',
    facts: ['Angin hingga 2,100 km/jam', 'Bintik Gelap Besar', 'Ditemukan melalui matematika']
  }
];

export function PlanetExplorer() {
  const [selectedPlanet, setSelectedPlanet] = useState(planets[2]); // Default: Bumi

  return (
    <div id="planet-explorer" className="min-h-screen py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-16">
          <h2 className="text-white mb-4">Jelajahi Planet-Planet</h2>
          <p className="text-blue-200">Klik pada planet untuk mempelajari lebih lanjut</p>
        </div>

        {/* Planet Selector */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {planets.map((planet) => (
            <motion.button
              key={planet.id}
              onClick={() => setSelectedPlanet(planet)}
              className={`relative group cursor-pointer`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              animate={selectedPlanet.id === planet.id ? { scale: 1.2 } : { scale: 1 }}
            >
              <div
                className={`rounded-full shadow-lg overflow-hidden border-2 border-white/30`}
                style={{ width: planet.size, height: planet.size }}
              >
                <ImageWithFallback
                  src={planet.image}
                  alt={planet.name}
                  className="w-full h-full object-cover"
                />
                {selectedPlanet.id === planet.id && (
                  <motion.div
                    className="absolute inset-0 rounded-full border-4 border-white"
                    layoutId="planet-ring"
                  />
                )}
              </div>
              <p className="text-white mt-2 text-sm">{planet.name}</p>
            </motion.button>
          ))}
        </div>

        {/* Planet Details */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedPlanet.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20"
          >
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left: Planet Visualization */}
              <div className="flex items-center justify-center">
                <motion.div
                  className="rounded-full shadow-2xl overflow-hidden border-4 border-white/20"
                  style={{ width: 300, height: 300 }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                >
                  <ImageWithFallback
                    src={selectedPlanet.image}
                    alt={selectedPlanet.name}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>

              {/* Right: Information */}
              <div className="text-white">
                <h3 className="mb-4">{selectedPlanet.name}</h3>
                <p className="text-blue-200 mb-6">{selectedPlanet.description}</p>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <Ruler className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-blue-300 text-sm">Jarak dari Matahari</div>
                      <div>{selectedPlanet.distance}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Thermometer className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-blue-300 text-sm">Suhu</div>
                      <div>{selectedPlanet.temperature}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Globe className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-blue-300 text-sm">Diameter</div>
                      <div>{selectedPlanet.diameter}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-blue-300 text-sm">Periode Orbit</div>
                      <div>{selectedPlanet.orbital}</div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="mb-3">Fakta Menarik:</h4>
                  <ul className="space-y-2">
                    {selectedPlanet.facts.map((fact, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-2"
                      >
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        <span className="text-blue-100">{fact}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
}