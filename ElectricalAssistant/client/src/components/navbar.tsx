import { useState } from "react";
import { Menu, X, Zap, Settings } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";
import { LanguageToggle } from "./language-toggle";
import { Link } from "wouter";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white/95 backdrop-blur-lg shadow-lg sticky top-0 z-50 border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-full overflow-hidden shadow-lg">
              <img
                src="data:image/webp;base64,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"
                alt="Aadesh Electric Store"
                className="h-12 w-auto object-contain mr-2"
              />
            </div>
            <div>
              <h1 className="font-poppins font-bold text-xl text-gray-800">
                Aadesh Electric Store
              </h1>
              <p className="text-sm text-gray-600 font-medium">
                Motor Repairing & Electrical Services
              </p>
            </div>
          </div>

          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-gray-700 hover:text-orange-500 transition-colors font-semibold px-3 py-2 rounded-lg hover:bg-orange-50"
            >
              {t("home")}
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-gray-700 hover:text-orange-500 transition-colors font-semibold px-3 py-2 rounded-lg hover:bg-orange-50"
            >
              {t("services")}
            </button>
            <button
              onClick={() => scrollToSection("parts")}
              className="text-gray-700 hover:text-orange-500 transition-colors font-semibold px-3 py-2 rounded-lg hover:bg-orange-50"
            >
              {t("spareParts")}
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all transform hover:scale-105 shadow-lg"
            >
              {t("contact")}
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <LanguageToggle />
            <Link href="/admin/login">
              <button className="hidden md:flex items-center space-x-1 text-gray-500 hover:text-orange-500 transition-colors">
                <Settings className="w-4 h-4" />
                <span className="text-sm">Admin</span>
              </button>
            </Link>
            <button
              className="md:hidden text-dark"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="text-xl" />
              ) : (
                <Menu className="text-xl" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-lg border-t border-gray-200 py-6">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("home")}
                className="text-gray-700 hover:text-orange-500 transition-colors font-semibold text-left px-4 py-3 rounded-lg hover:bg-orange-50"
              >
                {t("home")}
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-gray-700 hover:text-orange-500 transition-colors font-semibold text-left px-4 py-3 rounded-lg hover:bg-orange-50"
              >
                {t("services")}
              </button>
              <button
                onClick={() => scrollToSection("parts")}
                className="text-gray-700 hover:text-orange-500 transition-colors font-semibold text-left px-4 py-3 rounded-lg hover:bg-orange-50"
              >
                {t("spareParts")}
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-lg font-semibold text-left mx-4"
              >
                {t("contact")}
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
