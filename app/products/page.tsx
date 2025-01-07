import Link from 'next/link'
import Header from '../components/Header'
import { productsData } from '../lib/products-data'
import { ArrowRight, Cpu, Cog, Layers, Box, Zap, Shield } from 'lucide-react'

// Product icons mapping
const productIcons = {
  'product-1': Cpu,
  'product-2': Cog,
  'product-3': Layers,
  'product-4': Box,
  'product-5': Zap,
  'product-6': Shield,
}

// Product patterns
const patterns = [
  `radial-gradient(circle at 50% 50%, hsl(var(--primary)) 0%, transparent 50%),
   radial-gradient(circle at 100% 100%, hsl(var(--secondary)) 0%, transparent 50%)`,
  `linear-gradient(60deg, hsl(var(--secondary)) 0%, hsl(var(--accent)) 100%)`,
  `linear-gradient(120deg, hsl(var(--accent)) 0%, hsl(var(--primary)) 100%)`,
]

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <section className="relative pt-24 pb-12 sm:py-32 overflow-hidden">
        {/* Background Pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 30% 20%, hsl(var(--primary)) 0%, transparent 50%),
                             radial-gradient(circle at 70% 80%, hsl(var(--secondary)) 0%, transparent 50%),
                             radial-gradient(circle at 90% 10%, hsl(var(--accent)) 0%, transparent 50%)`,
          }}
        />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <h1 className="section-title max-w-4xl mx-auto">
            Discover Our Cutting-Edge Products
          </h1>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 mt-16">
            {productsData.map((product, index) => {
              const IconComponent = productIcons[product.id as keyof typeof productIcons] || Cpu
              
              return (
                <div 
                  key={product.id}
                  className="card group hover:scale-105 transition-all duration-300"
                >
                  <div 
                    className="h-64 sm:h-72 relative overflow-hidden"
                    style={{
                      background: patterns[index % patterns.length],
                    }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center text-white">
                      <div className="p-8 text-center">
                        <IconComponent className="w-16 h-16 mb-6 mx-auto" />
                        <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
                        <div className="w-12 h-1 bg-white/50 mx-auto rounded-full" />
                      </div>
                    </div>
                    
                    {/* Decorative Elements */}
                    <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                      <div className="absolute top-4 left-4 w-24 h-24 border-2 border-white/20 rounded-full" />
                      <div className="absolute bottom-4 right-4 w-32 h-32 border-2 border-white/10 rounded-full" />
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-muted-foreground mb-6">
                      {product.shortDescription}
                    </p>
                    <Link 
                      href={`/products/${product.id}`}
                      className="btn-primary w-full flex items-center justify-center gap-2 group-hover:gap-4 transition-all"
                    >
                      Explore Product
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}

