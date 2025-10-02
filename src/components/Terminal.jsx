import React, { useState, useEffect } from "react";
import "../styles/Terminal.css";

export default function Terminal() {
  const [output, setOutput] = useState([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [progress, setProgress] = useState(0);

  const skills = [
    "React",
    "HTML/CSS",
    "Symfony",
    "Tailwind CSS",
    "GitHub",
    "Trello",
    "Figma",
  ];

  useEffect(() => {
    if (currentLine < skills.length) {
      if (progress < 100) {
        const interval = setInterval(() => {
          setProgress((p) => Math.min(p + 5, 100));
        }, 100);
        return () => clearInterval(interval);
      } else {
        setOutput((prev) => [
          ...prev,
          `Downloading skill: ${skills[currentLine]}... █████████ 100%`,
        ]);
        setProgress(0);
        setCurrentLine((line) => line + 1);
      }
    } else if (currentLine === skills.length) {
      setOutput((prev) => [...prev, "All skills successfully installed"]);
      setCurrentLine((line) => line + 1); // pour éviter boucle infinie
    }
  }, [progress, currentLine]);

  return (
    <div className="terminal-container">
      <div className="terminal-header">
        <span className="circle" style={{ backgroundColor: "#ff5f56" }}></span>
        <span className="circle" style={{ backgroundColor: "#ffbd2e" }}></span>
        <span className="circle" style={{ backgroundColor: "#27c93f" }}></span>
      </div>

      <div className="terminal-body">
        <pre
          style={{
            color: "#6403a1",
            fontSize: "clamp(0.75rem, 2vw, 1rem)",
            lineHeight: "1.4",
            wordBreak: "break-word",
          }}
        >
          {output.map((line, index) => (
            <div key={index}>{line}</div>
          ))}
          {currentLine < skills.length && (
            <div>
              skills@eudoxie:~$ Downloading skill: {skills[currentLine]}...{" "}
              {"█".repeat(Math.floor(progress / 10))}
              {" ".repeat(10 - Math.floor(progress / 10))} {progress}%
            </div>
          )}
          <span className="cursor">█</span>
        </pre>
      </div>
    </div>
  );
}
