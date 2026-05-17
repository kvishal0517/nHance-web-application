import { useSearchParams, Link } from 'react-router-dom';
import { CATEGORIES } from '../types';
import { ProjectCard } from '../components/ProjectCard';
import { AnimatedSection } from '../components/AnimatedSection';
import { CategoryGraphic, MeshGradient } from '../components/VisualAssets';

export function PortfolioPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategoryId = searchParams.get('category') || CATEGORIES[0].id;

  const setActiveCategory = (id: string) => {
    setSearchParams({ category: id }, { replace: true });
  };

  const activeCat = CATEGORIES.find((c) => c.id === activeCategoryId) || CATEGORIES[0];

  return (
    <div className="min-h-screen bg-white pt-24 lg:pt-32 pb-16 relative overflow-hidden">
      <MeshGradient className="opacity-50" />
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <AnimatedSection>
          <div className="text-center mb-16">
            <h1 className="text-5xl sm:text-7xl font-bold text-apple-black tracking-tight mb-6">
              Industries.
            </h1>
            <p className="text-xl text-apple-darkGray max-w-2xl mx-auto font-medium leading-relaxed">
              Explore how we tailor digital solutions for your specific profession. Every detail is crafted for impact.
            </p>
          </div>
        </AnimatedSection>

        {/* Category Tabs - Apple style pill */}
        <div className="mb-16">
          <div className="flex overflow-x-auto gap-3 pb-4 scrollbar-hide -mx-6 px-6 lg:mx-0 lg:px-0 lg:flex-wrap lg:justify-center">
            {CATEGORIES.map((cat) => {
              const isActive = cat.id === activeCategoryId;
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-6 py-2 rounded-full text-[13px] font-semibold whitespace-nowrap transition-all duration-300 ${
                    isActive
                      ? 'bg-apple-black text-white shadow-lg'
                      : 'bg-apple-gray text-apple-darkGray hover:text-apple-black hover:bg-slate-200 border border-transparent'
                  }`}
                >
                  <Icon size={14} />
                  {cat.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Category Info */}
        <AnimatedSection key={activeCategoryId}>
          <div className="mb-12 text-center max-w-3xl mx-auto relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 opacity-20 pointer-events-none">
              <CategoryGraphic categoryId={activeCategoryId} />
            </div>
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-apple-gray mb-6 shadow-sm">
                {(() => {
                  const Icon = activeCat.icon;
                  return <Icon size={24} className="text-apple-black" />;
                })()}
              </div>
              <h2 className="text-3xl font-bold text-apple-black mb-3 tracking-tight">{activeCat.name}</h2>
              <p className="text-lg text-apple-darkGray font-medium">{activeCat.tagline}</p>
            </div>
          </div>

          {/* Project Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            {activeCat.projects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        </AnimatedSection>

        {/* Footer Link / Consultation */}
        <AnimatedSection delay={200}>
          <div className="mt-32 p-12 lg:p-24 rounded-[48px] bg-apple-gray text-center border border-slate-100/50">
            <h3 className="text-3xl font-bold text-apple-black mb-6 tracking-tight">Don't see your industry?</h3>
            <p className="text-lg text-apple-darkGray max-w-xl mx-auto mb-10 font-medium">
              We build custom solutions for every profession. Tell us about your business and we'll show you the possibilities.
            </p>
            <Link
              to="/contact"
              className="btn-primary !px-12 !py-4 text-lg"
            >
              Get in touch
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
