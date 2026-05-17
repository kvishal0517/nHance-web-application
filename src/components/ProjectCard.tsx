import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import type { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const navigate = useNavigate();
  const [imgError, setImgError] = useState(false);

  return (
    <div
      onClick={() => navigate(project.route)}
      className="group bg-apple-gray rounded-[40px] overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.12)] hover:-translate-y-2 border border-transparent hover:border-slate-100"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="h-80 relative overflow-hidden bg-slate-200">
        {project.imageUrl && !imgError ? (
          <div className="absolute inset-0">
            <img 
              src={project.imageUrl} 
              alt={project.name}
              className="w-full h-full object-cover transition-all duration-[3000ms] ease-out group-hover:scale-110 opacity-100"
              loading="lazy"
              onError={() => setImgError(true)}
            />
            <div 
              className="absolute inset-0 opacity-20 group-hover:opacity-10 transition-opacity duration-700"
              style={{
                background: `linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.4) 100%)`,
              }}
            />
          </div>
        ) : (
          <div
            className="absolute inset-0 transition-transform duration-[2000ms] ease-out group-hover:scale-110"
            style={{
              background: `linear-gradient(135deg, ${project.colorFrom}, ${project.colorTo})`,
            }}
          />
        )}
        
        <div
          className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none"
          style={{
            background: `radial-gradient(circle at 70% 30%, ${project.accentColor}, transparent 70%)`,
          }}
        />
        <div className="absolute top-8 left-8">
          <span className="text-[10px] px-3 py-1.5 rounded-full bg-apple-black/20 backdrop-blur-md text-white font-bold uppercase tracking-[0.15em] border border-white/10">
            {project.badge}
          </span>
        </div>
        <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 scale-75 group-hover:scale-100">
          <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-xl">
            <ArrowRight size={20} className="text-apple-black" />
          </div>
        </div>
      </div>
      <div className="p-10">
        <h3 className="text-2xl font-bold text-apple-black mb-4 group-hover:text-apple-blue transition-colors duration-300 tracking-tight">
          {project.name}
        </h3>
        <p className="text-apple-darkGray font-medium leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity duration-300">
          {project.description}
        </p>
      </div>
    </div>
  );
}
