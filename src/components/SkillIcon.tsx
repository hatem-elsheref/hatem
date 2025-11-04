// SkillIcon component with colored logo images
import { useState, useEffect } from "react";
import { useTheme } from "@/contexts/ThemeContext";

interface SkillIconProps {
  name: string;
  className?: string;
}

// Map skill names to their logo identifiers for colored logos
const getSkillLogoId = (skillName: string): { devicons: string; skillIcons: string } => {
  const skillMap: Record<string, { devicons: string; skillIcons: string }> = {
    // Languages
    "PHP": { devicons: "php", skillIcons: "php" },
    "JavaScript": { devicons: "javascript", skillIcons: "js" },
    "HTML5": { devicons: "html5", skillIcons: "html" },
    "CSS3": { devicons: "css3", skillIcons: "css" },
    "SQL": { devicons: "mysql", skillIcons: "mysql" },
    
    // Frameworks
    "Laravel": { devicons: "laravel", skillIcons: "laravel" },
    "Lumen": { devicons: "laravel", skillIcons: "laravel" },
    "Node.js": { devicons: "nodejs", skillIcons: "nodejs" },
    "Express.js": { devicons: "express", skillIcons: "express" },
    "Vue.js": { devicons: "vuejs", skillIcons: "vue" },
    "Bootstrap": { devicons: "bootstrap", skillIcons: "bootstrap" },
    "Tailwind CSS": { devicons: "tailwindcss", skillIcons: "tailwind" },
    
    // Architecture
    "MVC": { devicons: "symfony", skillIcons: "symfony" },
    "Microservices": { devicons: "kubernetes", skillIcons: "kubernetes" },
    "SOLID Principles": { devicons: "codepen", skillIcons: "codepen" },
    "Design Patterns": { devicons: "codepen", skillIcons: "codepen" },
    "OOP": { devicons: "codepen", skillIcons: "codepen" },
    "Data Structures & Algorithms": { devicons: "codepen", skillIcons: "codepen" },
    
    // APIs
    "RESTful API": { devicons: "swagger", skillIcons: "swagger" },
    "WebSockets": { devicons: "socketio", skillIcons: "socketio" },
    "GraphQL": { devicons: "graphql", skillIcons: "graphql" },
    "Swagger": { devicons: "swagger", skillIcons: "swagger" },
    "Postman": { devicons: "postman", skillIcons: "postman" },
    
    // Databases
    "MySQL": { devicons: "mysql", skillIcons: "mysql" },
    "MongoDB": { devicons: "mongodb", skillIcons: "mongodb" },
    "Redis": { devicons: "redis", skillIcons: "redis" },
    "SQLite": { devicons: "sqlite", skillIcons: "sqlite" },
    
    // Cloud
    "AWS S3": { devicons: "amazonwebservices", skillIcons: "s3" },
    "AWS SES": { devicons: "amazonwebservices", skillIcons: "aws" },
    "AWS SNS": { devicons: "amazonwebservices", skillIcons: "aws" },
    "FCM": { devicons: "firebase", skillIcons: "firebase" },
    "RabbitMQ": { devicons: "rabbitmq", skillIcons: "rabbitmq" },
    
    // DevOps
    "Ubuntu": { devicons: "ubuntu", skillIcons: "ubuntu" },
    "Linux": { devicons: "linux", skillIcons: "linux" },
    "Nginx": { devicons: "nginx", skillIcons: "nginx" },
    "Apache": { devicons: "apache", skillIcons: "apache" },
    "Docker": { devicons: "docker", skillIcons: "docker" },
    "GitHub Actions": { devicons: "github", skillIcons: "githubactions" },
    "CI/CD": { devicons: "github", skillIcons: "githubactions" },
    
    // Tools
    "VS Code": { devicons: "vscode", skillIcons: "vscode" },
    "Sublime Text": { devicons: "sublimetext", skillIcons: "sublimetext" },
    "Git": { devicons: "git", skillIcons: "git" },
    "GitHub": { devicons: "github", skillIcons: "github" },
    "Composer": { devicons: "composer", skillIcons: "composer" },
    "npm": { devicons: "npm", skillIcons: "npm" },
  };

  return skillMap[skillName] || { devicons: "codepen", skillIcons: "codepen" };
};

// Get colored logo URL - prioritize DevIcons original (colored) version
const getSkillLogoUrls = (skillName: string, theme: "light" | "dark"): string[] => {
  const iconIds = getSkillLogoId(skillName);
  
  // Prioritize colored logos: DevIcons original (colored) first, then skill-icons.com, then DevIcons plain
  return [
    // Primary: DevIcons CDN - original colored version (most reliable for colored logos)
    `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${iconIds.devicons}/${iconIds.devicons}-original.svg`,
    // Fallback 1: DevIcons CDN - wordmark version (also colored)
    `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${iconIds.devicons}/${iconIds.devicons}-original-wordmark.svg`,
    // Fallback 2: skill-icons.com (colored logos via API)
    `https://skill-icons.com/icons?i=${iconIds.skillIcons}&theme=${theme}`,
    // Fallback 3: DevIcons CDN - plain version (monochrome, but better than nothing)
    `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${iconIds.devicons}/${iconIds.devicons}-plain.svg`,
  ];
};

export function SkillIcon({ name, className = "h-10 w-10" }: SkillIconProps) {
  const { theme } = useTheme();
  const [currentUrlIndex, setCurrentUrlIndex] = useState(0);
  const [imgError, setImgError] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);
  
  const logoUrls = getSkillLogoUrls(name, theme);
  const currentUrl = logoUrls[currentUrlIndex];

  // Try next URL when current one fails
  const handleError = () => {
    if (currentUrlIndex < logoUrls.length - 1) {
      setCurrentUrlIndex(currentUrlIndex + 1);
      setImgError(false);
      setImgLoaded(false);
    } else {
      setImgError(true);
    }
  };

  // Reset when URL changes
  useEffect(() => {
    setImgError(false);
    setImgLoaded(false);
  }, [currentUrlIndex, name]);

  // Fallback component for when all logos fail to load
  if (imgError) {
    return (
      <div 
        className={`${className} flex items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-primary-foreground font-bold text-xs shadow-lg`}
        title={name}
      >
        {name.substring(0, 2).toUpperCase()}
      </div>
    );
  }
  
  return (
    <div className="relative inline-block">
      <img
        src={currentUrl}
        alt={`${name} logo`}
        className={`${className} object-contain drop-shadow-lg transition-all duration-300 ${
          imgLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        onError={handleError}
        onLoad={() => setImgLoaded(true)}
        loading="lazy"
      />
      {!imgLoaded && !imgError && (
        <div 
          className={`${className} absolute inset-0 flex items-center justify-center rounded-xl bg-muted animate-pulse`}
        >
          <div className="h-4 w-4 rounded-full bg-primary/20"></div>
        </div>
      )}
    </div>
  );
}
