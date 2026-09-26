import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logoWhite from "../assets/logos/white-logo-300x94.png";

const links = [
  { to: "/about", label: "About" },
  { to: "/brands", label: "Brands" },
  { to: "/team", label: "Our Team" },
  { to: "/media", label: "Media" },
  { to: "/franchise", label: "Franchise" },
  { to: "/faq", label: "FAQ" },
  { to: "/careers", label: "Careers" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-primary/85 backdrop-blur-lg border-b border-hairline-dark">
      <div className="wrap flex items-center justify-between py-4">
        <Link to="/">
          <img src={logoWhite} alt="D2C Ecommerce" className="h-6 w-auto" />
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive ? "text-white" : "text-white/65 hover:text-white"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <Link to="/franchise" className="hidden lg:inline-flex btn btn-violet !py-2.5 !px-5 text-sm">
          Become a Partner
        </Link>

        <button
          className="lg:hidden text-white text-2xl"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden border-t border-hairline-dark"
          >
            <div className="wrap flex flex-col py-4 gap-4">
              {links.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="text-white/80 text-sm font-medium"
                >
                  {l.label}
                </NavLink>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
