import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <footer
      id="contact"
      className="bg-gradient-to-r from-pink-50 to-purple-50 px-6 py-12 mt-16"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 text-center md:text-left">
        <div>
          <h3 className="text-2xl font-bold text-pink-600 mb-2">
            Rasamimanana Eudoxie
          </h3>
          <p className="text-gray-600">
            Computer Science student, passionate about design ✨
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-purple-600 mb-4">
            Contact
          </h4>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-center justify-center md:justify-start gap-3 hover:text-pink-600 transition-colors cursor-pointer">
              <Mail className="w-5 h-5 text-pink-500" />
              <span>eudoxie.rasamimanana@esti.mg</span>
            </li>
            <li className="flex items-center justify-center md:justify-start gap-3 hover:text-pink-600 transition-colors cursor-pointer">
              <Phone className="w-5 h-5 text-pink-500" />
              <span>038 07 070 95</span>
            </li>
            <li className="flex items-center justify-center md:justify-start gap-3 hover:text-pink-600 transition-colors cursor-pointer">
              <MapPin className="w-5 h-5 text-pink-500" />
              <span>Antananarivo, Madagascar</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-pink-200 mt-8 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Eudoxie • All rights reserved
      </div>
    </footer>
  );
}
