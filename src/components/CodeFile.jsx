import React, { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-markup";
import "prismjs/themes/prism-tomorrow.css";
import "../styles/codeFile.css";
export default function CodeFile() {
  const htmlCode = `
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>Présentation</title>
</head>
<body>
  <h1>Presentation 🌸</h1>
  <p>A student in third year at ESTI Antanimena</p>
  <p><i>I love creating modern and accessible digital experiences.</i></p>
  <p>
    ✨ I create beautiful digital experiences that blend creativity with functionality.  
    Welcome to my colorful corner of the internet! 💖
  </p>
</body>
</html>
  `;

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div className="codefile-container">
      <div className="codefile-header">
        <span className="codefile-circle red"></span>
        <span className="codefile-circle yellow"></span>
        <span className="codefile-circle green"></span>
        <span className="filename">aboutMe.html</span>
      </div>
      <div className="codefile-body">
        <pre>
          <code
            className="language-markup"
            dangerouslySetInnerHTML={{
              __html: Prism.highlight(
                htmlCode,
                Prism.languages.markup,
                "markup"
              ),
            }}
          />
        </pre>
      </div>
    </div>
  );
}
