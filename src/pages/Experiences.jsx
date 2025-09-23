import React from "react";

function Experiences() {
  const experiences = [
    {
      poste: "Stagiaire en Développement Web",
      entreprise: "Cap's Digit",
      periode: "Juillet 2024 - Septembre 2024",
      description:
        "Développement d’applications Symfony et React, intégration API et gestion base de données.",
    },
    {
      poste: "Assistante IT",
      entreprise: "École ESTI",
      periode: "Mars 2023 - Juin 2023",
      description:
        "Support technique et maintenance, aide aux étudiants pour l’utilisation des outils numériques.",
    },
    {
      poste: "Projet Personnel",
      entreprise: "Book'Tiako",
      periode: "Depuis 2024",
      description:
        "Application pour digitaliser et promouvoir les livres malgaches.",
    },
  ];

  return (
    <div id="experiences" className="min-h-screen px-4 pt-20 bg-pink-50">
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
            Expériences
          </span>
        </h2>

        <div className="relative border-l-4 border-pink-400 ml-6">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-12 ml-6 relative">
              {/* Point de la timeline */}
              <span className="absolute -left-3 top-1 w-6 h-6 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 border-4 border-pink-100 shadow-lg"></span>

              {/* Carte expérience */}
              <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition duration-300">
                <h3 className="text-2xl font-semibold text-gray-800">
                  {exp.poste}
                </h3>
                <p className="text-pink-500 font-medium">
                  {exp.entreprise} • {exp.periode}
                </p>
                <p className="mt-2 text-gray-600">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experiences;
