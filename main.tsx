import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  CreditCard,
  Pencil,
  Accessibility,
  Pipette,
  Code,
  Users,
  Award,
  Cloud,
  School,
  Mail,
  Phone,
  MapPin,
  Check,
  ChevronRight,
  Sparkles,
  Copy,
  ExternalLink,
  Laptop,
  ArrowRight,
  ShieldCheck,
  Calendar,
  AlertTriangle,
  FileCheck,
  X,
  Target,
  ChevronDown
} from "lucide-react";

// ==========================================
// TYPES & INTERFACES (Self-Contained)
// ==========================================
interface Skill {
  id: string;
  category: "payments" | "tools" | "accessibility" | "research" | "frontend" | "collaboration";
  title: string;
  tags: string[];
  description: string;
  icon: string;
}

interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
  tags: string[];
}

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  bullets: string[];
  pills: string[];
  metrics: { label: string; value: string }[];
}

interface Certification {
  id: string;
  title: string;
  issuer: string;
  year: string;
  icon: "certificate" | "cloud" | "school";
}

// ==========================================
// STATIC DATA (Self-Contained & Comprehensive)
// ==========================================
const SKILLS: Skill[] = [
  {
    id: "payments",
    category: "payments",
    title: "Payments & checkout",
    tags: ["Checkout flows", "Payment UX", "Error recovery", "Conversion optimization", "Cart review"],
    description: "Designing low-friction payment experiences, resolving checkout blockages, integrating digital wallet prompts, and defining dynamic form flows based on payment gateways and user intent.",
    icon: "CreditCard"
  },
  {
    id: "tools",
    category: "tools",
    title: "Design tools",
    tags: ["Figma", "Fluent UI", "Design systems", "Auto-layout components", "Prototyping"],
    description: "Creating highly reusable design system tokens, building robust auto-layout components, maintaining corporate Figma libraries, and mapping assets directly to dev standards.",
    icon: "Pencil"
  },
  {
    id: "accessibility",
    category: "accessibility",
    title: "Accessibility (WCAG 2.1)",
    tags: ["WCAG 2.1 AA", "Keyboard nav", "Screen readers", "Color contrast", "Focus indicators"],
    description: "Detaining high-accessibility specifications including custom focus rings, semantic heading layers, aria-live announcements for totals, and comprehensive screen reader specs.",
    icon: "Accessibility"
  },
  {
    id: "research",
    category: "research",
    title: "Research & testing",
    tags: ["Usability testing", "A/B testing", "User interviews", "Heuristic review", "Task Analysis"],
    description: "Formulating objective usability test protocols, conducting rapid A/B testing on multi-step and single-page checkouts, and transforming user drop-offs into actionable layout refactors.",
    icon: "Pipette"
  },
  {
    id: "frontend",
    category: "frontend",
    title: "Frontend awareness",
    tags: ["React", "Angular", "Responsive designs", "Component specs", "Handoff optimization"],
    description: "Speaking the developer's language fluently. Designing layouts with clean CSS Flexbox/Grid alignment in mind, understanding React component hierarchies, and making frictionless handoffs.",
    icon: "Code"
  },
  {
    id: "collaboration",
    category: "collaboration",
    title: "Agile Collaboration",
    tags: ["Product Managers", "Software Engineers", "Agile/Scrum", "Sprint reviews", "QA audits"],
    description: "Working side-by-side with PMs and technical leads in 2-week active sprints, presenting interactive design options, adapting specs dynamically, and performing QA visual feedback review.",
    icon: "Users"
  }
];

const EXPERIENCES: Experience[] = [
  {
    id: "itxhub",
    company: "IT Xperts Hub",
    role: "UI/UX Designer",
    period: "Feb 2024 – Present",
    location: "USA (Remote)",
    description: [
      "Designed end-to-end checkout and payment flows for an ecommerce client, covering cart review, address entry, payment method selection, and order confirmation screens across web and mobile.",
      "Built and maintained a Figma-based component library aligned with Microsoft Fluent UI, enabling consistent design handoff to React and Angular engineering teams.",
      "Applied WCAG 2.1 AA accessibility standards across all screens including focus states, contrast ratios, error messaging, and screen reader labeling.",
      "Ran A/B tests on checkout page variations, analyzing conversion funnel data and iterating on form layout and CTA placement based on results.",
      "Conducted usability testing sessions with real users, synthesized findings into prioritized design improvements, and presented recommendations to Product Managers.",
      "Collaborated with backend engineers on API-driven product pages to ensure design accounted for dynamic content, loading states, and error scenarios.",
      "Delivered responsive and adaptive layouts for desktop, tablet, and mobile breakpoints across all major product flows."
    ],
    tags: ["Checkout Redesign", "Fluent UI", "A/B Testing", "WCAG 2.1 AA", "Figma Components", "API Design Handoff"]
  },
  {
    id: "helios",
    company: "Helios Technologies, LLC",
    role: "UI/UX Designer",
    period: "Jan 2025 – Dec 2025",
    location: "USA",
    description: [
      "Designed transactional UI screens for the MyBot.ai platform including user onboarding, subscription management, and payment confirmation flows.",
      "Created high-fidelity prototypes in Figma and conducted walkthrough sessions with Product Managers and developers to align on interaction behavior before engineering handoff.",
      "Reviewed Angular component implementations against design specs, flagging accessibility and visual inconsistencies and working directly with developers to resolve them.",
      "Defined interaction patterns for error states, empty states, and loading indicators across payment and account management screens.",
      "Participated in sprint planning and design reviews, adapting designs based on shifting product priorities and technical constraints."
    ],
    tags: ["Transactional UI", "Figma Prototypes", "Angular Audit", "Loading/Error Patterns", "Agile Scrum"]
  },
  {
    id: "nextgen",
    company: "NextGen Solutions",
    role: "Junior UI/UX Designer",
    period: "Jan 2020 – Jan 2024",
    location: "India",
    description: [
      "Designed user interfaces for the TalentConnect job portal supporting recruitment workflows for 50,000+ users, covering job search, application forms, and recruiter dashboards.",
      "Produced wireframes, user flows, and prototypes in Figma for new features, presenting design options to stakeholders and incorporating feedback across iteration cycles.",
      "Improved form usability across registration and application screens by simplifying field layouts and adding inline validation, reducing user drop-off during account creation.",
      "Ensured designs met accessibility requirements including proper heading structure, label associations, and color contrast across all platform screens.",
      "Worked alongside backend developers to align designs with data constraints and API response structures for dynamic listing and filtering interfaces."
    ],
    tags: ["Job Portal UI", "Form Usability", "Heuristic Reviews", "Accessibility Specs", "Stakeholder Reviews"]
  }
];

const PROJECTS: Project[] = [
  {
    id: "checkout_redesign",
    title: "Ecommerce Checkout Redesign",
    subtitle: "Reducing Friction & Friction Points",
    description: "Redesigned a bloated multi-step checkout flow for a major retail client, consolidating address and payment entry into a single optimized responsive screen.",
    bullets: [
      "Consolidated the flow from five steps to three, significantly minimizing transaction drop-offs.",
      "Prototyped and tested two distinct checkout layout variations with users, validating the ultimate design with qualitative user telemetry.",
      "Delivered a production-vetted Figma component set perfectly aligned to Microsoft Fluent UI design tokens for smooth development handoffs."
    ],
    pills: ["Figma", "Fluent UI", "React Handoff", "Responsive Breakdown"],
    metrics: [
      { label: "Completion Time", value: "-45%" },
      { label: "Form UX Friction", value: "-60%" },
      { label: "Mobile Conversions", value: "+21.4%" }
    ]
  },
  {
    id: "payment_error",
    title: "Payment Error Recovery UX",
    subtitle: "Turning Declines into Successful Conversions",
    description: "Designed a supportive diagnostic payment failure and recovery framework, addressing card declines, session timeouts, and alternative wallet suggestions beautifully.",
    bullets: [
      "Created contextual error and warning messaging, providing secondary action channels such as Split Payments and Scan & Autofill.",
      "Ensured all dynamic alert banners and interactive rescue sheets comply strictly with WCAG 2.1 AA accessibility standards.",
      "Executed targeted A/B test variations of warning text formats, selecting the pattern that drastically reduced absolute screen abandonment."
    ],
    pills: ["Figma", "WCAG 2.1 AA", "A/B Testing", "Copy Design"],
    metrics: [
      { label: "Successful Retries", value: "+38%" },
      { label: "Cart Abandonment", value: "-14%" },
      { label: "Support Satisfaction", value: "98.5%" }
    ]
  },
  {
    id: "dashboard_tokens",
    title: "Responsive Design System",
    subtitle: "Financial Dashboard Component Architecture",
    description: "Built a solid, scalable component library and design token dictionary in Figma for high-speed multi-breakpoint enterprise dashboards.",
    bullets: [
      "Designed full tables, responsive interactive widgets, data visualization cards, and form inputs optimized for Dark and Light states.",
      "Structured and documented comprehensive handoff documentation with precise padding, border radius, and typography scaling principles.",
      "Incorporated visual boundary checks and modular padding variations to simplify future dynamic localizations."
    ],
    pills: ["Figma", "Material Design", "Responsive Layout", "Design Tokens"],
    metrics: [
      { label: "Tokens Maintained", value: "340+" },
      { label: "Handoff Bottlenecks", value: "0" },
      { label: "Engine Alignment", value: "100%" }
    ]
  }
];

const CERTIFICATIONS: Certification[] = [
  {
    id: "google_ux",
    title: "Google UX Design Certificate",
    issuer: "Google / Coursera",
    year: "2023",
    icon: "certificate"
  },
  {
    id: "figma_proto",
    title: "Figma Advanced Prototyping",
    issuer: "Figma Community",
    year: "2024",
    icon: "certificate"
  },
  {
    id: "aws_arch",
    title: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    year: "2024",
    icon: "cloud"
  },
  {
    id: "ms_cs",
    title: "MS Computer Science (GPA: 3.9/4.0)",
    issuer: "Texas A&M University, Kingsville",
    year: "2024 – 2025",
    icon: "school"
  }
];

// ==========================================
// CORE APP COMPONENT
// ==========================================
export default function App() {
  // Navigation active tab tracking
  const [activeTab, setActiveTab] = useState<string>("about");

  // Interactivity state
  const [selectedSkillId, setSelectedSkillId] = useState<string>("payments");
  const [expandedExperienceId, setExpandedExperienceId] = useState<string>("itxhub");
  const [selectedCaseStudyId, setSelectedCaseStudyId] = useState<string>("checkout_redesign");

  // Contact form state
  const [formName, setFormName] = useState<string>("");
  const [formEmail, setFormEmail] = useState<string>("");
  const [formRole, setFormRole] = useState<string>("Recruiter");
  const [formMessage, setFormMessage] = useState<string>("");
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success">("idle");

  // Toast feedback states
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const triggerToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    triggerToast(`Copied ${type} to clipboard!`);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formEmail) {
      triggerToast("Please fill in your name and email.");
      return;
    }
    setFormStatus("sending");
    setTimeout(() => {
      setFormStatus("success");
      triggerToast("Great! Message sent. Surya Teja will response shortly.");
      setTimeout(() => {
        setFormName("");
        setFormEmail("");
        setFormMessage("");
        setFormStatus("idle");
      }, 4000);
    }, 1500);
  };

  const getSkillIcon = (iconName: string) => {
    switch (iconName) {
      case "CreditCard": return <CreditCard className="w-5 h-5 text-indigo-400" />;
      case "Pencil": return <Pencil className="w-5 h-5 text-amber-400" />;
      case "Accessibility": return <Accessibility className="w-5 h-5 text-emerald-400" />;
      case "Pipette": return <Pipette className="w-5 h-5 text-purple-400" />;
      case "Code": return <Code className="w-5 h-5 text-rose-400" />;
      case "Users": return <Users className="w-5 h-5 text-sky-400" />;
      default: return <Sparkles className="w-5 h-5 text-blue-400" />;
    }
  };

  const activeSkill = SKILLS.find(s => s.id === selectedSkillId) || SKILLS[0];
  const activeCaseStudy = PROJECTS.find(p => p.id === selectedCaseStudyId) || PROJECTS[0];

  const handleNavScroll = (elementId: string, tabName: string) => {
    setActiveTab(tabName);
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div 
      id="full-portfolio" 
      className="min-h-screen bg-[#07090e] text-slate-100 font-sans tracking-normal relative overflow-x-hidden selection:bg-indigo-500/30 selection:text-indigo-200"
    >
      
      {/* MELLIFLUOUS DEPTH BLUR GRADIENTS */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-40 -left-40 w-[450px] h-[450px] rounded-full bg-indigo-600/10 blur-[130px] animate-pulse" />
        <div className="absolute top-1/3 -right-20 w-[400px] h-[400px] rounded-full bg-emerald-600/10 blur-[120px] animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute -bottom-40 left-1/4 w-[550px] h-[550px] rounded-full bg-indigo-700/8 blur-[150px] animate-pulse" style={{ animationDuration: '12s' }} />
      </div>

      {/* FIXED FLOATING TOASTS */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: -40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            id="toast-notification"
            className="fixed top-8 left-1/2 -translate-x-1/2 z-50 bg-[#0e121d]/95 backdrop-blur-md px-5 py-3 rounded-2xl flex items-center gap-3 border border-indigo-500/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)] text-center max-w-sm"
          >
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping shrink-0" />
            <span className="text-xs font-semibold text-slate-100">{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HEADER / NAVIGATION BAR */}
      <header className="sticky top-0 z-40 bg-[#07090e]/75 backdrop-blur-xl border-b border-white/[0.04]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          
          {/* Logo & Brand Details */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-500 via-indigo-600 to-rose-400 flex items-center justify-center font-black text-sm text-white shadow-xl shadow-indigo-500/10 select-none">
              STK
            </div>
            <div>
              <span className="text-xs font-bold tracking-wider text-slate-100 block uppercase font-mono">
                Surya Teja K
              </span>
              <span className="text-[10px] text-indigo-400 font-medium block uppercase tracking-widest leading-none">
                UI//UX SPEC Portfolio
              </span>
            </div>
          </div>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-1.5 bg-white/[0.02] border border-white/[0.05] p-1 rounded-full">
            {[
              { id: "hero-profile", tab: "about", label: "About" },
              { id: "interactive-skills", tab: "skills", label: "Skills" },
              { id: "experience-timeline", tab: "experience", label: "Experience" },
              { id: "featured-projects", tab: "projects", label: "Case Studies" },
              { id: "accreditation-section", tab: "accreditation", label: "Accreditation" },
              { id: "contact-section", tab: "contact", label: "Hire" }
            ].map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavScroll(link.id, link.tab)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all ${
                  activeTab === link.tab
                    ? "bg-indigo-600/90 text-white shadow-lg shadow-indigo-600/15"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Quick Contact Chip */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleNavScroll("contact-section", "contact")}
              className="px-4 py-2 text-xs font-bold rounded-full bg-indigo-600 hover:bg-indigo-500 text-white tracking-wide transition-all duration-200 flex items-center gap-1.5 shadow-lg shadow-indigo-600/20"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Hire Now</span>
            </button>
          </div>

        </div>
      </header>

      {/* MASTER SCROLL CONTAINER */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10 space-y-12">

        {/* HERO SECTION / GENERAL SUMMARY */}
        <section id="hero-profile" className="scroll-mt-24">
          <div className="bg-gradient-to-br from-[#0f121d]/85 to-[#0b0c10]/85 backdrop-blur-xl border border-white/[0.06] rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-2xl group">
            
            {/* Ambient Background Radial */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(99,102,241,0.08),transparent_50%)] pointer-events-none" />

            <div className="flex flex-col md:flex-row gap-8 items-center justify-between relative z-10">
              
              {/* Profile Avatar and Basic Bio */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6">
                
                {/* Visual Avatar Halo */}
                <div className="relative shrink-0">
                  <div className="absolute inset-x-0 inset-y-0 rounded-3xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-rose-400 animate-pulse blur-md opacity-25 group-hover:opacity-60 transition-opacity duration-500" />
                  <div className="relative w-20 h-20 rounded-2xl bg-[#141829] border border-white/[0.08] flex items-center justify-center font-bold text-2xl text-indigo-300 shadow-inner">
                    STK
                  </div>
                  {/* Real-time online beacon indicator */}
                  <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[#0a0d16] border border-white/[0.05] flex items-center justify-center shadow-lg">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                    </span>
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5">
                    <h1 className="text-3xl font-extrabold tracking-tight text-white">
                      Surya Teja K
                    </h1>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-black uppercase tracking-widest font-mono">
                      Active Candidate
                    </span>
                  </div>

                  <p className="text-sm font-medium text-indigo-300/90 font-mono tracking-wide">
                    UI/UX Designer &bull; Ecommerce &amp; Payments Specialists
                  </p>

                  <p className="text-xs text-slate-400 max-w-xl leading-relaxed">
                    Over 5 years of experience formulating high-converting checkout flows, intuitive transactional error recovery flows, and scalable Figma specification design systems. Certified solutions architect with deep developer awareness.
                  </p>

                  <div className="flex flex-wrap justify-center sm:justify-start gap-2 pt-2">
                    <div className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/[0.05] text-[11px] text-slate-300 font-mono font-medium">
                      <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                      <span>Corpus Christi, TX</span>
                    </div>
                    <div className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-[11px] text-indigo-300 font-mono font-medium">
                      <span>OPT (W2 / C2C Available)</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Action Buttons Capsule */}
              <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-2 w-full md:w-auto shrink-0 border-t md:border-t-0 border-white/[0.06] pt-5 md:pt-0">
                <button
                  onClick={() => handleNavScroll("contact-section", "contact")}
                  className="px-5 py-3 text-xs font-bold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white tracking-wider font-sans transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/10"
                >
                  <Mail className="w-4 h-4" />
                  <span>Initiate Interview</span>
                </button>

                <button
                  onClick={() => copyToClipboard("venkatasuryateja09@gmail.com", "Surya Teja's Email")}
                  className="px-5 py-3 text-xs font-medium rounded-xl bg-white/[0.03] hover:bg-white/[0.06] text-slate-300 border border-white/[0.08] transition-all flex items-center justify-center gap-2 hover:text-indigo-300"
                >
                  <Copy className="w-4 h-4" />
                  <span>Copy Direct Email</span>
                </button>
              </div>

            </div>

          </div>
        </section>

        {/* CORE ANALYTIC METRICS ROW */}
        <section id="analytics-overview" className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { 
              num: "5+ Years", 
              lbl: "Professional Experience", 
              desc: "Engineering and formulating transactional checkout redesigns." 
            },
            { 
              num: "50,000+", 
              lbl: "Active Users Served", 
              desc: "Form layouts designed for recruiter hubs and financial portal dashboards." 
            },
            { 
              num: "WCAG 2.1 AA", 
              lbl: "Accessibility Standards Compliance", 
              desc: "Strict screen reader layout hierarchies, custom focus states, and compliant ratios." 
            }
          ].map((item, idx) => (
            <div 
              key={idx}
              className="bg-[#0f121d]/50 backdrop-blur-md border border-white/[0.04] rounded-2xl p-5 hover:border-indigo-500/20 hover:bg-[#121625]/45 transition-all duration-200 group"
            >
              <div className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-tr from-slate-100 to-indigo-300 group-hover:from-white group-hover:to-indigo-400">
                {item.num}
              </div>
              <div className="text-xs font-bold text-slate-300 mt-2 tracking-wide">
                {item.lbl}
              </div>
              <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </section>

        {/* INTERACTIVE SKILL MATRIX TABS */}
        <section id="interactive-skills" className="space-y-4 scroll-mt-24">
          <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-1">
            <h2 className="text-xs font-bold tracking-widest text-indigo-400 uppercase font-mono">
              SKILL MATRIX &amp; CORE COMPETENCY
            </h2>
            <p className="text-[11px] text-slate-400">
              Interactive workspace details mapping key design system and research values.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
            
            {/* Left Button Selector */}
            <div className="md:col-span-5 space-y-2">
              {SKILLS.map((skill) => {
                const isActive = selectedSkillId === skill.id;
                return (
                  <button
                    key={skill.id}
                    onClick={() => setSelectedSkillId(skill.id)}
                    className={`w-full text-left p-3.5 rounded-xl border transition-all duration-300 relative overflow-hidden flex items-center justify-between group ${
                      isActive 
                        ? "bg-indigo-600/10 border-indigo-500/30 shadow-[0_4px_20px_rgba(99,102,241,0.06)]"
                        : "bg-white/[0.01] border-white/[0.04] hover:bg-white/[0.03] hover:border-white/[0.08]"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg transition-colors ${
                        isActive ? "bg-indigo-500/25" : "bg-white/[0.04]"
                      }`}>
                        {getSkillIcon(skill.icon)}
                      </div>
                      <div>
                        <h3 className={`text-xs font-bold tracking-wide transition-colors ${
                          isActive ? "text-indigo-300" : "text-slate-200 group-hover:text-white"
                        }`}>
                          {skill.title}
                        </h3>
                        <div className="flex gap-1.5 mt-0.5">
                          {skill.tags.slice(0, 2).map((t, index) => (
                            <span key={index} className="text-[9px] text-slate-400 bg-white/[0.02] px-1 rounded">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <ChevronRight className={`w-4 h-4 text-slate-400 transition-all ${
                      isActive ? "translate-x-1 text-indigo-400" : "group-hover:translate-x-0.5"
                    }`} />
                  </button>
                );
              })}
            </div>

            {/* Right Display Panel */}
            <div className="md:col-span-7">
              <div className="bg-[#0f121d]/50 backdrop-blur-md border border-white/[0.04] rounded-2xl p-6 h-full flex flex-col justify-between space-y-6">
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3.5 pb-4 border-b border-white/[0.06]">
                    <div className="p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/20 shadow-md">
                      {getSkillIcon(activeSkill.icon)}
                    </div>
                    <div>
                      <h3 className="text-sm font-extrabold text-white tracking-wide">
                        {activeSkill.title}
                      </h3>
                      <span className="text-[10px] text-indigo-400 font-mono uppercase tracking-widest font-black">
                        Active Skill // {activeSkill.category}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed bg-[#141829]/40 p-4 rounded-xl border border-white/[0.03] font-medium font-sans">
                    {activeSkill.description}
                  </p>

                  <div className="space-y-2.5">
                    <h4 className="text-[10px] font-bold tracking-wider text-slate-400 uppercase font-mono">
                      Tactical Core Comps
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {activeSkill.tags.map((tag, idx) => (
                        <span 
                          key={idx}
                          className="text-[11px] px-3 py-1 rounded-lg bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 font-bold font-sans hover:bg-indigo-500/20 hover:text-white transition-all cursor-default"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-slate-400 font-mono">
                  <span className="flex items-center gap-1.5 font-bold">
                    <Check className="w-4 h-4 text-emerald-400" />
                    Verified Fluent Implementation
                  </span>
                  <span className="text-[10px]">
                    WCAG 2.1 Web Standards
                  </span>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* WORK TIMELINE (ACCORDION BASED) */}
        <section id="experience-timeline" className="space-y-4 scroll-mt-24">
          <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-1">
            <h2 className="text-xs font-bold tracking-widest text-indigo-400 uppercase font-mono">
              WORK HISTORY TIMELINE
            </h2>
            <p className="text-[11px] text-slate-400">
              Interactive accordion outlining 5+ years of verified industry contributions.
            </p>
          </div>

          <div className="space-y-3">
            {EXPERIENCES.map((exp) => {
              const isOpen = expandedExperienceId === exp.id;
              return (
                <div 
                  key={exp.id}
                  onClick={() => setExpandedExperienceId(isOpen ? "" : exp.id)}
                  className={`bg-[#0f121d]/55 border rounded-2xl p-5 hover:bg-[#121625]/60 hover:border-white/[0.08] cursor-pointer transition-all duration-300 group ${
                    isOpen ? "border-indigo-500/30 shadow-xl" : "border-white/[0.04]"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    
                    {/* Visual dot timeline connector */}
                    <div className="flex flex-col items-center pt-1">
                      <div className={`w-3.5 h-3.5 rounded-full border-2 transition-all flex items-center justify-center ${
                        isOpen 
                          ? "bg-indigo-500 border-indigo-400 scale-110 shadow-lg" 
                          : "bg-slate-900 border-slate-700"
                      }`}>
                        {isOpen && <Check className="w-2 h-2 text-white" />}
                      </div>
                      <div className="w-[1.5px] bg-white/[0.08] h-12 group-hover:bg-indigo-500/20 transition-all mt-2" />
                    </div>

                    <div className="flex-1">
                      
                      {/* Header metrics */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                        <div>
                          <h3 className="text-sm font-extrabold tracking-wide text-white group-hover:text-indigo-300 transition-colors">
                            {exp.company}
                          </h3>
                          <p className="text-xs text-indigo-400 font-bold font-mono">
                            {exp.role}
                          </p>
                        </div>
                        <div className="text-[11px] text-slate-400 font-mono font-medium sm:text-right">
                          <span className="block">{exp.period}</span>
                          <span className="block text-[10px] text-slate-400/80">{exp.location}</span>
                        </div>
                      </div>

                      {/* Accordioned Body with bullet points */}
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0, marginTop: 0 }}
                            animate={{ height: "auto", opacity: 1, marginTop: 14 }}
                            exit={{ height: 0, opacity: 0, marginTop: 0 }}
                            className="overflow-hidden"
                          >
                            <ul className="list-disc pl-4 space-y-2 text-xs text-slate-300 max-w-4xl border-t border-white/[0.05] pt-3 font-normal leading-relaxed">
                              {exp.description.map((bullet, idx) => (
                                <li key={idx} className="marker:text-indigo-400 pl-1">{bullet}</li>
                              ))}
                            </ul>

                            <div className="flex flex-wrap gap-1.5 mt-4">
                              {exp.tags.map((tag, idx) => (
                                <span 
                                  key={idx} 
                                  className="text-[10px] px-2.5 py-1 rounded bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 font-bold tracking-wide"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {!isOpen && (
                        <div className="flex flex-wrap gap-1.5 mt-2.5">
                          {exp.tags.slice(0, 4).map((tag, idx) => (
                            <span 
                              key={idx} 
                              className="text-[9px] px-2 py-0.5 rounded bg-white/[0.02] text-slate-400 border border-white/[0.04]"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                    </div>

                    <div className="shrink-0 pt-1 flex items-center justify-center">
                      <ChevronDown className={`w-4 h-4 text-slate-400 transition-all ${isOpen ? "rotate-180 text-indigo-400" : ""}`} />
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* DETAILED INTERACTIVE PROJECTS / CASE STUDIES */}
        <section id="featured-projects" className="scroll-mt-24 space-y-4">
          <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-1">
            <h2 className="text-xs font-bold tracking-widest text-indigo-400 uppercase font-mono">
              FEATURED CASE WORK STUDY RESUMES
            </h2>
            <p className="text-[11px] text-slate-400">
              Highlighting specific design achievements, task completion rates, and Figma tokens.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
            
            {/* Case Studies Selector Grid */}
            <div className="lg:col-span-4 flex flex-col gap-3">
              {PROJECTS.map((proj) => {
                const isActive = selectedCaseStudyId === proj.id;
                return (
                  <button
                    key={proj.id}
                    onClick={() => setSelectedCaseStudyId(proj.id)}
                    className={`p-4 rounded-2xl border text-left flex flex-col justify-between transition-all duration-300 group ${
                      isActive 
                        ? "bg-indigo-600/10 border-indigo-500/30 shadow-[0_4px_20px_rgba(99,102,241,0.06)]"
                        : "bg-white/[0.01] border-white/[0.04] hover:bg-white/[0.03] hover:border-white/[0.07]"
                    }`}
                  >
                    <div>
                      <span className="text-[9px] text-indigo-400 tracking-wider font-mono uppercase block font-black mb-1.5">
                        CASE STUDY INDEX
                      </span>
                      <h3 className={`text-xs font-extrabold tracking-wide transition-colors ${
                        isActive ? "text-indigo-300" : "text-slate-200 group-hover:text-white"
                      }`}>
                        {proj.title}
                      </h3>
                      <p className="text-[10px] text-slate-400 truncate mt-1">
                        {proj.subtitle}
                      </p>
                    </div>

                    <div className="flex justify-between items-center mt-4 pt-3 border-t border-white/[0.05]">
                      <span className="text-[10px] text-indigo-400/80 font-bold font-mono">Explore metrics</span>
                      <ChevronRight className={`w-3.5 h-3.5 text-slate-400 transition-transform ${
                        isActive ? "translate-x-1 text-indigo-400" : "group-hover:translate-x-0.5"
                      }`} />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Case study details panel */}
            <div className="lg:col-span-8">
              <div className="bg-[#0f121d]/50 backdrop-blur-md border border-white/[0.04] rounded-2xl p-6 sm:p-8 h-full flex flex-col justify-between space-y-6">
                
                <div className="space-y-4">
                  
                  {/* Top Header */}
                  <div>
                    <span className="text-[9px] font-mono font-black text-indigo-400 tracking-widest block uppercase mb-1">
                      Case Study Overview
                    </span>
                    <h3 className="text-lg font-black text-white">
                      {activeCaseStudy.title}
                    </h3>
                    <p className="text-xs font-medium text-slate-400">
                      {activeCaseStudy.subtitle}
                    </p>
                  </div>

                  {/* Description Paragraph */}
                  <div className="p-4 rounded-xl bg-[#141829]/40 border border-white/[0.03]">
                    <p className="text-xs text-slate-300 leading-relaxed font-sans font-medium">
                      {activeCaseStudy.description}
                    </p>
                  </div>

                  {/* Bullet Achievements */}
                  <div className="space-y-2">
                    <h4 className="text-[10px] font-mono font-bold tracking-widest text-[#0099ff] uppercase block">
                      &bull; Key System Accomplishments
                    </h4>
                    <ul className="space-y-1.5 pl-2">
                      {activeCaseStudy.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-300 leading-relaxed">
                          <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Metrics Row */}
                  <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/[0.05]">
                    {activeCaseStudy.metrics.map((met, index) => (
                      <div key={index} className="bg-white/[0.02] border border-white/[0.04] p-3 rounded-xl text-center">
                        <div className="text-lg font-black text-transparent bg-clip-text bg-gradient-to-tr from-indigo-300 to-rose-400">
                          {met.value}
                        </div>
                        <div className="text-[9px] text-slate-400 font-mono tracking-wider font-bold uppercase mt-1">
                          {met.label}
                        </div>
                      </div>
                    ))}
                  </div>

                </div>

                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.04]">
                  {activeCaseStudy.pills.map((pill, idx) => (
                    <span key={idx} className="text-[10px] font-mono bg-white/[0.04] px-2.5 py-1 rounded-lg text-slate-300 border border-white/[0.03]">
                      {pill}
                    </span>
                  ))}
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* ACCREDITATION, EDUCATION & CERTIFICATIONS */}
        <section id="accreditation-section" className="space-y-4 scroll-mt-24">
          <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-1">
            <h2 className="text-xs font-bold tracking-widest text-indigo-400 uppercase font-mono">
              VERIFIED CREDENTIALS &amp; EDUCATION
            </h2>
            <p className="text-[11px] text-slate-400">
              Credentialing, certifications, and academic benchmarks.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CERTIFICATIONS.map((cert) => {
              const renderIcon = () => {
                if (cert.icon === "cloud") return <Cloud className="w-5 h-5 text-indigo-400" />;
                if (cert.icon === "school") return <School className="w-5 h-5 text-indigo-400" />;
                return <Award className="w-5 h-5 text-indigo-400" />;
              };

              return (
                <div 
                  key={cert.id}
                  className="bg-[#0f121d]/50 backdrop-blur-md border border-white/[0.04] p-5 rounded-2xl flex flex-col justify-between hover:border-indigo-500/20 hover:bg-[#121625]/45 transition-all duration-200"
                >
                  <div className="space-y-4">
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
                      {renderIcon()}
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-xs font-extrabold text-white leading-tight">
                        {cert.title}
                      </h3>
                      <p className="text-[10px] text-slate-400">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-white/[0.04] mt-4 flex items-center justify-between text-[9px] text-slate-500 font-mono font-bold uppercase">
                    <span>Year Achieved</span>
                    <span className="text-indigo-400">{cert.year}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* HIRE PORTAL / WORKSPACE ENQUIRIES */}
        <section id="contact-section" className="scroll-mt-24">
          <div className="bg-gradient-to-br from-[#0f121d]/85 to-[#0b0c10]/85 backdrop-blur-xl border border-white/[0.06] rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-2xl">
            
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(99,102,241,0.06),transparent_50%)] pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
              
              {/* Left Context Side */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <span className="text-[9px] font-mono font-black text-indigo-400 tracking-widest block uppercase mb-1">
                    Scheduling Station
                  </span>
                  <h3 className="text-xl font-black text-white">Let&apos;s Connect</h3>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                    Surya Teja K is immediately available to full-time opportunities (W2 or contract-based consultation). Based in Corpus Christi, TX, and completely comfortable with remote collaboration.
                  </p>
                </div>

                {/* Scope Selection Pills to prefill form */}
                <div className="space-y-2.5">
                  <h4 className="text-[10px] font-bold tracking-widest text-slate-400 uppercase font-mono">
                    Prefill Action Templates
                  </h4>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    
                    <button
                      onClick={() => {
                        setFormRole("Recruiter");
                        setFormMessage("Hi Surya Teja, let's schedule an introductory interview to discuss a full-time W2 role.");
                        triggerToast("Drafted W2 Interview proposal!");
                      }}
                      className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] hover:border-white/[0.08] transition-all text-left group"
                    >
                      <div className="font-extrabold text-[#0099ff] group-hover:text-indigo-300">W2 Placement</div>
                      <div className="text-[9px] text-slate-500 mt-0.5">Introductory intro chat</div>
                    </button>

                    <button
                      onClick={() => {
                        setFormRole("Engineering Manager");
                        setFormMessage("Hi Surya Teja, let's schedule a chat to discuss details about a contract-based UX/UI role with immediate onset.");
                        triggerToast("Drafted contract consulting proposal!");
                      }}
                      className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] hover:border-white/[0.08] transition-all text-left group"
                    >
                      <div className="font-extrabold text-[#0099ff] group-hover:text-indigo-300">C2C Contract</div>
                      <div className="text-[9px] text-slate-500 mt-0.5">Quick agile delivery task</div>
                    </button>

                  </div>
                </div>

                {/* Direct copyable items */}
                <div className="space-y-2">
                  <button
                    onClick={() => copyToClipboard("venkatasuryateja09@gmail.com", "Email Address")}
                    className="w-full p-3 bg-[#111422]/90 hover:bg-[#15192b]/95 rounded-xl border border-white/[0.04] flex items-center gap-3 text-left group transition-all"
                  >
                    <Mail className="w-5 h-5 text-indigo-400" />
                    <div>
                      <span className="text-[9.5px] text-slate-500 block uppercase font-mono leading-none mb-1">Email Address</span>
                      <strong className="text-xs text-slate-200 font-sans tracking-wide">venkatasuryateja09@gmail.com</strong>
                    </div>
                  </button>

                  <button
                    onClick={() => copyToClipboard("+1 253-780-2745", "Phone Number")}
                    className="w-full p-3 bg-[#111422]/90 hover:bg-[#15192b]/95 rounded-xl border border-white/[0.04] flex items-center gap-3 text-left group transition-all"
                  >
                    <Phone className="w-5 h-5 text-emerald-400" />
                    <div>
                      <span className="text-[9.5px] text-slate-500 block uppercase font-mono leading-none mb-1">Direct Call/Text</span>
                      <strong className="text-xs text-slate-200 font-sans tracking-wide">+1 (253) 780-2745</strong>
                    </div>
                  </button>
                </div>

              </div>

              {/* Right Interactive Booking Form */}
              <div className="lg:col-span-7 bg-[#0b0d16]/30 p-5 sm:p-6 rounded-2xl border border-white/[0.04]">
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="form_name" className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono">
                        Your Full Name
                      </label>
                      <input
                        id="form_name"
                        type="text"
                        placeholder="e.g. Rachel Green"
                        value={formName}
                        onChange={(e) => setFormName(e.target.value)}
                        className="w-full bg-[#111422]/70 text-slate-200 placeholder:text-slate-600 border border-white/[0.05] focus:border-indigo-500/40 focus:ring-1 focus:ring-indigo-500/20 rounded-xl px-3 py-2.5 text-xs transition-all"
                        required
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="form_email" className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono">
                        Email Address
                      </label>
                      <input
                        id="form_email"
                        type="email"
                        placeholder="rachel@company.com"
                        value={formEmail}
                        onChange={(e) => setFormEmail(e.target.value)}
                        className="w-full bg-[#111422]/70 text-slate-200 placeholder:text-slate-600 border border-white/[0.05] focus:border-indigo-500/40 focus:ring-1 focus:ring-indigo-500/20 rounded-xl px-3 py-2.5 text-xs transition-all"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="form_role" className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono">
                      Your Corporate Role
                    </label>
                    <select
                      id="form_role"
                      value={formRole}
                      onChange={(e) => setFormRole(e.target.value)}
                      className="w-full bg-[#111422]/75 text-slate-200 border border-white/[0.05] focus:border-indigo-500/40 focus:ring-1 focus:ring-indigo-500/20 rounded-xl px-3 py-2.5 text-xs transition-all"
                    >
                      <option value="Recruiter">Recruiter / Talent Lead</option>
                      <option value="Engineering Manager">Engineering Manager / VP</option>
                      <option value="Product Manager">Product Manager / Director</option>
                      <option value="Consultancy Lead">Contracting/C2C Business Partner</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="form_message" className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono">
                      Introduce Your Opportunity
                    </label>
                    <textarea
                      id="form_message"
                      rows={4}
                      placeholder="Detail W2 or contract specifications..."
                      value={formMessage}
                      onChange={(e) => setFormMessage(e.target.value)}
                      className="w-full bg-[#111422]/70 text-slate-200 placeholder:text-slate-600 border border-white/[0.05] focus:border-indigo-500/40 focus:ring-1 focus:ring-indigo-500/20 rounded-xl px-3 py-2.5 text-xs transition-all resize-none"
                    />
                  </div>

                  <button
                    id="submit-contact-btn"
                    type="submit"
                    disabled={formStatus === "sending"}
                    className="w-full py-3 px-4 rounded-xl text-xs font-bold tracking-wide transition-all bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-650 hover:to-indigo-550 text-white shadow-lg disabled:opacity-50 hover:shadow-indigo-500/10 flex items-center justify-center gap-1.5"
                  >
                    {formStatus === "sending" ? (
                      <>
                        <div className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Transmitting Enquiry Details...</span>
                      </>
                    ) : formStatus === "success" ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-400" />
                        <span>Transmission Complete! Surya Notified.</span>
                      </>
                    ) : (
                      <span>Transmit Message &amp; Schedule Chat</span>
                    )}
                  </button>

                </form>
              </div>

            </div>

          </div>
        </section>

      </main>

      {/* COMPACT FOOTER */}
      <footer className="border-t border-white/[0.04] bg-[#07090e]/40 py-8 relative z-10 text-center font-sans tracking-wide">
        <p className="text-[11px] text-slate-400">
          Designed with absolute pixel-precision responsive glassmorphic UI. Built on React + Tailwind CSS.
        </p>
        <p className="text-slate-500 mt-2 font-mono text-[9px] uppercase">
          &copy; 2026 Surya Teja K. All Rights Reserved.
        </p>
      </footer>

    </div>
  );
}
