import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Printer, Download } from "lucide-react";

export default function Resume() {
  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/cv.pdf";
    link.download = "Hatem_Mohamed_CV.pdf";
    link.click();
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="no-print sticky top-16 z-40 border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <h1 className="text-xl font-bold">Professional Resume</h1>
          <div className="flex gap-2">
            <Button onClick={handlePrint} variant="outline" className="gap-2">
              <Printer className="h-4 w-4" />
              Print Resume
            </Button>
            <Button onClick={handleDownload} className="gap-2">
              <Download className="h-4 w-4" />
              Download PDF
            </Button>
          </div>
        </div>
      </div>

      <div className="container py-12">
        <div className="mx-auto max-w-4xl">
          <Card className="resume-paper p-12">
            {/* Header */}
            <div className="mb-8 text-center">
              <h1 className="mb-2 text-4xl font-bold">Hatem Mohamed</h1>
              <p className="mb-4 text-xl text-primary">Full Stack Developer | Computer Engineer</p>
              <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
                <span>📍 Egypt</span>
                <span>📧 hatem_mohamed_elsheref@yahoo.com</span>
                <span>🔗 linkedin.com/in/hatem-elsheref</span>
                <span>💻 github.com/hatem-elsheref</span>
              </div>
            </div>

            {/* Professional Summary */}
            <section className="mb-8">
              <h2 className="mb-3 border-b-2 border-primary pb-2 text-2xl font-bold">
                Professional Summary
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                Experienced Full Stack Developer and Computer Engineer with a strong background in software
                architecture and backend systems. Specialized in Laravel, Node.js, and Microservices architectures
                with expertise in building scalable, high-performance applications. Passionate about clean code,
                SOLID principles, and performance optimization. Proven track record in real-time applications,
                API integrations, push notifications, and system automation.
              </p>
            </section>

            {/* Technical Skills */}
            <section className="mb-8">
              <h2 className="mb-3 border-b-2 border-primary pb-2 text-2xl font-bold">
                Technical Skills
              </h2>
              <div className="space-y-3">
                <div>
                  <h3 className="mb-1 font-semibold">Languages:</h3>
                  <p className="text-muted-foreground">PHP, JavaScript, TypeScript, HTML5, CSS3, SQL</p>
                </div>
                <div>
                  <h3 className="mb-1 font-semibold">Frameworks & Libraries:</h3>
                  <p className="text-muted-foreground">
                    Laravel, Lumen, Node.js, Express.js, Vue.js, React, Bootstrap, Tailwind CSS
                  </p>
                </div>
                <div>
                  <h3 className="mb-1 font-semibold">Databases:</h3>
                  <p className="text-muted-foreground">MySQL, PostgreSQL, MongoDB, Redis, SQLite</p>
                </div>
                <div>
                  <h3 className="mb-1 font-semibold">Cloud & DevOps:</h3>
                  <p className="text-muted-foreground">
                    AWS (S3, SES, SNS), Docker, GitHub Actions, Nginx, Apache, Linux/Ubuntu
                  </p>
                </div>
                <div>
                  <h3 className="mb-1 font-semibold">Architecture & Concepts:</h3>
                  <p className="text-muted-foreground">
                    Microservices, MVC, SOLID Principles, Design Patterns, OOP, RESTful APIs, GraphQL, WebSockets
                  </p>
                </div>
              </div>
            </section>

            {/* Experience & Projects */}
            <section className="mb-8">
              <h2 className="mb-3 border-b-2 border-primary pb-2 text-2xl font-bold">
                Featured Projects & Experience
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="mb-1 text-lg font-semibold">Smart Chat & Ticketing System</h3>
                  <p className="mb-2 text-sm text-muted-foreground">
                    Real-time communication platform with AI-powered features
                  </p>
                  <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                    <li>Built Laravel-based chat widget with multi-admin support and role management</li>
                    <li>Implemented auto-reply knowledge base using AI for common queries</li>
                    <li>Integrated Redis and Laravel Echo for real-time message delivery</li>
                    <li>Tech: Laravel, jQuery, Redis, WebSockets, MySQL</li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-1 text-lg font-semibold">Logistics Integration Service</h3>
                  <p className="mb-2 text-sm text-muted-foreground">
                    Webhook processing system for e-commerce platforms
                  </p>
                  <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                    <li>Designed system to receive, validate, and store webhooks from multiple sales channels</li>
                    <li>Implemented queue-based processing for high-volume webhook handling</li>
                    <li>Created comprehensive logging and monitoring system</li>
                    <li>Tech: Laravel, Queue System, Redis, MySQL, REST APIs</li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-1 text-lg font-semibold">SaaS Marketing Engine</h3>
                  <p className="mb-2 text-sm text-muted-foreground">
                    Multi-channel marketing automation platform
                  </p>
                  <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                    <li>Developed campaign system supporting email, SMS, push notifications, and WhatsApp</li>
                    <li>Integrated with FCM, AWS SES, AWS SNS, and Meta Business API</li>
                    <li>Built analytics dashboard for campaign performance tracking</li>
                    <li>Tech: Laravel, Node.js, FCM, Meta API, AWS Services</li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-1 text-lg font-semibold">API Automation Toolkit</h3>
                  <p className="mb-2 text-sm text-muted-foreground">
                    AI-powered API generation tool
                  </p>
                  <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                    <li>Created tool that auto-generates CRUD APIs from natural language descriptions</li>
                    <li>Implemented automatic route generation, Swagger documentation, and relationship mapping</li>
                    <li>Used OpenAI API for intelligent code generation</li>
                    <li>Tech: Fastify, Node.js, TypeScript, Redis, OpenAI API</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Education */}
            <section className="mb-8">
              <h2 className="mb-3 border-b-2 border-primary pb-2 text-2xl font-bold">
                Education
              </h2>
              <div>
                <h3 className="font-semibold">Bachelor of Computer Engineering</h3>
                <p className="text-sm text-muted-foreground">
                  Strong foundation in software architecture, data structures, algorithms, and system design
                </p>
              </div>
            </section>

            {/* Key Strengths */}
            <section>
              <h2 className="mb-3 border-b-2 border-primary pb-2 text-2xl font-bold">
                Key Strengths
              </h2>
              <ul className="list-inside list-disc space-y-1 text-muted-foreground">
                <li>Expert in building scalable microservices architectures</li>
                <li>Strong focus on code quality, testing, and documentation</li>
                <li>Experience with real-time applications and WebSocket implementations</li>
                <li>Proficient in API design, integration, and third-party service connections</li>
                <li>Skilled in performance optimization and database query tuning</li>
                <li>Passionate about automation and building developer tools</li>
                <li>Open to remote work and freelance opportunities</li>
              </ul>
            </section>
          </Card>
        </div>
      </div>

      <style>{`
        @media print {
          .no-print {
            display: none !important;
          }
          
          .resume-paper {
            box-shadow: none !important;
            border: none !important;
            margin: 0 !important;
            padding: 1rem !important;
          }

          body {
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
          }
        }
      `}</style>
    </div>
  );
}
