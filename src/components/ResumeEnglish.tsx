import { Briefcase, Code, Mail, MapPin, Phone, Linkedin, Github, Award, Target } from "lucide-react";

export function ResumeEnglish() {
  return (
    <>
      {/* Header */}
      <div className="mb-8 border-b-4 border-primary pb-6">
        <h1 className="mb-2 text-5xl font-bold text-primary">Hatem Mohamed</h1>
        <p className="mb-4 text-2xl font-semibold text-accent">Full Stack Developer | Computer Engineer</p>
        <div className="grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-primary" />
            <span>Egypt</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-primary" />
            <span>hatem_mohamed_elsheref@yahoo.com</span>
          </div>
          <div className="flex items-center gap-2">
            <Linkedin className="h-4 w-4 text-primary" />
            <span>linkedin.com/in/hatem-elsheref</span>
          </div>
          <div className="flex items-center gap-2">
            <Github className="h-4 w-4 text-primary" />
            <span>github.com/hatem-elsheref</span>
          </div>
        </div>
      </div>

      {/* Professional Summary */}
      <section className="mb-8">
        <div className="mb-4 flex items-center gap-3 border-b-2 border-primary pb-2">
          <Target className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-bold text-primary">Professional Summary</h2>
        </div>
        <p className="leading-relaxed text-muted-foreground">
          Experienced Full Stack Developer and Computer Engineer with extensive expertise in software
          architecture and backend systems. Specialized in Laravel, Node.js, and Microservices architectures
          with proven ability to build scalable, high-performance applications. Passionate about clean code,
          SOLID principles, and performance optimization. Demonstrated track record in developing real-time applications,
          API integrations, push notifications, and system automation solutions.
        </p>
      </section>

      {/* Technical Skills */}
      <section className="mb-8">
        <div className="mb-4 flex items-center gap-3 border-b-2 border-primary pb-2">
          <Code className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-bold text-primary">Technical Skills</h2>
        </div>
        <div className="space-y-3">
          <div className="rounded-lg bg-primary/5 p-3">
            <h3 className="mb-2 font-semibold text-primary">Languages:</h3>
            <p className="text-muted-foreground">PHP, JavaScript, TypeScript, HTML5, CSS3, SQL</p>
          </div>
          <div className="rounded-lg bg-accent/5 p-3">
            <h3 className="mb-2 font-semibold text-accent">Backend Frameworks:</h3>
            <p className="text-muted-foreground">Laravel, Lumen, Node.js, Express.js, Fastify</p>
          </div>
          <div className="rounded-lg bg-primary/5 p-3">
            <h3 className="mb-2 font-semibold text-primary">Frontend Frameworks:</h3>
            <p className="text-muted-foreground">Vue.js, React, Bootstrap, Tailwind CSS, jQuery</p>
          </div>
          <div className="rounded-lg bg-accent/5 p-3">
            <h3 className="mb-2 font-semibold text-accent">Databases:</h3>
            <p className="text-muted-foreground">MySQL, PostgreSQL, MongoDB, Redis, SQLite</p>
          </div>
          <div className="rounded-lg bg-primary/5 p-3">
            <h3 className="mb-2 font-semibold text-primary">Cloud & DevOps:</h3>
            <p className="text-muted-foreground">AWS (S3, SES, SNS), Docker, GitHub Actions, Nginx, Apache, Linux/Ubuntu</p>
          </div>
          <div className="rounded-lg bg-accent/5 p-3">
            <h3 className="mb-2 font-semibold text-accent">Architecture & Concepts:</h3>
            <p className="text-muted-foreground">
              Microservices, MVC, SOLID Principles, Design Patterns, OOP, RESTful APIs, GraphQL, WebSockets, Queue Systems, Message Brokers
            </p>
          </div>
        </div>
      </section>

      {/* Experience & Projects */}
      <section className="mb-8">
        <div className="mb-4 flex items-center gap-3 border-b-2 border-primary pb-2">
          <Briefcase className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-bold text-primary">Featured Projects & Experience</h2>
        </div>
        <div className="space-y-6">
          <div className="rounded-lg border-l-4 border-primary bg-primary/5 p-4">
            <h3 className="mb-2 text-lg font-bold text-primary">Smart Chat & Ticketing System</h3>
            <p className="mb-3 text-sm italic text-muted-foreground">
              Real-time communication platform with AI-powered features
            </p>
            <ul className="mb-3 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>Built Laravel-based chat widget with multi-admin support and role-based access control</li>
              <li>Implemented AI-powered auto-reply knowledge base for common customer queries</li>
              <li>Integrated Redis and Laravel Echo for real-time bidirectional communication</li>
              <li>Developed comprehensive analytics dashboard for monitoring chat metrics</li>
            </ul>
            <p className="text-xs font-semibold text-primary">
              Tech Stack: Laravel • jQuery • Redis • Laravel Echo • WebSockets • MySQL • AI Integration
            </p>
          </div>

          <div className="rounded-lg border-l-4 border-accent bg-accent/5 p-4">
            <h3 className="mb-2 text-lg font-bold text-accent">Logistics Integration Service</h3>
            <p className="mb-3 text-sm italic text-muted-foreground">
              High-performance webhook processing system for e-commerce platforms
            </p>
            <ul className="mb-3 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>Designed scalable system to receive, validate, and process webhooks from multiple sales channels</li>
              <li>Implemented queue-based architecture for handling high-volume webhook traffic</li>
              <li>Created comprehensive logging and monitoring system for tracking webhook lifecycle</li>
              <li>Built retry mechanism with exponential backoff for failed webhook processing</li>
            </ul>
            <p className="text-xs font-semibold text-accent">
              Tech Stack: Laravel • Queue System • Redis • MySQL • Webhook Processing • REST APIs
            </p>
          </div>

          <div className="rounded-lg border-l-4 border-primary bg-primary/5 p-4">
            <h3 className="mb-2 text-lg font-bold text-primary">SaaS Marketing Engine</h3>
            <p className="mb-3 text-sm italic text-muted-foreground">
              Enterprise-grade multi-channel marketing automation platform
            </p>
            <ul className="mb-3 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>Developed comprehensive campaign system supporting email, SMS, push, and WhatsApp</li>
              <li>Integrated with FCM, AWS SES, AWS SNS, and Meta Business API for multi-channel delivery</li>
              <li>Built real-time analytics dashboard for campaign performance tracking and ROI measurement</li>
              <li>Implemented A/B testing framework for optimizing campaign effectiveness</li>
            </ul>
            <p className="text-xs font-semibold text-primary">
              Tech Stack: Laravel • Node.js • FCM • Meta API • AWS SES • AWS SNS • RabbitMQ
            </p>
          </div>

          <div className="rounded-lg border-l-4 border-accent bg-accent/5 p-4">
            <h3 className="mb-2 text-lg font-bold text-accent">API Automation Toolkit</h3>
            <p className="mb-3 text-sm italic text-muted-foreground">
              AI-powered API generation and documentation tool
            </p>
            <ul className="mb-3 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>Created intelligent tool that auto-generates CRUD APIs from natural language descriptions</li>
              <li>Implemented automatic route generation, Swagger documentation, and database relationship mapping</li>
              <li>Leveraged OpenAI API for context-aware code generation and optimization</li>
              <li>Built automated test suite generation for API endpoints</li>
            </ul>
            <p className="text-xs font-semibold text-accent">
              Tech Stack: Fastify • Node.js • TypeScript • Redis • OpenAI API • Swagger
            </p>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="mb-8">
        <div className="mb-4 flex items-center gap-3 border-b-2 border-primary pb-2">
          <Award className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-bold text-primary">Education</h2>
        </div>
        <div className="rounded-lg bg-primary/5 p-4">
          <h3 className="mb-1 text-lg font-bold text-primary">Bachelor of Computer Engineering</h3>
          <p className="text-sm text-muted-foreground">
            Comprehensive foundation in software architecture, data structures, algorithms, system design,
            and computer science fundamentals
          </p>
        </div>
      </section>

      {/* Key Strengths */}
      <section>
        <div className="mb-4 flex items-center gap-3 border-b-2 border-primary pb-2">
          <Target className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-bold text-primary">Core Competencies</h2>
        </div>
        <div className="grid gap-2 sm:grid-cols-2">
          <div className="flex items-start gap-2 rounded-lg bg-primary/5 p-3">
            <div className="mt-1 h-2 w-2 rounded-full bg-primary" />
            <p className="text-sm text-muted-foreground">Expert in building scalable microservices architectures</p>
          </div>
          <div className="flex items-start gap-2 rounded-lg bg-accent/5 p-3">
            <div className="mt-1 h-2 w-2 rounded-full bg-accent" />
            <p className="text-sm text-muted-foreground">Strong focus on code quality, testing, and comprehensive documentation</p>
          </div>
          <div className="flex items-start gap-2 rounded-lg bg-primary/5 p-3">
            <div className="mt-1 h-2 w-2 rounded-full bg-primary" />
            <p className="text-sm text-muted-foreground">Extensive experience with real-time applications and WebSocket implementations</p>
          </div>
          <div className="flex items-start gap-2 rounded-lg bg-accent/5 p-3">
            <div className="mt-1 h-2 w-2 rounded-full bg-accent" />
            <p className="text-sm text-muted-foreground">Proficient in RESTful API design, integration, and third-party service connections</p>
          </div>
          <div className="flex items-start gap-2 rounded-lg bg-primary/5 p-3">
            <div className="mt-1 h-2 w-2 rounded-full bg-primary" />
            <p className="text-sm text-muted-foreground">Skilled in performance optimization and database query tuning</p>
          </div>
          <div className="flex items-start gap-2 rounded-lg bg-accent/5 p-3">
            <div className="mt-1 h-2 w-2 rounded-full bg-accent" />
            <p className="text-sm text-muted-foreground">Passionate about automation and building developer productivity tools</p>
          </div>
        </div>
      </section>
    </>
  );
}
