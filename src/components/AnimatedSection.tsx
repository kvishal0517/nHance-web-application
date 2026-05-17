import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  animationType?: 'fade-up' | 'fade-in' | 'scale' | 'blur';
}

export function AnimatedSection({ 
  children, 
  className = '', 
  delay = 0,
  animationType = 'fade-up'
}: AnimatedSectionProps) {
  const { ref, isVisible } = useScrollAnimation(0.1);

  const getAnimationStyles = () => {
    if (!isVisible) {
      switch (animationType) {
        case 'fade-up': return 'opacity-0 translate-y-12';
        case 'fade-in': return 'opacity-0';
        case 'scale': return 'opacity-0 scale-95';
        case 'blur': return 'opacity-0 blur-xl';
        default: return 'opacity-0 translate-y-8';
      }
    }
    return 'opacity-100 translate-y-0 scale-100 blur-0';
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-[1200ms] cubic-bezier(0.16, 1, 0.3, 1) ${getAnimationStyles()} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
