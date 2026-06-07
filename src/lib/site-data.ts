export type MenuItem = {
  title: string;
  description: string;
  href: string;
};

export type MenuKey = "product" | "workers" | "useCases" | "resources";

export type NavMenu = {
  label: string;
  overviewHref: string;
  items: MenuItem[];
};

export const workflowAssessmentHref =
  "https://syntra-core.vercel.app/workflow-assessment";

export const requestAccessFormAction = "https://formspree.io/f/xbdwzgao";

export const navMenus: Record<MenuKey, NavMenu> = {
  product: {
    label: "Product",
    overviewHref: "/product",
    items: [
      {
        title: "Executive Assistant",
        description: "Email, calendar, follow-ups, and daily briefing",
        href: "/product#executive-assistant",
      },
      {
        title: "Workspaces",
        description: "Organize each business or client operation",
        href: "/product#workspaces",
      },
      {
        title: "Work Queue",
        description: "Prioritized work waiting for review",
        href: "/product#work-queue",
      },
      {
        title: "Approvals",
        description: "Human approval before action",
        href: "/product#approvals",
      },
      {
        title: "AI Workflow Analysis",
        description: "Find what Syntra can automate first",
        href: "/product#workflow-analysis",
      },
    ],
  },
  workers: {
    label: "AI Workers",
    overviewHref: "/ai-workers",
    items: [
      {
        title: "Executive Assistant",
        description: "Your first AI worker",
        href: "/ai-workers#executive-assistant",
      },
      {
        title: "Project Management Agent",
        description: "Track deadlines, updates, and project work",
        href: "/ai-workers#project-management-agent",
      },
      {
        title: "Constituent Issues Agent",
        description: "Triage and organize public requests",
        href: "/ai-workers#constituent-issues-agent",
      },
      {
        title: "Legislative Watch Agent",
        description: "Monitor bills, amendments, and updates",
        href: "/ai-workers#legislative-watch-agent",
      },
      {
        title: "QA / Operations Agent",
        description: "Review workflows and surface issues",
        href: "/ai-workers#qa-operations-agent",
      },
    ],
  },
  useCases: {
    label: "Use Cases",
    overviewHref: "/use-cases",
    items: [
      {
        title: "Law Offices",
        description: "Intake, follow-ups, deadlines, and client communication",
        href: "/use-cases#law-offices",
      },
      {
        title: "Trucking Companies",
        description: "Dispatch, shipment updates, and driver communication",
        href: "/use-cases#trucking-companies",
      },
      {
        title: "Local Service Businesses",
        description: "Scheduling, quotes, follow-ups, and admin work",
        href: "/use-cases#local-businesses",
      },
      {
        title: "E-commerce Brands",
        description: "Orders, customer requests, and operations support",
        href: "/use-cases#ecommerce-brands",
      },
      {
        title: "Professional Services",
        description: "Appointments, inboxes, proposals, and client work",
        href: "/use-cases#professional-services",
      },
      {
        title: "Government / Legislative Offices",
        description: "Constituent issues, calendars, and legislative tracking",
        href: "/use-cases#government-offices",
      },
    ],
  },
  resources: {
    label: "Resources",
    overviewHref: "/resources",
    items: [
      {
        title: "How It Works",
        description: "See the approval workflow",
        href: "/how-it-works",
      },
      {
        title: "Founder Demo",
        description: "Watch the founder walkthrough",
        href: "/founder-intro",
      },
      {
        title: "AI Workflow Analysis",
        description: "Try the guided workflow tool",
        href: workflowAssessmentHref,
      },
      {
        title: "Request Access",
        description: "Request pilot access",
        href: "/request-access",
      },
      {
        title: "Product Roadmap",
        description: "See where Syntra is headed",
        href: "/resources#product-roadmap",
      },
    ],
  },
};

export const directNavLinks = [
  { label: "How It Works", href: "/how-it-works" },
  { label: "Pricing", href: "/pricing" },
];

export const footerLinks = [
  { label: "Product", href: "/product" },
  { label: "AI Workers", href: "/ai-workers" },
  { label: "Use Cases", href: "/use-cases" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Pricing", href: "/pricing" },
  { label: "Resources", href: "/resources" },
  { label: "Request Access", href: "/request-access" },
  { label: "Founder Intro", href: "/founder-intro" },
  { label: "Product Demo", href: "/product-demo" },
];

export const heroBullets = [
  "Specialized AI workers for inboxes, calendars, tasks, follow-ups, and approvals.",
  "Built first for small businesses and service teams that need a clearer way to manage operational work.",
  "Human-approved execution with workspaces, memory, activity history, and queues built in.",
];

export const problemCards = [
  {
    title: "Email overload and missed requests",
    body: "Important work disappears into crowded inboxes, scattered replies, and informal follow-ups that never become a shared system.",
  },
  {
    title: "Scheduling conflicts and follow-up drag",
    body: "Reschedules, prep notes, client replies, and meeting changes consume hours that small teams rarely have to spare.",
  },
  {
    title: "Tasks hidden across disconnected tools",
    body: "Projects, inboxes, calendars, and client notes live in separate places, so teams see fragments instead of one clear work queue.",
  },
  {
    title: "Operational work that never makes it into a system",
    body: "Too much work stays reactive and manual until something important slips through the cracks.",
  },
];

export const solutionCards = [
  {
    title: "Not another chatbot",
    body: "Syntra is built to organize, recommend, and move work forward, not just answer prompts in a chat window.",
  },
  {
    title: "Not a staffing company",
    body: "This is software: AI workers, workspaces, queues, approvals, memory, activity history, and execution.",
  },
  {
    title: "Workspace-based operations",
    body: "Each business gets a workspace for context, approvals, activity, and the operational memory that future actions depend on.",
  },
  {
    title: "Human-approved execution",
    body: "Syntra prepares the work, explains the recommendation, and waits for approval before important actions are taken.",
  },
  {
    title: "Work queue built in",
    body: "Operational requests land in organized queues so the team can see what is urgent, what is ready, and what needs review.",
  },
  {
    title: "Memory and activity history",
    body: "The system keeps track of what happened and what is still open, so work improves over time instead of resetting every day.",
  },
];

export const modules = [
  {
    id: "executive-assistant",
    title: "Executive Assistant",
    what: "Daily briefings, inbox triage, scheduling conflicts, and follow-ups",
    body: "The first active AI worker reviews the day, prepares next actions, and routes work through approval.",
  },
  {
    id: "workspaces",
    title: "Workspaces",
    what: "Organized operating context for each business or client environment",
    body: "Workspaces keep queues, approvals, activity history, and client context together instead of scattered across tools.",
  },
  {
    id: "work-queue",
    title: "Work Queue",
    what: "Prioritized work waiting for review or execution",
    body: "Syntra turns operational signals into a queue the team can act on instead of leaving work buried across apps.",
  },
  {
    id: "approvals",
    title: "Approvals",
    what: "Human approval before important action",
    body: "The approval layer is a core product feature, helping businesses stay in control before action is executed.",
  },
  {
    id: "workflow-analysis",
    title: "AI Workflow Analysis",
    what: "A practical starting point for discovering where Syntra can help",
    body: "Use workflow analysis to identify repeated bottlenecks and see where specialized AI workers should begin first.",
  },
  {
    id: "future-workers",
    title: "Future Specialized Workers",
    what: "Project, operations, public-sector, and workflow-specific expansion",
    body: "Syntra begins with the Executive Assistant and expands through more specialized AI workers on the same operating layer.",
  },
];

export const workerCards = [
  {
    id: "executive-assistant",
    title: "Executive Assistant",
    status: "Active now",
    body: "Reviews inboxes, calendars, follow-ups, and daily operating signals, then prepares the next actions for human review.",
  },
  {
    id: "project-management-agent",
    title: "Project Management Agent",
    status: "Roadmap",
    body: "Designed to track deadlines, updates, dependencies, and operational follow-through across project work.",
  },
  {
    id: "constituent-issues-agent",
    title: "Constituent Issues Agent",
    status: "Roadmap",
    body: "Built for public-facing teams that need structured triage, categorization, and follow-through on incoming requests.",
  },
  {
    id: "legislative-watch-agent",
    title: "Legislative Watch Agent",
    status: "Roadmap",
    body: "Monitors bills, amendments, hearings, and key legislative changes that need organized review and response.",
  },
  {
    id: "qa-operations-agent",
    title: "QA / Operations Agent",
    status: "Roadmap",
    body: "Surfaces issues, reviews execution quality, and helps teams keep operational standards visible as work scales.",
  },
];

export const howItWorks = [
  {
    step: "01",
    title: "Connect work sources",
    body: "Syntra starts where the business already works: inboxes, calendars, tasks, workflows, and client operations.",
  },
  {
    step: "02",
    title: "Syntra reviews and prioritizes",
    body: "The workspace creates a daily briefing, surfaces what needs attention, and organizes work by context and urgency.",
  },
  {
    step: "03",
    title: "AI workers prepare the work",
    body: "Specialized AI workers recommend actions, draft replies, flag issues, and prepare what should be reviewed next.",
  },
  {
    step: "04",
    title: "Human approves",
    body: "The user reviews, edits, approves, or dismisses important work before action is taken.",
  },
  {
    step: "05",
    title: "Syntra executes and learns",
    body: "Once approved, Syntra completes the action and keeps the result in workspace memory and activity history.",
  },
];

export const useCases = [
  {
    id: "law-offices",
    title: "Law Offices",
    body: "Organize intake, follow-ups, deadlines, and client communication without letting urgent requests vanish in the inbox.",
  },
  {
    id: "trucking-companies",
    title: "Trucking Companies",
    body: "Track dispatch communication, shipment changes, follow-through, and operational updates before delays grow expensive.",
  },
  {
    id: "local-businesses",
    title: "Local Service Businesses",
    body: "Handle scheduling, quotes, customer questions, and recurring admin work with a cleaner operational loop.",
  },
  {
    id: "ecommerce-brands",
    title: "E-commerce Brands",
    body: "Support orders, customer requests, operational follow-ups, and repeat issues in one reviewable system.",
  },
  {
    id: "professional-services",
    title: "Professional Services",
    body: "Stay ahead of appointments, proposals, inbox review, and client-facing operational work that usually slips between tools.",
  },
  {
    id: "government-offices",
    title: "Government / Legislative Offices",
    body: "Triage constituent issues, calendars, approvals, and legislative tracking through structured queues and review steps.",
  },
];

export const pilotCards = [
  {
    title: "Early Pilot",
    body: "A guided starting point for teams that want to test the Executive Assistant on real operational work.",
  },
  {
    title: "Small Business Workspace",
    body: "A broader workspace setup for teams that need queues, approvals, memory, and a more complete operational loop.",
  },
  {
    title: "Custom Workflow Build",
    body: "A higher-touch path for organizations that want Syntra tailored to more specialized workflows as the platform expands.",
  },
];

export const resourceCards = [
  {
    id: "founder-demo",
    title: "Founder Demo",
    body: "Watch the founder walkthrough to understand the operating model, approval layer, and why Syntra exists.",
    href: "/founder-intro",
  },
  {
    id: "ai-workflow-analysis",
    title: "AI Workflow Analysis",
    body: "Use the workflow analysis tool to find the repeated bottlenecks where Syntra can help first.",
    href: workflowAssessmentHref,
  },
  {
    id: "how-it-works-resource",
    title: "How It Works",
    body: "See how work moves from connected sources into review, approval, execution, memory, and activity history.",
    href: "/how-it-works",
  },
  {
    id: "product-roadmap",
    title: "Product Roadmap",
    body: "See where the AI worker layer expands after the Executive Assistant and how the platform evolves over time.",
    href: "/ai-workers#future-workers",
  },
  {
    id: "early-access-resource",
    title: "Early Access / Request Access",
    body: "Request access for a pilot conversation, small business workspace discussion, or custom workflow build.",
    href: "/request-access",
  },
];
