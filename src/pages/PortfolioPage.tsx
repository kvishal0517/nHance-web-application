import { useState } from 'react';
import { CATEGORIES } from '../types';
import { ProjectCard } from '../components/ProjectCard';
import { AnimatedSection } from '../components/AnimatedSection';

export function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0].id);

  const activeCat = CATEGORIES.find((c) => c.id === activeCategory) || CATEGORIES[0];

  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection>
          <div className="text-center mb-10">
            <p className="text-sm font-semibold text-brand-600 uppercase tracking-wider mb-3">Portfolio</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-4">
              Explore Mock Projects
            </h1>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Browse fully designed mock projects for your industry. Each one shows what your digital presence could look like \u2014 from layout to AI automation.
            </p>
          </div>
        </AnimatedSection>

        {/* Category Tabs */}
        <div className="mb-10">
          <div className="flex overflow-x-auto gap-2 pb-2 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap sm:justify-center">
            {CATEGORIES.map((cat) => {
              const isActive = cat.id === activeCategory;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                    isActive
                      ? 'bg-brand-600 text-white shadow-brand'
                      : 'bg-white text-slate-500 hover:text-slate-700 hover:bg-slate-50 border border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <cat.icon size={16} />
                  {cat.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Category Info */}
        <AnimatedSection key={activeCategory}>
          <div className="mb-8 p-6 rounded-2xl bg-slate-50 border border-slate-100">
            <div className="flex items-center gap-3 mb-2">
              <activeCat.icon size={24} className="text-brand-600" />
              <h2 className="text-xl font-semibold text-slate-900">{activeCat.name}</h2>
            </div>
            <p className="text-sm text-slate-500">{activeCat.tagline}</p>
          </div>

          {/* Project Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {activeCat.projects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        </AnimatedSection>

        {/* All Categories Grid */}
        <AnimatedSection delay={200}>
          <div className="mt-16 pt-10 border-t border-slate-100">
            <h3 className="text-lg font-semibold text-slate-900 mb-6 text-center">All Categories at a Glance</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {CATEGORIES.filter((c) => c.id !== activeCategory).map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveCategory(cat.id);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-slate-100 shadow-soft hover:shadow-medium hover:border-brand-200 transition-all duration-300 text-left group"
                >
                  <cat.icon size={20} className="text-slate-300 group-hover:text-brand-500 transition-colors" />
                  <div>
                    <div className="text-sm font-medium text-slate-700 group-hover:text-slate-900 transition-colors">
                      {cat.name}
                    </div>
                    <div className="text-xs text-slate-400">
                      {cat.projects.length} project{cat.projects.length > 1 ? 's' : ''}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
