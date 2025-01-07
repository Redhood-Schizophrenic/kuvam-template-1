import { User, Building, Star } from 'lucide-react'

const testimonials = [
  {
    name: "John Doe",
    company: "Tech Innovations Inc.",
    pattern: "linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--secondary)) 100%)",
    quote: "Kuvam Protosolutions has been instrumental in bringing our product ideas to life. Their expertise in prototyping and manufacturing is unparalleled."
  },
  {
    name: "Jane Smith",
    company: "Future Gadgets Ltd.",
    pattern: "linear-gradient(135deg, hsl(var(--secondary)) 0%, hsl(var(--accent)) 100%)",
    quote: "The team at Kuvam Protosolutions is incredibly professional and efficient. They've consistently delivered high-quality parts that exceed our expectations."
  },
  {
    name: "Mike Johnson",
    company: "Innovative Designs Co.",
    pattern: "linear-gradient(135deg, hsl(var(--accent)) 0%, hsl(var(--primary)) 100%)",
    quote: "Working with Kuvam Protosolutions has streamlined our product development process. Their attention to detail and quick turnaround times have been crucial to our success."
  }
]

export default function Testimonials() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="card group hover:shadow-2xl transition-all duration-300"
            >
              {/* Avatar and Pattern */}
              <div 
                className="relative -mt-8 mx-auto w-16 h-16 rounded-full border-4 border-background shadow-lg overflow-hidden"
                style={{ background: testimonial.pattern }}
              >
                <div className="absolute inset-0 flex items-center justify-center text-white">
                  <User className="w-8 h-8" />
                </div>
              </div>

              {/* Quote */}
              <div className="p-6 text-center">
                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-5 h-5 fill-current text-yellow-400" 
                    />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div className="space-y-1">
                  <p className="font-semibold">{testimonial.name}</p>
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <Building className="w-4 h-4" />
                    <span>{testimonial.company}</span>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                style={{ 
                  background: testimonial.pattern,
                  clipPath: "polygon(0 70%, 100% 40%, 100% 100%, 0% 100%)"
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

