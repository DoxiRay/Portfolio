import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
} from "lucide-react";

export default function Contact() {
  return (
    <footer
      id="contact"
      className="bg-gradient-to-r from-pink-100 to-purple-100 px-6 py-12 mt-16"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Left section */}
        <div>
          <h3 className="text-2xl font-bold text-pink-600">
            Rasamimanana Eudoxie
          </h3>
          <p className="text-gray-600 mt-2">
            Computer Science student, passionate about design ✨
          </p>
        </div>

        {/* Contact section */}
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

      </div>

      {/* Bottom line */}
      <div className="border-t border-pink-200 mt-8 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Eudoxie • All rights reserved
      </div>
    </footer>
  );
}
