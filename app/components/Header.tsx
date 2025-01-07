'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center space-x-3"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center">
              <span className="text-xl font-bold text-white">K</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Kuvam
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-foreground/60 hover:text-foreground transition-colors duration-200"
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="text-foreground/60 hover:text-foreground transition-colors duration-200"
            >
              About
            </Link>
            <Link 
              href="/services" 
              className="text-foreground/60 hover:text-foreground transition-colors duration-200"
            >
              Services
            </Link>
            <Link 
              href="/products" 
              className="text-foreground/60 hover:text-foreground transition-colors duration-200"
            >
              Products
            </Link>
            <Link 
              href="/quote" 
              className="btn-primary"
            >
              Get Quote
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-accent/10 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="py-4 space-y-4">
              <Link 
                href="/" 
                className="block px-4 py-2 text-foreground/60 hover:text-foreground hover:bg-accent/10 rounded-lg transition-colors duration-200"
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="block px-4 py-2 text-foreground/60 hover:text-foreground hover:bg-accent/10 rounded-lg transition-colors duration-200"
              >
                About
              </Link>
              <Link 
                href="/services" 
                className="block px-4 py-2 text-foreground/60 hover:text-foreground hover:bg-accent/10 rounded-lg transition-colors duration-200"
              >
                Services
              </Link>
              <Link 
                href="/products" 
                className="block px-4 py-2 text-foreground/60 hover:text-foreground hover:bg-accent/10 rounded-lg transition-colors duration-200"
              >
                Products
              </Link>
              <div className="px-4">
                <Link 
                  href="/quote" 
                  className="btn-primary w-full text-center"
                >
                  Get Quote
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

