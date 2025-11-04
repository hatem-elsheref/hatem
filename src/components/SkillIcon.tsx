import { 
  Code2, Database, Cloud, Server, GitBranch, Boxes, 
  Workflow, Globe, Lock, Zap, FileJson, Terminal,
  Container, Mail, MessageSquare, Package, Settings,
  Cpu, HardDrive, Activity, Shield, Network
} from "lucide-react";

const skillIcons: Record<string, any> = {
  // Languages
  "PHP": Code2,
  "JavaScript": FileJson,
  "TypeScript": FileJson,
  "HTML5": Globe,
  "CSS3": Globe,
  "SQL": Database,
  
  // Frameworks
  "Laravel": Boxes,
  "Lumen": Boxes,
  "Node.js": Terminal,
  "Express.js": Terminal,
  "Vue.js": Boxes,
  "React": Boxes,
  "Bootstrap": Globe,
  "Tailwind CSS": Globe,
  
  // Architecture
  "MVC": Workflow,
  "Microservices": Network,
  "SOLID Principles": Code2,
  "Design Patterns": Boxes,
  "OOP": Code2,
  "Data Structures & Algorithms": Cpu,
  
  // APIs
  "RESTful API": Globe,
  "WebSockets": Activity,
  "GraphQL": Network,
  "Swagger": FileJson,
  "Postman": Globe,
  
  // Databases
  "MySQL": Database,
  "SQLite": Database,
  "MongoDB": Database,
  "Redis": HardDrive,
  "PostgreSQL": Database,
  
  // Cloud
  "AWS S3": Cloud,
  "AWS SES": Mail,
  "AWS SNS": MessageSquare,
  "FCM": MessageSquare,
  "RabbitMQ": MessageSquare,
  
  // DevOps
  "Ubuntu": Terminal,
  "Linux": Terminal,
  "Nginx": Server,
  "Apache": Server,
  "Docker": Container,
  "GitHub Actions": GitBranch,
  "CI/CD": Workflow,
  
  // Tools
  "VS Code": Code2,
  "Sublime Text": Code2,
  "Git": GitBranch,
  "GitHub": GitBranch,
  "Composer": Package,
  "npm": Package,
  "Webpack": Settings,
  "Vite": Zap,
};

interface SkillIconProps {
  name: string;
  className?: string;
}

export function SkillIcon({ name, className = "h-5 w-5" }: SkillIconProps) {
  const Icon = skillIcons[name] || Code2;
  return <Icon className={className} />;
}
