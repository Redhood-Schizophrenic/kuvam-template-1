export default function ContactUs() {
  return (
    <section className="py-24 bg-gradient-to-b from-muted to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Contact Us</h2>
        <div className="max-w-2xl mx-auto">
          <div className="card p-8">
            <form className="space-y-6">
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="input-modern w-full"
                  placeholder="John Doe"
                  required
                />
              </div>

              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="input-modern w-full"
                  placeholder="john@example.com"
                  required
                />
              </div>

              {/* Phone Input */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="input-modern w-full"
                  placeholder="+1 (555) 000-0000"
                  required
                />
              </div>

              {/* Company Input */}
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="input-modern w-full"
                  placeholder="Acme Inc."
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

