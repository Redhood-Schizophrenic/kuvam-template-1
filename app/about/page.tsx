import Header from '../components/Header'
import { Briefcase, Users, Target, Sparkles } from 'lucide-react'

export default function AboutPage() {
  const features = [
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "What we do",
      description: "At Kuvam Protosolutions, we provide innovative manufacturing solutions to bring your ideas to life. Our state-of-the-art facilities and expert team ensure high-quality results for all your manufacturing needs.",
      pattern: "linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--secondary)) 100%)"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Who we are",
      description: "We are a team of experienced engineers and designers passionate about manufacturing. Our diverse expertise allows us to tackle complex projects across various industries.",
      pattern: "linear-gradient(135deg, hsl(var(--secondary)) 0%, hsl(var(--accent)) 100%)"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Why choose us",
      description: "Our cutting-edge technology and expertise ensure high-quality, efficient manufacturing processes. We pride ourselves on our attention to detail, commitment to innovation, and dedication to customer satisfaction.",
      pattern: "linear-gradient(135deg, hsl(var(--accent)) 0%, hsl(var(--primary)) 100%)"
    }
  ]

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, hsl(var(--primary)) 0%, transparent 50%),
                             radial-gradient(circle at 100% 100%, hsl(var(--secondary)) 0%, transparent 50%),
                             radial-gradient(circle at 0% 0%, hsl(var(--accent)) 0%, transparent 50%)`,
          }}
        />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <h1 className="section-title max-w-4xl mx-auto">
            Transforming Ideas into Reality Through Advanced Manufacturing
          </h1>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="card group relative p-8 hover:scale-105 transition-all duration-300"
              >
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl"
                  style={{ background: feature.pattern }}
                />
                
                <div className="relative z-10">
                  <div 
                    className="w-16 h-16 rounded-lg mb-6 flex items-center justify-center text-white"
                    style={{ background: feature.pattern }}
                  >
                    {feature.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-b from-background to-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "10+", label: "Years Experience" },
              { number: "500+", label: "Projects Completed" },
              { number: "100+", label: "Happy Clients" },
              { number: "50+", label: "Team Members" },
            ].map((stat, index) => (
              <div 
                key={index}
                className="card p-6 text-center hover:scale-105 transition-transform duration-300"
              >
                <div className="text-4xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gradient-to-b from-muted to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Sparkles className="w-6 h-6" />, title: "Innovation" },
              { icon: <Target className="w-6 h-6" />, title: "Precision" },
              { icon: <Users className="w-6 h-6" />, title: "Collaboration" },
              { icon: <Briefcase className="w-6 h-6" />, title: "Excellence" },
            ].map((value, index) => (
              <div 
                key={index}
                className="card p-6 text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary via-secondary to-accent mx-auto mb-4 flex items-center justify-center text-white">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold">{value.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

