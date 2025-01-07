import Link from 'next/link'
import Header from '../../components/Header'
import { productsData } from '../../lib/products-data'
import { notFound } from 'next/navigation'
import { 
  ArrowRight, 
  CheckCircle2, 
  Cpu, 
  Settings, 
  Ruler, 
  Target, 
  Zap,
  Wrench
} from 'lucide-react'

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = productsData.find(p => p.id === params.id)
  
  if (!product) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <section className="relative pt-24 pb-12 sm:py-32 overflow-hidden">
        {/* Background Pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 20%, hsl(var(--primary)) 0%, transparent 50%),
                             radial-gradient(circle at 80% 80%, hsl(var(--secondary)) 0%, transparent 50%),
                             radial-gradient(circle at 50% 50%, hsl(var(--accent)) 0%, transparent 50%)`
          }}
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <ol className="flex flex-wrap items-center gap-2 text-muted-foreground">
              <li>
                <Link href="/products" className="hover:text-foreground transition-colors">
                  Products
                </Link>
              </li>
              <li>/</li>
              <li className="text-foreground font-medium">{product.name}</li>
            </ol>
          </nav>

          <div className="card overflow-visible">
            {/* Hero Section */}
            <div className="relative h-64 sm:h-80 md:h-96 rounded-t-xl overflow-hidden">
              <div 
                className="absolute inset-0 flex items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--secondary)) 100%)`
                }}
              >
                <div className="text-center text-white p-8">
                  <Cpu className="w-24 h-24 mb-6 mx-auto" />
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                    {product.name}
                  </h1>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-8 left-8 w-32 h-32 border-2 border-white/20 rounded-full" />
                  <div className="absolute bottom-8 right-8 w-40 h-40 border-2 border-white/10 rounded-full" />
                </div>
              </div>
            </div>
            
            <div className="p-6 sm:p-8 md:p-10">
              {/* About Section */}
              <div className="mb-12 animate-slideIn">
                <div className="flex items-center gap-3 mb-4">
                  <Settings className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl sm:text-3xl font-semibold">About Product</h2>
                </div>
                <p className="text-muted-foreground">{product.about}</p>
              </div>

              {/* Features Section */}
              <div className="mb-12 animate-slideIn">
                <div className="flex items-center gap-3 mb-6">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl sm:text-3xl font-semibold">Features & Benefits</h2>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {product.features.map((feature, index) => (
                    <div 
                      key={index}
                      className="flex items-start gap-3 p-4 rounded-lg bg-muted/50"
                    >
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Specifications Grid */}
              <div className="mb-12 animate-slideIn">
                <div className="flex items-center gap-3 mb-6">
                  <Wrench className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl sm:text-3xl font-semibold">Specifications</h2>
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div 
                      key={key}
                      className="p-4 rounded-lg bg-muted/50"
                    >
                      <div className="text-sm text-muted-foreground mb-1">{key}</div>
                      <div className="font-medium">{value}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Applications */}
              <div className="mb-12 animate-slideIn">
                <div className="flex items-center gap-3 mb-6">
                  <Target className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl sm:text-3xl font-semibold">Applications</h2>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {product.applications.map((application, index) => (
                    <div 
                      key={index}
                      className="flex items-start gap-3 p-4 rounded-lg bg-muted/50"
                    >
                      <Zap className="w-5 h-5 text-primary mt-0.5" />
                      <span>{application}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Section */}
              <div className="flex flex-col sm:flex-row gap-4 animate-slideIn">
                <Link 
                  href="/quote" 
                  className="btn-primary flex items-center justify-center gap-2"
                >
                  Request Quote
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link 
                  href="/contact" 
                  className="btn-secondary flex items-center justify-center gap-2"
                >
                  Contact Sales
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

