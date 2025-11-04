import { Briefcase, Code, Mail, MapPin, Linkedin, Github, Award, Target } from "lucide-react";

export function ResumeArabic() {
  return (
    <>
      {/* Header */}
      <div className="mb-8 border-b-4 border-primary pb-6 text-right" dir="rtl">
        <h1 className="mb-2 text-5xl font-bold text-primary">حاتم محمد</h1>
        <p className="mb-4 text-2xl font-semibold text-accent">مطور Full Stack | مهندس حاسب آلي</p>
        <div className="grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
          <div className="flex items-center justify-end gap-2">
            <span>مصر</span>
            <MapPin className="h-4 w-4 text-primary" />
          </div>
          <div className="flex items-center justify-end gap-2">
            <span>hatem_mohamed_elsheref@yahoo.com</span>
            <Mail className="h-4 w-4 text-primary" />
          </div>
          <div className="flex items-center justify-end gap-2">
            <span>linkedin.com/in/hatem-elsheref</span>
            <Linkedin className="h-4 w-4 text-primary" />
          </div>
          <div className="flex items-center justify-end gap-2">
            <span>github.com/hatem-elsheref</span>
            <Github className="h-4 w-4 text-primary" />
          </div>
        </div>
      </div>

      {/* Professional Summary */}
      <section className="mb-8" dir="rtl">
        <div className="mb-4 flex items-center justify-end gap-3 border-b-2 border-primary pb-2">
          <h2 className="text-2xl font-bold text-primary">الملخص المهني</h2>
          <Target className="h-6 w-6 text-primary" />
        </div>
        <p className="text-right leading-relaxed text-muted-foreground">
          مطور Full Stack ومهندس حاسب آلي متمرس مع خبرة واسعة في هندسة البرمجيات وأنظمة Backend.
          متخصص في Laravel و Node.js وبنية الخدمات المصغرة مع قدرة مثبتة على بناء تطبيقات قابلة للتوسع
          وعالية الأداء. شغوف بالكود النظيف ومبادئ SOLID وتحسين الأداء. سجل حافل في تطوير التطبيقات
          الفورية وتكامل APIs والإشعارات وحلول أتمتة الأنظمة.
        </p>
      </section>

      {/* Technical Skills */}
      <section className="mb-8" dir="rtl">
        <div className="mb-4 flex items-center justify-end gap-3 border-b-2 border-primary pb-2">
          <h2 className="text-2xl font-bold text-primary">المهارات التقنية</h2>
          <Code className="h-6 w-6 text-primary" />
        </div>
        <div className="space-y-3">
          <div className="rounded-lg bg-primary/5 p-3 text-right">
            <h3 className="mb-2 font-semibold text-primary">لغات البرمجة:</h3>
            <p className="text-muted-foreground">PHP، JavaScript، TypeScript، HTML5، CSS3، SQL</p>
          </div>
          <div className="rounded-lg bg-accent/5 p-3 text-right">
            <h3 className="mb-2 font-semibold text-accent">أطر عمل Backend:</h3>
            <p className="text-muted-foreground">Laravel، Lumen، Node.js، Express.js، Fastify</p>
          </div>
          <div className="rounded-lg bg-primary/5 p-3 text-right">
            <h3 className="mb-2 font-semibold text-primary">أطر عمل Frontend:</h3>
            <p className="text-muted-foreground">Vue.js، React، Bootstrap، Tailwind CSS، jQuery</p>
          </div>
          <div className="rounded-lg bg-accent/5 p-3 text-right">
            <h3 className="mb-2 font-semibold text-accent">قواعد البيانات:</h3>
            <p className="text-muted-foreground">MySQL، PostgreSQL، MongoDB، Redis، SQLite</p>
          </div>
          <div className="rounded-lg bg-primary/5 p-3 text-right">
            <h3 className="mb-2 font-semibold text-primary">الخدمات السحابية و DevOps:</h3>
            <p className="text-muted-foreground">AWS (S3, SES, SNS)، Docker، GitHub Actions، Nginx، Apache، Linux/Ubuntu</p>
          </div>
          <div className="rounded-lg bg-accent/5 p-3 text-right">
            <h3 className="mb-2 font-semibold text-accent">الهندسة المعمارية والمفاهيم:</h3>
            <p className="text-muted-foreground">
              Microservices، MVC، مبادئ SOLID، Design Patterns، OOP، RESTful APIs، GraphQL، WebSockets، Queue Systems، Message Brokers
            </p>
          </div>
        </div>
      </section>

      {/* Experience & Projects */}
      <section className="mb-8" dir="rtl">
        <div className="mb-4 flex items-center justify-end gap-3 border-b-2 border-primary pb-2">
          <h2 className="text-2xl font-bold text-primary">المشاريع المميزة والخبرة</h2>
          <Briefcase className="h-6 w-6 text-primary" />
        </div>
        <div className="space-y-6">
          <div className="rounded-lg border-r-4 border-primary bg-primary/5 p-4 text-right">
            <h3 className="mb-2 text-lg font-bold text-primary">نظام الدردشة والتذاكر الذكي</h3>
            <p className="mb-3 text-sm italic text-muted-foreground">
              منصة اتصالات فورية مع ميزات مدعومة بالذكاء الاصطناعي
            </p>
            <ul className="mb-3 list-inside space-y-1 text-sm text-muted-foreground">
              <li>• بناء أداة دردشة Laravel مع دعم متعدد للمسؤولين والتحكم في الوصول القائم على الأدوار</li>
              <li>• تطبيق قاعدة معرفة للردود التلقائية مدعومة بالذكاء الاصطناعي للاستفسارات الشائعة</li>
              <li>• تكامل Redis و Laravel Echo للاتصال الفوري ثنائي الاتجاه</li>
              <li>• تطوير لوحة تحليلات شاملة لمراقبة مقاييس الدردشة</li>
            </ul>
            <p className="text-xs font-semibold text-primary">
              التقنيات المستخدمة: Laravel • jQuery • Redis • Laravel Echo • WebSockets • MySQL • AI Integration
            </p>
          </div>

          <div className="rounded-lg border-r-4 border-accent bg-accent/5 p-4 text-right">
            <h3 className="mb-2 text-lg font-bold text-accent">خدمة التكامل اللوجستي</h3>
            <p className="mb-3 text-sm italic text-muted-foreground">
              نظام معالجة webhooks عالي الأداء لمنصات التجارة الإلكترونية
            </p>
            <ul className="mb-3 list-inside space-y-1 text-sm text-muted-foreground">
              <li>• تصميم نظام قابل للتوسع لاستقبال والتحقق ومعالجة webhooks من قنوات مبيعات متعددة</li>
              <li>• تطبيق بنية قائمة على قوائم الانتظار للتعامل مع حركة المرور العالية من webhooks</li>
              <li>• إنشاء نظام تسجيل ومراقبة شامل لتتبع دورة حياة webhook</li>
              <li>• بناء آلية إعادة المحاولة مع التأخير الأسي لمعالجة webhooks الفاشلة</li>
            </ul>
            <p className="text-xs font-semibold text-accent">
              التقنيات المستخدمة: Laravel • Queue System • Redis • MySQL • Webhook Processing • REST APIs
            </p>
          </div>

          <div className="rounded-lg border-r-4 border-primary bg-primary/5 p-4 text-right">
            <h3 className="mb-2 text-lg font-bold text-primary">محرك التسويق SaaS</h3>
            <p className="mb-3 text-sm italic text-muted-foreground">
              منصة أتمتة تسويق متعددة القنوات على مستوى المؤسسات
            </p>
            <ul className="mb-3 list-inside space-y-1 text-sm text-muted-foreground">
              <li>• تطوير نظام حملات شامل يدعم البريد الإلكتروني و SMS والإشعارات و WhatsApp</li>
              <li>• التكامل مع FCM و AWS SES و AWS SNS و Meta Business API للتوصيل متعدد القنوات</li>
              <li>• بناء لوحة تحليلات فورية لتتبع أداء الحملات وقياس العائد على الاستثمار</li>
              <li>• تطبيق إطار عمل اختبار A/B لتحسين فعالية الحملات</li>
            </ul>
            <p className="text-xs font-semibold text-primary">
              التقنيات المستخدمة: Laravel • Node.js • FCM • Meta API • AWS SES • AWS SNS • RabbitMQ
            </p>
          </div>

          <div className="rounded-lg border-r-4 border-accent bg-accent/5 p-4 text-right">
            <h3 className="mb-2 text-lg font-bold text-accent">مجموعة أتمتة API</h3>
            <p className="mb-3 text-sm italic text-muted-foreground">
              أداة إنشاء ووثائق API مدعومة بالذكاء الاصطناعي
            </p>
            <ul className="mb-3 list-inside space-y-1 text-sm text-muted-foreground">
              <li>• إنشاء أداة ذكية تولد تلقائياً CRUD APIs من أوصاف اللغة الطبيعية</li>
              <li>• تطبيق إنشاء تلقائي للمسارات ووثائق Swagger وربط علاقات قاعدة البيانات</li>
              <li>• استخدام OpenAI API لإنشاء وتحسين الكود بوعي السياق</li>
              <li>• بناء مجموعة اختبار آلية لنقاط نهاية API</li>
            </ul>
            <p className="text-xs font-semibold text-accent">
              التقنيات المستخدمة: Fastify • Node.js • TypeScript • Redis • OpenAI API • Swagger
            </p>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="mb-8" dir="rtl">
        <div className="mb-4 flex items-center justify-end gap-3 border-b-2 border-primary pb-2">
          <h2 className="text-2xl font-bold text-primary">التعليم</h2>
          <Award className="h-6 w-6 text-primary" />
        </div>
        <div className="rounded-lg bg-primary/5 p-4 text-right">
          <h3 className="mb-1 text-lg font-bold text-primary">بكالوريوس هندسة الحاسب الآلي</h3>
          <p className="text-sm text-muted-foreground">
            أساس شامل في هندسة البرمجيات وهياكل البيانات والخوارزميات وتصميم الأنظمة
            وأساسيات علوم الحاسوب
          </p>
        </div>
      </section>

      {/* Key Strengths */}
      <section dir="rtl">
        <div className="mb-4 flex items-center justify-end gap-3 border-b-2 border-primary pb-2">
          <h2 className="text-2xl font-bold text-primary">الكفاءات الأساسية</h2>
          <Target className="h-6 w-6 text-primary" />
        </div>
        <div className="grid gap-2 sm:grid-cols-2">
          <div className="flex items-start justify-end gap-2 rounded-lg bg-primary/5 p-3 text-right">
            <p className="text-sm text-muted-foreground">خبير في بناء بنى الخدمات المصغرة القابلة للتوسع</p>
            <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
          </div>
          <div className="flex items-start justify-end gap-2 rounded-lg bg-accent/5 p-3 text-right">
            <p className="text-sm text-muted-foreground">تركيز قوي على جودة الكود والاختبار والوثائق الشاملة</p>
            <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" />
          </div>
          <div className="flex items-start justify-end gap-2 rounded-lg bg-primary/5 p-3 text-right">
            <p className="text-sm text-muted-foreground">خبرة واسعة في التطبيقات الفورية وتطبيقات WebSocket</p>
            <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
          </div>
          <div className="flex items-start justify-end gap-2 rounded-lg bg-accent/5 p-3 text-right">
            <p className="text-sm text-muted-foreground">بارع في تصميم RESTful APIs والتكامل والاتصال بخدمات الطرف الثالث</p>
            <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" />
          </div>
          <div className="flex items-start justify-end gap-2 rounded-lg bg-primary/5 p-3 text-right">
            <p className="text-sm text-muted-foreground">ماهر في تحسين الأداء وضبط استعلامات قاعدة البيانات</p>
            <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
          </div>
          <div className="flex items-start justify-end gap-2 rounded-lg bg-accent/5 p-3 text-right">
            <p className="text-sm text-muted-foreground">شغوف بالأتمتة وبناء أدوات إنتاجية للمطورين</p>
            <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" />
          </div>
        </div>
      </section>
    </>
  );
}
