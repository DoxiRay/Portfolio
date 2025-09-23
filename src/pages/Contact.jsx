import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

export default function Contact() {
  return (
    <footer
      id="contact"
      className="bg-gradient-to-r from-pink-100 to-purple-100 px-6 py-12 mt-16"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Section gauche */}
        <div>
          <h3 className="text-2xl font-bold text-pink-600">
            Rasamimanana Eudoxie
          </h3>
          <p className="text-gray-600 mt-2">
            Étudiante en informatique, passionnée par le design ✨
          </p>
        </div>

        {/* Section contact */}
        <div>
          <h4 className="text-lg font-semibold text-purple-600 mb-4">
            Contact
          </h4>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-center justify-center md:justify-start gap-2">
              <Mail className="w-5 h-5 text-pink-500" />{" "}
              eudoxie.rasamimanana@esti.mg
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <Phone className="w-5 h-5 text-pink-500" /> 038 07 070 95
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <MapPin className="w-5 h-5 text-pink-500" /> Madagascar
            </li>
          </ul>
        </div>

        {/* Section réseaux sociaux */}
        <div>
          <h4 className="text-lg font-semibold text-purple-600 mb-4">
            Suivez-moi
          </h4>
          <div className="flex justify-center md:justify-start gap-4">
            <a
              href="#"
              className="text-pink-500 hover:text-pink-700 transition"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-pink-500 hover:text-pink-700 transition"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-pink-500 hover:text-pink-700 transition"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Ligne du bas */}
      <div className="border-t border-pink-200 mt-8 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Eudoxie • Tous droits réservés
      </div>
    </footer>
  );
}
