import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, Truck, Megaphone, Wand2, Server, Database, ShoppingCart, Bell } from "lucide-react";

export default function Projects() {
  const { t, language } = useLanguage();

  const allProjects = [
    {
      icon: MessageSquare,
      title: language === "en" ? "Smart Chat & Ticketing System" : "نظام الدردشة والتذاكر الذكي",
      description: language === "en" 
        ? "Real-time Laravel chat widget with multi-admin support and auto-reply knowledge base. Includes AI-powered responses, ticket management, and analytics dashboard."
        : "أداة دردشة Laravel في الوقت الفعلي مع دعم متعدد للمسؤولين وقاعدة معرفة للردود التلقائية. يتضمن ردود مدعومة بالذكاء الاصطناعي وإدارة التذاكر ولوحة تحليلات.",
      tech: ["Laravel", "jQuery", "Redis", "Laravel Echo", "WebSockets", "MySQL", "AI Integration"],
    },
    {
      icon: Truck,
      title: language === "en" ? "Logistics Integration Service" : "خدمة التكامل اللوجستي",
      description: language === "en"
        ? "Receives, validates, and stores webhooks from multiple sales channels like Zid. Handles high-volume webhook processing with queue management and comprehensive logging."
        : "يستقبل ويتحقق ويخزن webhooks من قنوات المبيعات المتعددة مثل Zid. يتعامل مع معالجة webhooks عالية الحجم مع إدارة قوائم الانتظار والتسجيل الشامل.",
      tech: ["Laravel", "Queue System", "Redis", "MySQL", "Webhook Processing", "API Integration"],
    },
    {
      icon: Megaphone,
      title: language === "en" ? "SaaS Marketing Engine" : "محرك التسويق SaaS",
      description: language === "en"
        ? "Multi-channel campaign system supporting email, SMS, push notifications, and WhatsApp. Features A/B testing, analytics, and automated campaign workflows."
        : "نظام حملات متعدد القنوات يدعم البريد الإلكتروني و SMS والإشعارات و WhatsApp. يتضمن اختبار A/B والتحليلات وسير عمل الحملات الآلية.",
      tech: ["Laravel", "Node.js", "FCM", "Meta API", "AWS SES", "AWS SNS", "RabbitMQ"],
    },
    {
      icon: Wand2,
      title: language === "en" ? "API Automation Toolkit" : "مجموعة أتمتة API",
      description: language === "en"
        ? "Auto-generates CRUD APIs, routes, documentation, and relationships based on natural language descriptions. Includes Swagger documentation and test generation."
        : "يولد تلقائياً CRUD APIs والمسارات والوثائق والعلاقات بناءً على الوصف بلغة طبيعية. يتضمن وثائق Swagger وإنشاء الاختبارات.",
      tech: ["Fastify", "Node.js", "TypeScript", "Redis", "OpenAI API", "Swagger"],
    },
    {
      icon: ShoppingCart,
      title: language === "en" ? "E-Commerce Platform Backend" : "منصة التجارة الإلكترونية Backend",
      description: language === "en"
        ? "Scalable e-commerce backend with inventory management, order processing, payment integration, and real-time notifications."
        : "منصة تجارة إلكترونية قابلة للتوسع مع إدارة المخزون ومعالجة الطلبات وتكامل الدفع والإشعارات الفورية.",
      tech: ["Laravel", "MySQL", "Redis", "Stripe", "PayPal", "AWS S3", "Queue System"],
    },
    {
      icon: Server,
      title: language === "en" ? "Microservices Architecture" : "بنية الخدمات المصغرة",
      description: language === "en"
        ? "Distributed microservices system with service discovery, API gateway, and inter-service communication using message queues."
        : "نظام خدمات مصغرة موزع مع اكتشاف الخدمات وبوابة API والاتصال بين الخدمات باستخدام قوائم انتظار الرسائل.",
      tech: ["Node.js", "Docker", "RabbitMQ", "Redis", "Nginx", "Microservices"],
    },
    {
      icon: Database,
      title: language === "en" ? "Data Analytics Pipeline" : "خط معالجة تحليل البيانات",
      description: language === "en"
        ? "ETL pipeline for processing large datasets with real-time analytics, data visualization, and automated reporting."
        : "خط ETL لمعالجة مجموعات البيانات الكبيرة مع التحليلات الفورية وتصور البيانات والتقارير الآلية.",
      tech: ["Laravel", "MongoDB", "Redis", "Vue.js", "Chart.js", "Queue System"],
    },
    {
      icon: Bell,
      title: language === "en" ? "Push Notification Service" : "خدمة الإشعارات الفورية",
      description: language === "en"
        ? "Cross-platform push notification system with scheduling, targeting, and delivery tracking. Supports FCM, APNs, and web push."
        : "نظام إشعارات فوري متعدد المنصات مع الجدولة والاستهداف وتتبع التسليم. يدعم FCM و APNs والإشعارات على الويب.",
      tech: ["Node.js", "FCM", "Redis", "MongoDB", "WebSockets", "AWS SNS"],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <section className="py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              {language === "en" ? "All Projects" : "جميع المشاريع"}
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              {language === "en"
                ? "Explore my portfolio of full-stack applications, microservices, and backend systems built with modern technologies."
                : "استكشف محفظتي من تطبيقات Full Stack والخدمات المصغرة وأنظمة Backend المبنية بتقنيات حديثة."}
            </p>
          </div>

          <div className="mx-auto max-w-7xl">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {allProjects.map((project, index) => (
                <Card
                  key={index}
                  className="card-hover flex flex-col"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <CardHeader>
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent">
                      <project.icon className="h-7 w-7 text-white" />
                    </div>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="mt-auto">
                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-muted-foreground">
                        {t("techUsed")}:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
