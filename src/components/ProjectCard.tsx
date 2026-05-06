import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import type { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const navigate = useNavigate();

  const typeColors: Record<string, string> = {
    website: 'bg-blue-50 text-blue-700 border-blue-100',
    portfolio: 'bg-emerald-50 text-emerald-700 border-emerald-100',
    'ai-agent': 'bg-brand-50 text-brand-700 border-brand-100',
    app: 'bg-amber-50 text-amber-700 border-amber-100',
  };

  return (
    <div
      onClick={() => navigate(project.route)}
      className="group card-base card-hover cursor-pointer"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div
        className="h-44 relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${project.colorFrom}, ${project.colorTo})`,
        }}
      >
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background: `radial-gradient(circle at 70% 30%, ${project.accentColor}40, transparent 60%)`,
          }}
        />
        <div className="absolute bottom-3 left-3">
          <span className={`text-xs px-2.5 py-1 rounded-lg border font-medium ${typeColors[project.type]}`}>
            {project.badge}
          </span>
        </div>
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-200 translate-x-1 group-hover:translate-x-0">
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center"
            style={{ backgroundColor: `${project.accentColor}20` }}
          >
            <ArrowRight size={14} style={{ color: project.accentColor }} />
          </div>
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-semibold text-slate-900 mb-1.5 group-hover:text-brand-600 transition-colors">
          {project.name}
        </h3>
        <p className="text-sm text-slate-500 leading-relaxed">{project.description}</p>
      </div>
    </div>
  );
}
