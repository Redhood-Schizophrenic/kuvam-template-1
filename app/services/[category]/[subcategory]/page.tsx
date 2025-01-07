import Link from 'next/link'
import Header from '../../../components/Header'
import { servicesData } from '../../../lib/services-data'
import { notFound } from 'next/navigation'
import Placeholder from '../../../components/Placeholder'

export default function SubCategoryPage({ 
  params 
}: { 
  params: { category: string; subcategory: string } 
}) {
  const service = servicesData.find(s => s.slug === params.category)
  const subCategory = service?.subCategories.find(sc => sc.slug === params.subcategory)
  
  if (!service || !subCategory) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-gray-100">
      <Header />
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <nav className="mb-8">
              <ol className="flex space-x-2 text-gray-600">
                <li><a href="/services" className="hover:text-blue-600">Services</a></li>
                <li>/</li>
                <li><a href={`/services/${service.slug}`} className="hover:text-blue-600">{service.name}</a></li>
                <li>/</li>
                <li className="text-blue-600">{subCategory.name}</li>
              </ol>
            </nav>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <Placeholder
                width={subCategory.dimensions.width}
                height={subCategory.dimensions.height}
                text={subCategory.name}
                className="w-full object-cover"
              />
              
              <div className="p-8">
                <h1 className="text-4xl font-bold mb-6">{subCategory.name}</h1>
                
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">About</h2>
                  <p className="text-gray-600">{subCategory.about}</p>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">Features & Benefits</h2>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    {subCategory.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-4">Watch Demo</h2>
                  <div className="relative pb-[56.25%] h-0">
                    <iframe
                      src={subCategory.youtubeLink}
                      className="absolute top-0 left-0 w-full h-full rounded-lg"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

