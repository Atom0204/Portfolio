import { Badge } from '@/components/ui/badge';
import { Code2, Cpu, Globe, Database, Zap, Cpu as HardwareIcon } from 'lucide-react';

interface SkillCategory {
  title: string;
  skills: string[];
}

interface SkillsSectionProps {
  categories: SkillCategory[];
}

const categoryIcons: Record<string, React.ReactNode> = {
  'Programming Languages': <Code2 size={20} />,
  'ML/AI Frameworks': <Cpu size={20} />,
  'Web Technologies': <Globe size={20} />,
  'Databases & Cloud': <Database size={20} />,
  'Specializations': <Zap size={20} />,
  'Hardware & IoT': <HardwareIcon size={20} />,
};

export function SkillsSection({ categories }: SkillsSectionProps) {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {categories.map((category, idx) => (
        <div
          key={category.title}
          className="group relative rounded-lg border border-slate-700/60 bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-md p-6 hover:border-gray-600/80 hover:bg-gradient-to-br hover:from-slate-800/60 hover:to-slate-800/40 transition-all duration-300 hover:shadow-lg hover:shadow-gray-600/20 transform hover:scale-105 hover:-translate-y-1 animate-in fade-in slide-in-from-bottom-4 duration-500"
          style={{ animationDelay: `${idx * 100}ms` }}
        >
          {/* Animated gradient background on hover */}
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-gray-600/0 via-gray-600/0 to-gray-600/0 group-hover:from-gray-500/5 group-hover:via-gray-500/10 group-hover:to-gray-500/5 transition-all duration-300 pointer-events-none" />
          
          {/* Content wrapper */}
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="text-gray-400 group-hover:text-gray-200 transition-colors duration-300 transform group-hover:scale-110 group-hover:rotate-12">
                {categoryIcons[category.title]}
              </div>
              <h3 className="text-lg font-bold text-gray-300 group-hover:text-gray-100 transition-colors duration-300">
                {category.title}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIdx) => (
                <Badge
                  key={skill}
                  variant="outline"
                  className="bg-slate-700/40 text-slate-200 border-slate-600/60 hover:bg-gray-600/30 hover:border-gray-500/80 hover:text-gray-100 transition-all duration-300 backdrop-blur-sm transform hover:scale-110 animate-in fade-in slide-in-from-left-2 duration-500"
                  style={{ animationDelay: `${idx * 100 + skillIdx * 50}ms` }}
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
