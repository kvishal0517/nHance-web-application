import {
  GraduationCap,
  Stethoscope,
  Music,
  UtensilsCrossed,
  Newspaper,
  Dumbbell,
  Palette,
  Calculator,
  Scale,
  Code,
  type LucideIcon,
} from 'lucide-react';

export interface Category {
  id: string;
  name: string;
  icon: LucideIcon;
  tagline: string;
  projects: Project[];
}

export interface Project {
  id: string;
  name: string;
  type: 'website' | 'portfolio' | 'ai-agent' | 'app';
  badge: string;
  description: string;
  colorFrom: string;
  colorTo: string;
  accentColor: string;
  route: string;
  imageUrl?: string;
}

export interface AgentNode {
  id: string;
  label: string;
  description: string;
  automated: boolean;
  x: number;
  y: number;
}

export interface AgentEdge {
  from: string;
  to: string;
}

export interface AgentWorkflow {
  title: string;
  nodes: AgentNode[];
  edges: AgentEdge[];
}

export const CATEGORIES: Category[] = [
  {
    id: 'academic',
    name: 'Academic Institutes',
    icon: GraduationCap,
    tagline: 'Schools, Colleges, IITs, IIMs, Coaching Centers',
    projects: [
      {
        id: 'pinnacle-coaching',
        name: 'Pinnacle IIT Coaching',
        type: 'website',
        badge: 'Institute Website',
        description: 'Premium coaching center website with course catalog, results wall, and admissions funnel.',
        colorFrom: '#0A1628',
        colorTo: '#1A2744',
        accentColor: '#F5A623',
        route: '/portfolio/academic/pinnacle-coaching',
        imageUrl: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=1200',
      },
      {
        id: 'iim-alumni',
        name: 'IIT Alumni Network',
        type: 'website',
        badge: 'Member Portal',
        description: 'Premium alumni directory and networking platform with events and mentorship.',
        colorFrom: '#2C2C2C',
        colorTo: '#1A1A1A',
        accentColor: '#8B1A1A',
        route: '/portfolio/academic/iim-alumni',
        imageUrl: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1200',
      },

    ],
  },
  {
    id: 'medical',
    name: 'Doctors & Medical',
    icon: Stethoscope,
    tagline: 'Physicians, Specialists, Clinics, Hospitals',
    projects: [
      {
        id: 'dr-priya-cardiologist',
        name: 'Dr. Priya Menon — Cardiologist',
        type: 'portfolio',
        badge: 'Practice Website',
        description: 'Trust-first practice website with appointment booking and patient portal.',
        colorFrom: '#FFFFFF',
        colorTo: '#F0F7F4',
        accentColor: '#2D6A4F',
        route: '/portfolio/medical/dr-priya-cardiologist',
        imageUrl: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200',
      },
      {
        id: 'claritymind-psychiatry',
        name: 'ClarityMind Psychiatry',
        type: 'website',
        badge: 'Clinic Website',
        description: 'Warm, destigmatizing mental health practice site with self-assessment and intake.',
        colorFrom: '#F5F0EB',
        colorTo: '#EDE7E0',
        accentColor: '#A8C5A0',
        route: '/portfolio/medical/claritymind-psychiatry',
        imageUrl: 'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&q=80&w=1200',
      },
    ],
  },
  {
    id: 'music-art',
    name: 'Music & Art',
    icon: Music,
    tagline: 'Musicians, Artists, Performers, Creatives',
    projects: [
      {
        id: 'raagas-resonance',
        name: 'Raagas & Resonance',
        type: 'portfolio',
        badge: 'Vocalist Portfolio',
        description: 'Rich-media portfolio for a Hindustani vocalist with performances and teaching.',
        colorFrom: '#0D1B2A',
        colorTo: '#1B2838',
        accentColor: '#D4AF37',
        route: '/portfolio/music-art/raagas-resonance',
        imageUrl: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&q=80&w=1200',
      },
      {
        id: 'studio-kaavya',
        name: 'Studio Kaavya',
        type: 'portfolio',
        badge: 'Artist Portfolio',
        description: 'Bold visual portfolio for a mural artist with case studies and commission process.',
        colorFrom: '#FAFAFA',
        colorTo: '#F0F0F0',
        accentColor: '#111111',
        route: '/portfolio/music-art/studio-kaavya',
        imageUrl: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=1200',
      },
    ],
  },
  {
    id: 'food',
    name: 'Food & Hospitality',
    icon: UtensilsCrossed,
    tagline: 'Restaurants, Chefs, Catering, Hotels',
    projects: [
      {
        id: 'copper-handi',
        name: 'The Copper Handi',
        type: 'website',
        badge: 'Restaurant Website',
        description: 'Heritage Indian restaurant website with reservations and private dining.',
        colorFrom: '#3D1E0C',
        colorTo: '#2A1508',
        accentColor: '#D4A574',
        route: '/portfolio/food/copper-handi',
        imageUrl: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1200',
      },
      {
        id: 'chef-arvind',
        name: 'Chef Arvind Krishnan',
        type: 'portfolio',
        badge: 'Personal Chef Portfolio',
        description: 'Luxury-minimal portfolio for a private chef with event catering and experiences.',
        colorFrom: '#0A0A0A',
        colorTo: '#151515',
        accentColor: '#2D6A4F',
        route: '/portfolio/food/chef-arvind',
        imageUrl: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=1200',
      },
    ],
  },
  {
    id: 'media',
    name: 'Newspaper & Media',
    icon: Newspaper,
    tagline: 'Journalists, Editors, Publications',
    projects: [
      {
        id: 'siddharth-journalist',
        name: 'Siddharth Rao — Journalist',
        type: 'portfolio',
        badge: 'Journalist Portfolio',
        description: 'Sleek, authoritative portfolio for an investigative journalist with writing archive.',
        colorFrom: '#111111',
        colorTo: '#1A1A1A',
        accentColor: '#DC2626',
        route: '/portfolio/media/siddharth-journalist',
        imageUrl: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=1200',
      },
      {
        id: 'district-lens',
        name: 'The District Lens',
        type: 'website',
        badge: 'News Publication',
        description: 'Clean, reader-funded digital local news publication with membership model.',
        colorFrom: '#FFFFFF',
        colorTo: '#F8FAFC',
        accentColor: '#2563EB',
        route: '/portfolio/media/district-lens',
        imageUrl: 'https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&q=80&w=1200',
      },
    ],
  },
  {
    id: 'fitness',
    name: 'Fitness & Wellness',
    icon: Dumbbell,
    tagline: 'Trainers, Studios, Retreats, Coaches',
    projects: [
      {
        id: 'ironbound-training',
        name: 'Ironbound Training',
        type: 'website',
        badge: 'Trainer Website',
        description: 'High-energy personal trainer site with transformation results and programs.',
        colorFrom: '#000000',
        colorTo: '#0A0A0A',
        accentColor: '#AAFF00',
        route: '/portfolio/fitness/ironbound-training',
        imageUrl: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=1200',
      },
      {
        id: 'sattvic-space',
        name: 'Sattvic Space',
        type: 'website',
        badge: 'Yoga Studio Website',
        description: 'Serene yoga studio and retreat site with class schedules and booking.',
        colorFrom: '#E8D5B7',
        colorTo: '#DCC9A8',
        accentColor: '#1A3C34',
        route: '/portfolio/fitness/sattvic-space',
        imageUrl: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1200',
      },
    ],
  },
  {
    id: 'creatives',
    name: 'Creatives & Designers',
    icon: Palette,
    tagline: 'Designers, Agencies, Brand Strategists',
    projects: [
      {
        id: 'aanya-brand-designer',
        name: 'Aanya Verma — Brand Identity',
        type: 'portfolio',
        badge: 'Design Portfolio',
        description: 'Award-caliber design portfolio with case studies and motion design work.',
        colorFrom: '#FFFFFF',
        colorTo: '#F5F5F5',
        accentColor: '#111111',
        route: '/portfolio/creatives/aanya-brand-designer',
        imageUrl: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=1200',
      },
      {
        id: 'wunderkind-studio',
        name: 'Wunderkind Studio',
        type: 'website',
        badge: 'Agency Website',
        description: 'Boutique design studio site positioning the team as strategic partners.',
        colorFrom: '#1A1A1A',
        colorTo: '#111111',
        accentColor: '#C75B39',
        route: '/portfolio/creatives/wunderkind-studio',
        imageUrl: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1200',
      },
    ],
  },
  {
    id: 'finance',
    name: 'Finance & Accounting',
    icon: Calculator,
    tagline: 'CAs, Financial Advisors, Wealth Managers',
    projects: [
      {
        id: 'cornerstone-wealth',
        name: 'Cornerstone Wealth Advisory',
        type: 'website',
        badge: 'Advisory Website',
        description: 'Trust-building financial planner site with calculators and lead magnets.',
        colorFrom: '#0B2545',
        colorTo: '#13315D',
        accentColor: '#D4AF37',
        route: '/portfolio/finance/cornerstone-wealth',
        imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
      },
      {
        id: 'vivek-ca-firm',
        name: 'Vivek & Associates — CA Firm',
        type: 'website',
        badge: 'CA Firm Website',
        description: 'Professional CA firm site with compliance deadlines and resource library.',
        colorFrom: '#1E4D8C',
        colorTo: '#163A6A',
        accentColor: '#F0F4F8',
        route: '/portfolio/finance/vivek-ca-firm',
        imageUrl: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1200',
      },
    ],
  },
  {
    id: 'legal',
    name: 'Legal Advisors',
    icon: Scale,
    tagline: 'Law Firms, Advocates, Mediators',
    projects: [
      {
        id: 'mehra-nair-law',
        name: 'Mehra & Nair — Corporate Law',
        type: 'website',
        badge: 'Law Firm Website',
        description: 'Modern law firm site for startups with fixed-fee packages and template library.',
        colorFrom: '#1A1A2E',
        colorTo: '#16213E',
        accentColor: '#4361EE',
        route: '/portfolio/legal/mehra-nair-law',
        imageUrl: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1200',
      },
      {
        id: 'lakshmi-family-law',
        name: 'Adv. Lakshmi Pillai — Family Law',
        type: 'portfolio',
        badge: 'Practice Portfolio',
        description: 'Compassionate family law and mediation site with FAQ and process explainer.',
        colorFrom: '#F0F9F8',
        colorTo: '#E6F2F0',
        accentColor: '#2A9D8F',
        route: '/portfolio/legal/lakshmi-family-law',
        imageUrl: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=1200',
      },
    ],
  },
  {
    id: 'tech',
    name: 'Tech Professionals',
    icon: Code,
    tagline: 'Engineers, CTOs, SaaS Founders',
    projects: [
      {
        id: 'vikram-staff-engineer',
        name: 'Vikram Nair — Staff Engineer',
        type: 'portfolio',
        badge: 'Engineering Portfolio',
        description: 'Dark-mode engineering portfolio with case studies and open source contributions.',
        colorFrom: '#0D1117',
        colorTo: '#161B22',
        accentColor: '#3FB950',
        route: '/portfolio/tech/vikram-staff-engineer',
        imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200',
      },
      {
        id: 'buildfast-cto',
        name: 'BuildFast — SaaS CTO Portfolio',
        type: 'portfolio',
        badge: 'Product Portfolio',
        description: 'Product portfolio for a founder/CTO with building-in-public and hiring page.',
        colorFrom: '#FFFFFF',
        colorTo: '#F8F9FA',
        accentColor: '#7B2FBE',
        route: '/portfolio/tech/buildfast-cto',
        imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1200',
      },
    ],
  },
];
