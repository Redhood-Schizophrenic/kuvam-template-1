import Link from 'next/link'
import Header from '../../components/Header'
import { servicesData } from '../../lib/services-data'
import { notFound } from 'next/navigation'
import Placeholder from '../../components/Placeholder'

export default function ServiceCategoryPage({ params }: { params: { category: string } }) {
  const service = servicesData.find(s => s.slug === params.category)
  
  if (!service) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h1 className="section-title">{service.name}</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.subCategories.map((subCategory) => (
              <div key={subCategory.slug} className="card group hover:scale-105 transition-all duration-300">
                <Placeholder
                  width={subCategory.dimensions.width}
                  height={subCategory.dimensions.height}
                  text={subCategory.name}
                  className="rounded-t-xl"
                />
                <div className="p-6">
                  <h2 className="text-2xl font-semibold mb-2">{subCategory.name}</h2>
                  <p className="text-muted-foreground mb-4">{subCategory.description}</p>
                  <Link 
                    href={`/services/${service.slug}/${subCategory.slug}`}
                    className="btn-primary w-full flex items-center justify-center gap-2"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

