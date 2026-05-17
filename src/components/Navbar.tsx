import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const links = [
    { to: '/', label: 'Home' },
    { to: '/services', label: 'Services' },
    { to: '/portfolio', label: 'Portfolio' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ];

  const isHome = location.pathname === '/';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || !isHome
          ? 'bg-white/80 backdrop-blur-xl border-b border-slate-200/40 shadow-sm'
          : 'bg-white/50 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-12 lg:h-14">
          <Link to="/" className="flex items-center gap-2 group transition-opacity hover:opacity-80">
            <div className="w-8 h-8 rounded-lg bg-apple-black flex items-center justify-center shadow-sm">
              <span className="text-white font-bold text-base leading-none" style={{ fontFamily: 'Georgia, serif' }}>n</span>
            </div>
            <span className="text-lg font-semibold tracking-tight text-apple-black">
              nH<span className="text-apple-blue">&auml;</span>nce
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-xs font-medium transition-all duration-300 ${
                  location.pathname === link.to
                    ? 'text-apple-black'
                    : 'text-apple-darkGray hover:text-apple-black'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="ml-4 btn-primary !text-[11px] !py-1.5 !px-4 !rounded-full"
            >
              Get Started
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg text-apple-black hover:bg-apple-gray transition-colors"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white h-screen border-t border-slate-100 px-6 py-8 animate-fade-in">
          <div className="flex flex-col gap-6">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-2xl font-semibold transition-colors ${
                  location.pathname === link.to
                    ? 'text-apple-black'
                    : 'text-apple-darkGray hover:text-apple-black'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="mt-4 btn-primary text-lg !py-4 w-full justify-center"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
