'use client';

import { MaskRevealBackground } from '@/components/mask-reveal-background';
import { ProjectCard } from '@/components/project-card';
import { SkillsSection } from '@/components/skills-section';
import { ScrollAnimationWrapper } from '@/components/scroll-animation-wrapper';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, ExternalLink, MessageCircle } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const projects = [
    {
      title: 'SAHYATRI — IoT Bus Occupancy Monitoring',
      description:
        'Real-time public transport monitoring system using YOLOv8 object detection deployed on Raspberry Pi for edge inference.',
      highlights: [
        'YOLOv8 model achieving 95% accuracy on 1000+ test images for passenger counting',
        'Real-time inference at 15-20 FPS with <100ms latency on Raspberry Pi 4',
        'Multithreading pipeline for parallel video processing and LCD display updates via GPIO',
      ],
      technologies: ['YOLOv8', 'PyTorch', 'IoT', 'Raspberry Pi', 'Python'],
      links: {
        github: 'https://github.com/Atom0204/SahYatri',
      },
      achievement: 'BitBox 5.0 Hackathon Winner',
    },
    {
      title: 'Food Recognition & Nutritional Analysis AI',
      description:
        'Deep learning system for food recognition and comprehensive nutritional analysis with API integration.',
      highlights: [
        'ResNet-50 CNN trained on Food-101 dataset (101,000 images) with 92% top-1 accuracy',
        'Data augmentation pipeline increasing dataset by 300% with 15% overfitting reduction',
        'Gradio interface deployed on Hugging Face Spaces with macro/micronutrient breakdown',
      ],
      technologies: ['ResNet-50', 'TensorFlow', 'Gradio', 'API Integration'],
      links: {
        demo: 'https://huggingface.co/spaces/SKashy0204/res-50',
      },
    },
    {
      title: 'Mathematical Expression Solver',
      description:
        'Handwritten equation recognition and algebraic solving system with OCR and symbolic computation.',
      highlights: [
        'Fine-tuned EasyOCR model achieving 89% recognition accuracy across 14 character classes',
        'OpenCV preprocessing pipeline with 85% character segmentation accuracy',
        'Flask REST API integrating SymPy and NumPy for expression parsing and solving',
      ],
      technologies: ['EasyOCR', 'OpenCV', 'Flask', 'SymPy', 'Python'],
      links: {
        github: 'https://github.com/Atom0204/SolveINK',
      },
    },
  ];

  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['Python', 'C/C++', 'JavaScript', 'TypeScript', 'SQL', 'PHP'],
    },
    {
      title: 'ML/AI Frameworks',
      skills: [
        'PyTorch',
        'TensorFlow',
        'Keras',
        'YOLOv8',
        'ResNet',
        'MobileNet',
        'OpenCV',
      ],
    },
    {
      title: 'Web Technologies',
      skills: [
        'React.js',
        'Node.js',
        'Next.js',
        'Flask',
        'Streamlit',
        'Tailwind CSS',
      ],
    },
    {
      title: 'Databases & Cloud',
      skills: [
        'MongoDB',
        'PostgreSQL',
        'MySQL',
        'AWS',
        'Docker',
        'Git/GitHub',
      ],
    },
    {
      title: 'Specializations',
      skills: [
        'Computer Vision',
        'Deep Learning',
        'Object Detection',
        'Image Classification',
        'NLP',
        'Transfer Learning',
      ],
    },
    {
      title: 'Hardware & IoT',
      skills: ['Raspberry Pi', 'Arduino', 'Camera Modules', 'Sensors'],
    },
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden">
      {/* Hero Section with Mask Reveal */}
      <section className="relative h-screen max-h-screen overflow-hidden">
        <MaskRevealBackground
          grayscaleImage="/portrait-base.jpg"
          colorImage="/portrait-base.jpg"
          spotlightRadius={150}
          className="h-full"
        />

        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-slate-900/20 via-slate-900/60 to-slate-900/95 backdrop-blur-[2px]">
          <div className="text-center z-20 px-4">
            <div className="mb-6 inline-block">
              <div className="text-sm font-mono text-gray-300 px-4 py-2 rounded-full border border-gray-600/50 bg-gray-800/40">
                👋 Welcome to my portfolio
              </div>
            </div>

            <h1 className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-gray-300 to-gray-400 bg-clip-text text-transparent text-balance">
              Shivam Kashyap
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 mb-2 font-light">
             • AI-ML Enthusiast •
            </p>

            <p className="text-sm md:text-base text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
              Crafting intelligent systems with deep learning and computer vision.
              BitBox 5.0 Hackathon Winner. Specializing in YOLOv8, PyTorch, and
              edge AI deployment.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="#projects">
                <Button
                  variant="outline"
                  className="border-gray-600/60 text-gray-200 hover:bg-gray-800/60 px-8 py-6 text-base rounded-lg flex items-center gap-2 bg-transparent"
                >
                  View My Work
                </Button>
              </Link>
              <a href="mailto:shivamkashyap0204@gmail.com">
                <Button
                  variant="outline"
                  className="border-gray-600/60 text-gray-200 hover:bg-gray-800/60 px-8 py-6 text-base rounded-lg flex items-center gap-2 bg-transparent"
                >
                  <Mail size={20} />
                  Get In Touch
                </Button>
              </a>
              <a href="https://wa.me/8447892334" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  className="border-gray-600/60 text-gray-200 hover:bg-gray-800/60 px-8 py-6 text-base rounded-lg flex items-center gap-2 bg-transparent"
                >
                  <MessageCircle size={20} />
                  Chat on WhatsApp
                </Button>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-6 mt-8">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-200 transition-colors">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-200 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:shivamkashyap0204@gmail.com" className="text-gray-400 hover:text-gray-200 transition-colors">
                <Mail size={24} />
              </a>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-200 transition-colors">
                <MessageCircle size={24} />
              </a>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
              <svg
                className="w-6 h-6 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <ScrollAnimationWrapper variant="fade-up" className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-gray-500 to-gray-400 rounded-full mb-8" />
        </ScrollAnimationWrapper>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 text-slate-300 leading-relaxed">
            <ScrollAnimationWrapper variant="fade-up" delay={0.1}>
              <p>
                I am a Electronics and Communication student at Jaypee Institute of Information
                Technology with a passion for building intelligent systems that
                solve real-world problems. My journey in machine learning and
                computer vision has led me to develop cutting-edge solutions in
                object detection, image classification, and AI deployment.
              </p>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper variant="fade-up" delay={0.2}>
              <p>
                My expertise spans from training deep neural networks with PyTorch
                and TensorFlow to deploying edge AI models on resource-constrained
                devices like Raspberry Pi. I combine strong theoretical
                understanding with practical implementation skills to create
                production-ready AI systems.
               
              </p>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper variant="fade-up" delay={0.3}>
              <p>
                Recently, I won 1st place at BitBox 5.0 Hackathon for SahYatri, an
                IoT-enabled real-time bus occupancy monitoring system using YOLOv8
                object detection. This victory validated my ability to build
                scalable, impactful AI solutions.
              </p>
            </ScrollAnimationWrapper>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <ScrollAnimationWrapper variant="scale" delay={0.1}>
              <div className="rounded-lg border border-gray-600/40 bg-slate-900/80 backdrop-blur-sm p-6 hover:bg-gray-700/20 hover:border-gray-500/60 transition-all">
                <div className="text-3xl font-bold text-gray-300 mb-2">3+</div>
                <div className="text-sm text-slate-400">Major ML Projects</div>
              </div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper variant="scale" delay={0.2}>
              <div className="rounded-lg border border-gray-600/40 bg-slate-900/80 backdrop-blur-sm p-6 hover:bg-gray-700/20 hover:border-gray-500/60 transition-all">
                <div className="text-3xl font-bold text-gray-300 mb-2">1st</div>
                <div className="text-sm text-slate-400">Hackathon Win</div>
              </div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper variant="scale" delay={0.3}>
              <div className="rounded-lg border border-gray-600/40 bg-slate-900/80 backdrop-blur-sm p-6 hover:bg-gray-700/20 hover:border-gray-500/60 transition-all">
                <div className="text-3xl font-bold text-gray-300 mb-2">8.5/10</div>
                <div className="text-sm text-slate-400">University CGPA</div>
              </div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper variant="scale" delay={0.4}>
              <div className="rounded-lg border border-gray-600/40 bg-slate-900/80 backdrop-blur-sm p-6 hover:bg-gray-700/20 hover:border-gray-500/60 transition-all">
                <div className="text-3xl font-bold text-gray-300 mb-2">6+</div>
                <div className="text-sm text-slate-400">Tech Stacks</div>
              </div>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gray-600/5 rounded-full blur-3xl opacity-50 animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gray-700/5 rounded-full blur-3xl opacity-50 animate-pulse delay-1000" />
        
        <div className="relative z-10">
          <ScrollAnimationWrapper variant="fade-up" className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-gray-300 to-gray-400 bg-clip-text text-transparent">
              Technical Skills
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-gray-500 via-gray-600 to-gray-400 rounded-full" />
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper variant="blur-fade">
            <SkillsSection categories={skillCategories} />
          </ScrollAnimationWrapper>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <ScrollAnimationWrapper variant="fade-up" className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-gray-500 to-gray-400 rounded-full" />
        </ScrollAnimationWrapper>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <ScrollAnimationWrapper key={idx} variant="fade-up" delay={idx * 0.1}>
              <ProjectCard {...project} />
            </ScrollAnimationWrapper>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <ScrollAnimationWrapper variant="blur-fade">
          <div className="rounded-lg border border-gray-600/40 bg-slate-900/80 backdrop-blur-sm p-12 text-center hover:border-gray-500/60 transition-all">
            <ScrollAnimationWrapper variant="fade-up" className="mb-4">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Ready to collaborate?
              </h2>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper variant="fade-up" delay={0.1} className="mb-8">
              <p className="text-slate-300 text-lg max-w-2xl mx-auto">
                I'm always interested in discussing new projects and opportunities.
                Let's connect and create something amazing together.
              </p>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper variant="fade-up" delay={0.2}>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="mailto:shivamkashyap0204@gmail.com">
                  <Button
                    variant="outline"
                    className="border-gray-600/60 text-gray-200 hover:bg-gray-800/60 px-8 py-6 text-base rounded-lg flex items-center gap-2 bg-transparent"
                  >
                    <Mail size={20} />
                    Send Me an Email
                  </Button>
                </a>
                <a href="https://wa.me/8447892334" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    className="border-gray-600/60 text-gray-200 hover:bg-gray-800/60 px-8 py-6 text-base rounded-lg flex items-center gap-2 bg-transparent"
                  >
                    <MessageCircle size={20} />
                    Chat on WhatsApp
                  </Button>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    className="border-gray-600/60 text-gray-200 hover:bg-gray-800/60 px-8 py-6 text-base rounded-lg flex items-center gap-2 bg-transparent"
                  >
                    <Linkedin size={20} />
                    Connect on LinkedIn
                  </Button>
                </a>
              </div>
            </ScrollAnimationWrapper>
          </div>
        </ScrollAnimationWrapper>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-12 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-slate-400 text-sm">
              <p>© 2024 Shivam Kashyap. All rights reserved.</p>
            </div>
            <div className="flex gap-6">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-gray-300 transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-gray-300 transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="mailto:shivamkashyap0204@gmail.com"
                className="text-slate-400 hover:text-gray-300 transition-colors"
              >
                Email
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-gray-300 transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
