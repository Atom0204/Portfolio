import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  highlights: string[];
  technologies: string[];
  links?: {
    github?: string;
    demo?: string;
  };
  achievement?: string;
}

export function ProjectCard({
  title,
  description,
  highlights,
  technologies,
  links,
  achievement,
}: ProjectCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg border border-slate-700/60 bg-slate-800/20 backdrop-blur-md p-6 hover:border-gray-500/60 hover:bg-slate-800/40 transition-all duration-300 hover:shadow-lg hover:shadow-gray-500/15">
      {/* Gradient background on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-500/0 to-gray-400/0 group-hover:from-gray-500/8 group-hover:to-gray-400/8 transition-all duration-300" />

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gray-300 transition-colors">
              {title}
            </h3>
            {achievement && (
              <div className="text-sm text-gray-300 font-semibold mb-2">
                🏆 {achievement}
              </div>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-slate-300 text-sm mb-4 leading-relaxed">
          {description}
        </p>

        {/* Highlights */}
        <div className="space-y-2 mb-4">
          {highlights.map((highlight, idx) => (
            <div
              key={idx}
              className="flex items-start gap-2 text-sm text-slate-200"
            >
              <span className="text-gray-400 mt-1 flex-shrink-0">→</span>
              <span>{highlight}</span>
            </div>
          ))}
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="bg-gray-700/40 text-gray-300 border border-gray-600/40 hover:bg-gray-700/60"
            >
              {tech}
            </Badge>
          ))}
        </div>

        {/* Links */}
        {links && (
          <div className="flex gap-3">
            {links.github && (
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-gray-200 transition-colors"
              >
                <Github size={16} />
                <span>GitHub</span>
              </a>
            )}
            {links.demo && (
              <a
                href={links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-gray-200 transition-colors"
              >
                <ExternalLink size={16} />
                <span>Demo</span>
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
