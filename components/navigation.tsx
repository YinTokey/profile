'use client'

import React from 'react'

const navigationItems = [
  { label: 'About', href: '#hero' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Blog', href: '#blog' },
  { label: 'Education', href: '#education' },
]

export function Navigation() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="backdrop-blur-lg bg-white/20 border border-white/30 rounded-full px-6 py-3 shadow-lg">
        <ul className="flex items-center space-x-8">
          {navigationItems.map((item) => (
            <li key={item.href}>
              <button
                onClick={() => scrollToSection(item.href)}
                className="text-black/80 hover:text-black font-medium text-sm transition-colors duration-200 hover:scale-105 transform"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
} 