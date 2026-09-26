import { Link } from "react-router-dom";
import logoWhite from "../assets/logos/white-logo-300x94.png";

export default function Footer() {
  return (
    <footer className="bg-primary-deep text-white/60 pt-16 pb-8">
      <div className="wrap">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          <div className="col-span-2 md:col-span-1">
            <img src={logoWhite} alt="D2C Ecommerce" className="h-6 mb-4" />
            <p className="text-sm leading-relaxed max-w-[32ch]">
              India's 1st new-age, technology-based retail chain for fast-moving
              consumer goods — aspirational products at affordable prices.
            </p>
          </div>
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/about" className="hover:text-white">About Us</Link></li>
              <li><Link to="/brands" className="hover:text-white">Brands</Link></li>
              <li><Link to="/franchise" className="hover:text-white">Franchise</Link></li>
              <li><Link to="/careers" className="hover:text-white">Careers</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-4">Policy</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/policy/privacy" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link to="/policy/terms" className="hover:text-white">Terms & Conditions</Link></li>
              <li><Link to="/policy/shipping" className="hover:text-white">Shipping Policy</Link></li>
              <li><Link to="/policy/refund" className="hover:text-white">Refund Policy</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-4">Contact</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="tel:+919821721100" className="hover:text-white">+91 98217 21100</a></li>
              <li><a href="mailto:care@d2cecommerce.in" className="hover:text-white">care@d2cecommerce.in</a></li>
              <li>Sector 62, Noida, UP</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-hairline-dark pt-6 flex flex-wrap justify-between gap-3 text-xs">
          <span>© 2026 D2C Ecommerce India Pvt. Ltd. All rights reserved.</span>
          <span>Aspirational Products At Affordable Prices</span>
        </div>
      </div>
    </footer>
  );
}
