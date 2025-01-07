'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const slides = [
  {
    title: "Innovative Manufacturing Solutions",
    text: "Transforming ideas into reality with cutting-edge technology",
    pattern: "radial-gradient(circle at 20% 50%, hsl(var(--primary)) 0%, hsl(var(--secondary)) 50%, hsl(var(--accent)) 100%)"
  },
  {
    title: "Precision Engineering",
    text: "Delivering unparalleled quality in every project",
    pattern: "linear-gradient(60deg, hsl(var(--secondary)) 0%, hsl(var(--primary)) 100%)"
  },
  {
    title: "Future-Ready Prototyping",
    text: "Bringing your concepts to life with rapid prototyping",
    pattern: "linear-gradient(120deg, hsl(var(--accent)) 0%, hsl(var(--secondary)) 100%)"
  }
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative h-[90vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              background: slide.pattern,
              opacity: 0.9
            }} 
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
      ))}

      <div className="relative h-full container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center h-full max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-slideIn">
            {slides[currentSlide].title}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 animate-slideIn">
            {slides[currentSlide].text}
          </p>
          <div className="flex gap-4 animate-slideIn">
            <Link href="/quote" className="btn-primary">
              Get Started
            </Link>
            <Link href="/about" className="btn-secondary">
              Learn More
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white w-8' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

