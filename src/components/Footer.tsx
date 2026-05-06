import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg leading-none" style={{ fontFamily: 'Georgia, serif' }}>n</span>
              </div>
              <span className="text-xl font-bold text-white">
                nH<span className="text-brand-400">&auml;</span>nce
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              Tailored digital solutions for professionals. Websites, portfolios, apps, and AI agents crafted for your industry.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li><Link to="/services" className="hover:text-white transition-colors">Custom Websites</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Professional Portfolios</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Android Apps</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">AI Agents</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/portfolio" className="hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li className="flex items-center gap-2.5">
                <Mail size={15} className="text-brand-400" />
                hello@nhanse.digital
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={15} className="text-brand-400" />
                +91 98765 43210
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={15} className="text-brand-400 mt-0.5" />
                Bangalore, India
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} nH&auml;nce Digital. All rights reserved.
          </p>
          <p className="text-xs text-slate-600">
            Crafted with precision for professionals who demand more.
          </p>
        </div>
      </div>
    </footer>
  );
}
