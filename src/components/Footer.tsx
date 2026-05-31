import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';
import logo from '../assets/logo.png';

export function Footer() {
  return (
    <footer className="bg-apple-gray text-apple-black border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-24">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <img src={logo} alt="ELEVEN" className="h-8 w-auto object-contain" />
              <span className="text-xl font-bold tracking-[0.2em] text-apple-black uppercase group-hover:opacity-80 transition-opacity">
                ELEVEN
              </span>
            </Link>
            <p className="text-[13px] text-apple-darkGray leading-relaxed font-medium">
              Precision digital ecosystems for the world's most demanding professionals.
            </p>
          </div>

          <div>
            <h4 className="text-[11px] font-bold text-apple-black uppercase tracking-wider mb-6">Services</h4>
            <ul className="space-y-4 text-[13px] text-apple-darkGray font-medium">
              <li><Link to="/services" className="hover:text-apple-black transition-colors">Websites</Link></li>
              <li><Link to="/services" className="hover:text-apple-black transition-colors">Portfolios</Link></li>
              <li><Link to="/services" className="hover:text-apple-black transition-colors">Apps</Link></li>
              <li><Link to="/services" className="hover:text-apple-black transition-colors">AI Agents</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-bold text-apple-black uppercase tracking-wider mb-6">Explore</h4>
            <ul className="space-y-4 text-[13px] text-apple-darkGray font-medium">
              <li><Link to="/portfolio" className="hover:text-apple-black transition-colors">Industries</Link></li>
              <li><Link to="/about" className="hover:text-apple-black transition-colors">About</Link></li>
              <li><Link to="/contact" className="hover:text-apple-black transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-bold text-apple-black uppercase tracking-wider mb-6">Contact</h4>
            <ul className="space-y-4 text-[13px] text-apple-darkGray font-medium">
              <li className="flex items-center gap-2 group cursor-pointer hover:text-apple-black transition-colors">
                <Mail size={14} />
                hello@eleven.digital
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} />
                +91 98765 43210
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5" />
                Bangalore, India
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex gap-8 text-[11px] text-apple-darkGray font-medium">
            <p>&copy; {new Date().getFullYear()} ELEVEN Digital. All rights reserved.</p>
            <Link to="/" className="hover:underline">Privacy Policy</Link>
            <Link to="/" className="hover:underline">Terms of Service</Link>
          </div>
          <p className="text-[11px] text-slate-400">
            Crafted for the future.
          </p>
        </div>
      </div>
    </footer>
  );
}
