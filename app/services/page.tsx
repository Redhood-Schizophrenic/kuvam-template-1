import Link from 'next/link'
import Header from '../components/Header'
import { servicesData } from '../lib/services-data'
import { 
  ArrowRight, 
  Settings, 
  Wrench,
  Cpu, 
  Database, 
  Network, 
  Cloud 
} from 'lucide-react'

// Service icons mapping
const serviceIcons = {
  'manufacturing': Settings,
  'prototyping': Wrench,
  'assembly': Cpu,
  'testing': Database,
  'consulting': Network,
  'maintenance': Cloud,
}

// Service patterns with animated gradients
const getServicePattern = (index: number) => ({
  background: `linear-gradient(135deg, 
    hsl(var(--primary)) ${index * 30}%, 
    hsl(var(--secondary)) ${index * 30 + 50}%, 
    hsl(var(--accent)) 100%
  )`,
  backgroundSize: '200% 200%',
  animation: 'gradient-x 15s ease infinite',
})

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <section className="relative py-24 overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 20%, hsl(var(--primary)) 0%, transparent 40%),
                             radial-gradient(circle at 80% 80%, hsl(var(--secondary)) 0%, transparent 40%),
                             radial-gradient(circle at 50% 50%, hsl(var(--accent)) 0%, transparent 40%)`
          }} />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h1 className="section-title">Our Services</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover our comprehensive range of manufacturing and engineering services
              designed to bring your ideas to life with precision and excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {servicesData.map((service, index) => {
              const IconComponent = serviceIcons[service.slug as keyof typeof serviceIcons] || Settings

              return (
                <div 
                  key={service.slug}
                  className="card group hover:scale-105 transition-all duration-300"
                >
                  <div 
                    className="h-48 relative overflow-hidden"
                    style={getServicePattern(index)}
                  >
                    <div className="absolute inset-0 flex items-center justify-center text-white">
                      <div className="text-center">
                        <IconComponent className="w-16 h-16 mb-4 mx-auto" />
                        <h2 className="text-2xl font-bold text-center px-6">
                          {service.name}
                        </h2>
                      </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute inset-0 pointer-events-none">
                      <div className="absolute top-4 right-4 w-20 h-20 border border-white/20 rounded-full" />
                      <div className="absolute bottom-4 left-4 w-16 h-16 border border-white/10 rounded-full" />
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-muted-foreground mb-6">
                      {service.description}
                    </p>
                    <Link 
                      href={`/services/${service.slug}`}
                      className="btn-primary w-full flex items-center justify-center gap-2 group-hover:gap-4 transition-all"
                    >
                      Learn More
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

