import { Button } from "@/components/ui/button"
import { ArrowRight, Download } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-semibold">Dhruv Pahwa</h1>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a
              href="https://github.com/Dhruv-Pahwa"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
            >
              My Projects
              <ArrowRight className="w-3 h-3" />
            </a>
            <a
              href="https://www.linkedin.com/in/dhruvpahwa/"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
            >
              Contact me
              <ArrowRight className="w-3 h-3" />
            </a>
          </nav>

          {/* Mobile menu button */}
          <button className="md:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8 relative z-10">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-4xl">👋</span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance">
                  Hello! <span className="text-primary">I'm Dhruv</span>
                </h2>
              </div>

              <div className="flex items-center gap-3">
                <div className="h-[2px] w-16 bg-border"></div>
                <p className="text-xl text-muted-foreground">Data Science & AI ✦</p>
              </div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Hi, I'm Dhruv Pahwa, a{" "}
              <span className="font-medium text-foreground">Data Science & AI undergraduate</span> who enjoys solving
              real-world problems using intelligent, secure, and scalable systems. I focus on building practical AI and
              data-driven solutions, validating ideas through experimentation, research, and continuous learning.
            </p>

            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 mt-0.5 text-primary shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-foreground">Intelligent & scalable systems</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 mt-0.5 text-primary shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-foreground">Data-driven solutions</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 mt-0.5 text-primary shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-foreground">Experimentation & continuous learning</span>
              </li>
            </ul>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="rounded-full px-8" asChild>
                <a href="https://www.linkedin.com/in/dhruvpahwa/">Let's Talk</a>
              </Button>
              <Button size="lg" variant="ghost" className="gap-2" asChild>
                <a href="https://drive.google.com/file/d/11pyDpgW-Rwq43t2k0pt_0CDN7RyDU-BE/view?usp=sharing">
                  Download CV
                  <Download className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* Right Content - Image with decorative elements */}
          <div className="relative">
            {/* Gradient Blob - positioned in top center area */}
            <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-br from-yellow-200 via-pink-300 to-blue-400 rounded-full blur-3xl opacity-50 -z-10"></div>

            {/* Decorative Arrow */}
            <svg
              className="absolute -top-10 left-0 w-32 h-32 text-border hidden lg:block"
              viewBox="0 0 100 100"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M10 10 L50 50 M50 50 L90 10" />
            </svg>

            {/* Profile Image */}
            <div className="relative z-10 max-w-md mx-auto">
              <img
                src="/images/whatsapp-20image-202025-12-13-20at-2023.jpg"
                alt="Dhruv Pahwa - Data Science & AI Student"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />

              {/* Hello Badge */}
              <div className="absolute bottom-10 left-10 bg-primary text-primary-foreground rounded-full w-32 h-32 flex items-center justify-center text-2xl font-bold shadow-xl">
                Hello 👋🏻
              </div>

              {/* Decorative wavy line */}
              <svg
                className="absolute -bottom-5 -right-5 w-24 h-24 text-border hidden lg:block"
                viewBox="0 0 100 100"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
              >
                <path d="M10 50 Q30 30 50 50 T90 50" />
              </svg>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
