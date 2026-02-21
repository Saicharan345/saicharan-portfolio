import { useState, useEffect } from "react";

function Navbar() {
  const [active, setActive] = useState("home");
  const [dark, setDark] = useState(true);

  // 🔥 DARK / LIGHT TOGGLE LOGIC (FIXED)
  useEffect(() => {
    const root = document.documentElement;

    if (dark) {
      root.classList.remove("light");
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
      root.classList.add("light");
    }
  }, [dark]);

  // 🔥 ACTIVE SECTION DETECTION
  useEffect(() => {
    const sections = ["home", "projects", "skills", "contact"];

    const handleScroll = () => {
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActive(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItem = (id: string, label: string) => (
    <a
      href={`#${id}`}
      className={`transition font-medium ${
        active === id
          ? "text-blue-400"
          : "text-gray-400 dark:text-gray-400 light:text-slate-700"
      } hover:text-blue-400`}
    >
      {label}
    </a>
  );

  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-md bg-white/5 dark:bg-white/5 light:bg-white/70 border-b border-white/10 dark:border-white/10 light:border-slate-200 z-40 transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="font-semibold text-blue-400">
          Saicharan
        </h1>

        {/* Navigation */}
        <div className="hidden md:flex gap-8 items-center">
          {navItem("home", "Home")}
          {navItem("projects", "Projects")}
          {navItem("skills", "Skills")}
          {navItem("contact", "Contact")}

          {/* Toggle Button */}
          <button
            onClick={() => setDark(!dark)}
            className="px-3 py-1 border border-blue-400 rounded-lg text-sm hover:bg-blue-500/10 transition duration-300"
          >
            {dark ? "Light" : "Dark"}
          </button>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;