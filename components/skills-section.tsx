import { Badge } from '@/components/ui/badge';

interface SkillCategory {
  title: string;
  skills: string[];
}

interface SkillsSectionProps {
  categories: SkillCategory[];
}

export function SkillsSection({ categories }: SkillsSectionProps) {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {categories.map((category) => (
        <div
          key={category.title}
          className="group rounded-lg border border-slate-700/60 bg-slate-800/20 backdrop-blur-md p-6 hover:border-gray-500/60 hover:bg-slate-800/40 transition-all duration-300 hover:shadow-lg hover:shadow-gray-500/10"
        >
          <h3 className="text-lg font-bold text-gray-300 mb-4 group-hover:text-gray-200 transition-colors">
            {category.title}
          </h3>
          <div className="flex flex-wrap gap-2">
            {category.skills.map((skill) => (
              <Badge
                key={skill}
                variant="outline"
                className="bg-slate-700/40 text-slate-200 border-slate-600/60 hover:bg-gray-700/30 hover:border-gray-500/60 hover:text-gray-300 transition-all backdrop-blur-sm"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
