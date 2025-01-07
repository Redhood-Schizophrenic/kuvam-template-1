export default function AboutUs() {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">About Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* What we do */}
          <div className="card p-8 group hover:bg-primary/5 transition-colors duration-300">
            <div className="mb-6 text-primary">
              <svg
                className="w-12 h-12 group-hover:scale-110 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-foreground">What we do</h3>
            <p className="text-muted-foreground leading-relaxed">
              We provide innovative manufacturing solutions to bring your ideas to life, 
              utilizing cutting-edge technology and industry-leading expertise.
            </p>
          </div>

          {/* Who we are */}
          <div className="card p-8 group hover:bg-secondary/5 transition-colors duration-300">
            <div className="mb-6 text-secondary">
              <svg
                className="w-12 h-12 group-hover:scale-110 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-foreground">Who we are</h3>
            <p className="text-muted-foreground leading-relaxed">
              A team of passionate engineers and designers dedicated to pushing the 
              boundaries of manufacturing excellence.
            </p>
          </div>

          {/* Why us */}
          <div className="card p-8 group hover:bg-accent/5 transition-colors duration-300">
            <div className="mb-6 text-accent">
              <svg
                className="w-12 h-12 group-hover:scale-110 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-foreground">Why us</h3>
            <p className="text-muted-foreground leading-relaxed">
              Our commitment to quality, efficiency, and innovation ensures your 
              projects are delivered with unmatched precision and care.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

