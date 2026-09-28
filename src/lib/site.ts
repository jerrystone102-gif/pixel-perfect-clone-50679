export const CONTACT = {
  company: "Nedd Digital",
  phone: "+1 (281) 547-9290",
  phoneHref: "tel:+12815479290",
  email: "info@nedddigital.com",
  address: "111 Town Square Place, Jersey City, NJ",
};

export const LEAVE_DEMO_URL = "https://leave-managment-mock-data.vercel.app/";

export type Track = "finance" | "digital";

export type Service = {
  slug: string;
  track: Track;
  name: string;
  short: string;
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroLead: string;
  problemTitle: string;
  problems: string[];
  solution: string;
  offerings: { title: string; body: string; example?: string }[];
  deliverables: string[];
  outcomes: { title: string; body: string }[];
  process: { title: string; body: string }[];
  faqs?: { q: string; a: string }[];
  cta: string;
  related: { slug: string; prompt: string };
};

const standardProcess = [
  { title: "Discover", body: "We talk through how your business works today and what is getting in the way." },
  { title: "Plan", body: "You get a clear written scope, timeline and price before any work starts." },
  { title: "Build", body: "We do the work in stages and share progress so nothing arrives as a surprise." },
  { title: "Review", body: "You test and give feedback. We adjust until it fits how you actually work." },
  { title: "Launch", body: "We hand over, walk you through it and stay available for support." },
];

export const SERVICES: Service[] = [
  {
    slug: "bookkeeping-quickbooks",
    track: "finance",
    name: "Bookkeeping & QuickBooks",
    short: "Accurate, reconciled books in QuickBooks, closed every month and ready for your CPA.",
    metaTitle: "Bookkeeping & QuickBooks Services | Nedd Digital",
    metaDescription:
      "Monthly QuickBooks bookkeeping, reconciliation, AR/AP, job costing, cleanup and migration for small and growing businesses.",
    heroTitle: "Books you can trust, every month.",
    heroLead:
      "We handle your day-to-day QuickBooks bookkeeping so your records stay accurate, organized and ready for decisions, tax time and lenders.",
    problemTitle: "When the books fall behind, everything gets harder.",
    problems: [
      "Accounts haven't been reconciled in months, so nobody is sure what the real bank balance is.",
      "Transactions land in the wrong categories, so the P&L doesn't show where money actually goes.",
      "Unpaid invoices pile up and cash gets tight even though revenue looks fine on paper.",
      "Tax season turns into a scramble to find duplicates and missing expenses.",
    ],
    solution:
      "We keep your QuickBooks file current: every transaction recorded and categorized, every account reconciled, and a proper month-end close so the numbers are final and dependable.",
    offerings: [
      {
        title: "Transaction entry & categorization",
        body: "Every time money moves in or out of your business, we record it in QuickBooks and assign it to the correct account.",
        example: "A $1,200 insurance payment is recorded as Insurance Expense, not just 'Payment', so at year-end you know exactly what you spent on insurance versus rent or supplies.",
      },
      {
        title: "Bank & credit card reconciliation",
        body: "We match every QuickBooks transaction against your bank and card statements. This catches errors, duplicate entries, missed transactions and potential fraud.",
      },
      {
        title: "Accounts receivable & payable",
        body: "We track who owes you and how overdue they are, and who you need to pay and when, so you know your real cash position.",
      },
      {
        title: "Payroll allocation & job costing",
        body: "Labor and costs assigned to specific jobs, projects or departments so you can see whether each job was profitable.",
      },
      {
        title: "Monthly close",
        body: "We review and finalize transactions, make adjusting entries, reconcile all accounts and produce your P&L and Balance Sheet.",
      },
      {
        title: "Chart of accounts",
        body: "A clean, specific account structure (Marketing, Software, Insurance…) so your reports actually mean something.",
      },
    ],
    deliverables: [
      "QuickBooks setup with proper chart of accounts and opening balances",
      "QuickBooks cleanup of messy or out-of-date files",
      "Migration from QuickBooks Desktop to Online, or from Xero, Wave or FreshBooks",
      "Inventory and cost of goods sold tracking",
      "Job and project costing",
      "Multi-entity management for related companies",
      "Monthly P&L and Balance Sheet",
    ],
    outcomes: [
      { title: "Clear cash position", body: "Know what's in the bank, what's owed to you and what you owe." },
      { title: "Ready for your CPA", body: "Closed, reconciled books make tax preparation faster and cleaner." },
      { title: "Ready for lenders", body: "Accurate statements are what banks ask for when you apply for credit." },
    ],
    process: [
      { title: "Review", body: "We look at your current QuickBooks file (or set one up) and agree what needs doing." },
      { title: "Clean up", body: "If the books are behind or messy, we bring them current first." },
      { title: "Monthly bookkeeping", body: "Ongoing entry, categorization and reconciliation throughout the month." },
      { title: "Close & report", body: "Month-end close with your P&L and Balance Sheet delivered." },
    ],
    faqs: [
      { q: "Do you prepare tax returns?", a: "No. We keep your books accurate and closed so your CPA or tax preparer can work from clean numbers." },
      { q: "Do I need QuickBooks already?", a: "No. We can set up QuickBooks from scratch or migrate you from Desktop, Xero, Wave or FreshBooks." },
      { q: "My books are months behind. Can you help?", a: "Yes. QuickBooks cleanup is a standalone service, and we usually do it before ongoing monthly work begins." },
      { q: "Is a dashboard included?", a: "Every bookkeeping package includes a free historical Power BI dashboard covering up to 3 years of data (without automatic refresh)." },
    ],
    cta: "Talk about your books",
    related: { slug: "power-bi-data-analytics", prompt: "Need clearer financial reporting?" },
  },
  {
    slug: "power-bi-data-analytics",
    track: "finance",
    name: "Power BI & Data Analytics",
    short: "Interactive Power BI dashboards built on your QuickBooks, Excel and business data.",
    metaTitle: "Power BI Dashboards & Data Analytics | Nedd Digital",
    metaDescription:
      "Power BI dashboards for cash flow, P&L, AR aging and business performance, connected to QuickBooks, Excel, SQL and other business data.",
    heroTitle: "See what's happening in your business at a glance.",
    heroLead:
      "We turn your QuickBooks, Excel and other business data into Power BI dashboards that answer the questions you ask every week.",
    problemTitle: "Reports exist. Answers don't.",
    problems: [
      "Monthly reports arrive as spreadsheets that take an hour to read and still don't answer the question.",
      "Cash flow surprises happen because nobody can see money coming in and going out side by side.",
      "Data sits in separate places (QuickBooks, Excel files, other systems) and never comes together.",
    ],
    solution:
      "We connect your data sources and build focused Power BI dashboards around the decisions you make, so you can filter, drill in and compare periods yourself.",
    offerings: [
      { title: "Cash flow dashboards", body: "Money in and money out over time, so you can spot tight months before they arrive." },
      { title: "P&L dashboards", body: "Revenue, expenses and margin by month, category or department, with period comparisons." },
      { title: "AR aging", body: "Who owes you, how much and how long it's been outstanding." },
      { title: "Business performance", body: "The handful of numbers that matter for your business, in one view." },
    ],
    deliverables: [
      "Connections to QuickBooks, Excel, SQL and other business data",
      "Data model built for your reporting questions",
      "Interactive Power BI reports with filters and drill-downs",
      "Before/after and period-over-period comparisons",
      "Walkthrough so your team can use the dashboards confidently",
    ],
    outcomes: [
      { title: "Faster answers", body: "Filter and drill in yourself instead of waiting for a new report." },
      { title: "Fewer surprises", body: "Cash and receivables trends become visible early." },
      { title: "One source", body: "Numbers from different systems shown together in one place." },
    ],
    process: [
      { title: "Questions first", body: "We agree what you need to know before choosing charts." },
      { title: "Connect data", body: "We connect QuickBooks, Excel, SQL or other sources." },
      { title: "Build & review", body: "A first version to react to, then refinements." },
      { title: "Hand over", body: "Training and support so the dashboards get used." },
    ],
    faqs: [
      { q: "Do I need Power BI licenses?", a: "It depends on how you want to share dashboards. We'll explain the options during the first call." },
      { q: "Can you use data outside QuickBooks?", a: "Yes. Excel files, SQL databases and other business data can be combined with QuickBooks data." },
    ],
    cta: "Discuss your dashboard",
    related: { slug: "business-automation", prompt: "Need better data coming from your business systems?" },
  },
  {
    slug: "business-automation",
    track: "finance",
    name: "Business Automation",
    short: "Fewer repetitive manual tasks: connected systems, automated workflows and reporting.",
    metaTitle: "Business Automation & Workflow Services | Nedd Digital",
    metaDescription:
      "Practical business automation: connect your systems, move data automatically, automate reporting and reduce repetitive manual work.",
    heroTitle: "Stop doing the same task by hand every week.",
    heroLead:
      "We find the repetitive work in your operations and automate it: moving data between systems, producing routine reports and running approval steps.",
    problemTitle: "Hours lost to copy, paste and chase.",
    problems: [
      "Someone exports data from one system and re-types it into another.",
      "The same weekly report is rebuilt manually every time.",
      "Requests and approvals live in email threads and get lost.",
    ],
    solution:
      "We map the workflow as it runs today, then connect the systems and automate the repeatable steps, keeping people in the loop where judgement is needed.",
    offerings: [
      { title: "Connecting business systems", body: "Link the tools you already use so data flows between them without re-entry." },
      { title: "Automated data movement", body: "Scheduled transfers and clean-up of data between apps, spreadsheets and databases." },
      { title: "Reporting workflows", body: "Routine reports produced and delivered automatically." },
      { title: "Operational processes", body: "Requests, approvals and hand-offs turned into a defined, trackable workflow." },
    ],
    deliverables: [
      "Map of the current workflow and where time is lost",
      "Automations built around the tools you already use",
      "Documentation of what runs, when and why",
      "Support and adjustments after launch",
    ],
    outcomes: [
      { title: "Time back", body: "Repetitive tasks handled without someone doing them manually." },
      { title: "Fewer errors", body: "Less re-typing means fewer mistakes between systems." },
      { title: "Clear status", body: "Everyone can see where a request or task stands." },
    ],
    process: standardProcess,
    cta: "Discuss a workflow",
    related: { slug: "custom-software-development", prompt: "Need a system built around your process?" },
  },
  {
    slug: "website-design-development",
    track: "digital",
    name: "Website Design & Development",
    short: "Fast, responsive business websites and landing pages that explain what you do clearly.",
    metaTitle: "Website Design & Development | Nedd Digital",
    metaDescription:
      "Business websites and landing pages: modern design, responsive development, working forms and deployment support.",
    heroTitle: "A website that explains your business in seconds.",
    heroLead:
      "We design and build business websites and landing pages that load fast, work on every screen and make it easy for visitors to contact you.",
    problemTitle: "Your website should be working for you.",
    problems: [
      "The current site looks dated and doesn't reflect the quality of your work.",
      "It's hard to use on a phone, where most visitors arrive.",
      "Visitors can't tell quickly what you offer or how to get in touch.",
    ],
    solution:
      "We start with the problem your customers have, structure the site around it, then design and build a clean, responsive site with the functionality you need.",
    offerings: [
      { title: "Website design", body: "A modern interface with clear hierarchy that fits your brand." },
      { title: "Responsive development", body: "Built to work properly on phones, tablets and desktops." },
      { title: "Business websites & landing pages", body: "Multi-page company sites or focused pages for a single offer." },
      { title: "Website functionality", body: "Contact forms, booking links, content sections and integrations." },
    ],
    deliverables: [
      "Site structure and page content plan",
      "Custom design in your brand",
      "Responsive build with SEO basics",
      "Deployment and domain setup",
      "Ongoing support where needed",
    ],
    outcomes: [
      { title: "Clear message", body: "Visitors understand what you do and how to reach you." },
      { title: "Works everywhere", body: "A consistent experience on every device." },
      { title: "Easy to grow", body: "Built so new pages and sections can be added later." },
    ],
    process: standardProcess,
    cta: "Plan your website",
    related: { slug: "custom-software-development", prompt: "Need more than a website?" },
  },
  {
    slug: "custom-software-development",
    track: "digital",
    name: "Custom Software Development",
    short: "Internal systems, workflow tools and web applications built around how you work.",
    metaTitle: "Custom Software Development | Nedd Digital",
    metaDescription:
      "Custom business software: internal systems, workflow tools, dashboards and web applications designed around your processes.",
    heroTitle: "Software shaped around your process, not the other way round.",
    heroLead:
      "When spreadsheets and off-the-shelf tools stop fitting, we build internal systems and web applications around how your business actually runs.",
    problemTitle: "Off-the-shelf tools only go so far.",
    problems: [
      "Key processes run on a patchwork of spreadsheets and email.",
      "Generic software forces workarounds for the way your team works.",
      "Managers can't see status or history without asking around.",
    ],
    solution:
      "We start with the problem, map the process, then build a focused web application with the roles, workflows and views your team needs.",
    offerings: [
      { title: "Custom business software", body: "Applications built for a specific business need." },
      { title: "Internal business systems", body: "Tools your team uses daily to manage records, requests and operations." },
      { title: "Workflow systems", body: "Requests, approvals and status tracking with clear roles." },
      { title: "Dashboards & web applications", body: "Browser-based apps with reporting views for managers." },
    ],
    deliverables: [
      "Process map and written scope",
      "User roles and permissions",
      "Web application with dashboard views",
      "Testing with your team",
      "Deployment, handover and support",
    ],
    outcomes: [
      { title: "One place", body: "Work that was scattered lives in a single system." },
      { title: "Visibility", body: "Managers see status and history without chasing." },
      { title: "Fits your team", body: "Built around your process instead of workarounds." },
    ],
    process: standardProcess,
    cta: "Discuss your system",
    related: { slug: "leave-management", prompt: "Looking for an internal HR workflow?" },
  },
  {
    slug: "mobile-app-development",
    track: "digital",
    name: "Mobile App Development",
    short: "Mobile applications built from your business requirements, from design to deployment.",
    metaTitle: "Mobile App Development | Nedd Digital",
    metaDescription:
      "Mobile app development based on your business requirements: UI/UX design, app development, backend integration, testing and deployment.",
    heroTitle: "Put your service in your customers' pocket.",
    heroLead:
      "We build mobile applications around clear business requirements, covering design, development, integration with your systems, testing and release.",
    problemTitle: "A good idea needs a clear build plan.",
    problems: [
      "You know what the app should do but not how to scope it.",
      "The app needs to talk to existing systems and data.",
      "Past attempts stalled without a clear process.",
    ],
    solution:
      "We define the requirements with you, design the screens, then develop, integrate and test the app before release.",
    offerings: [
      { title: "UI/UX design", body: "Screen flows and interface designed for how people will use the app." },
      { title: "Mobile application development", body: "The app built to your agreed requirements." },
      { title: "API & backend integration", body: "Connections to your existing systems and data." },
      { title: "Testing & deployment", body: "Testing before release and help getting the app published." },
    ],
    deliverables: ["Requirements and scope", "Screen designs", "Working app", "Backend/API connections", "Testing and release support"],
    outcomes: [
      { title: "Clear scope", body: "You know what's being built and when." },
      { title: "Connected", body: "The app works with the systems you already have." },
      { title: "Supported", body: "Help after launch as you gather feedback." },
    ],
    process: standardProcess,
    cta: "Discuss your app",
    related: { slug: "custom-software-development", prompt: "Need a web system alongside the app?" },
  },
  {
    slug: "logo-brand-design",
    track: "digital",
    name: "Logo & Brand Design",
    short: "Logos, visual identity and brand assets that make your business recognizable.",
    metaTitle: "Logo & Brand Design | Nedd Digital",
    metaDescription:
      "Logo design, brand identity, visual direction and business branding assets for small and growing businesses.",
    heroTitle: "Look as professional as the work you do.",
    heroLead:
      "We design logos and simple, consistent brand identities so your business looks the same everywhere: website, documents, social and signage.",
    problemTitle: "Inconsistent branding costs trust.",
    problems: [
      "The logo was made quickly and no longer fits the business.",
      "Colors and fonts change from one document to the next.",
      "There are no ready files for print, web and social.",
    ],
    solution:
      "We agree a visual direction, design the logo and core identity, then deliver the files and guidance you need to use it consistently.",
    offerings: [
      { title: "Logo design", body: "A distinctive mark in the formats you need." },
      { title: "Brand identity", body: "Color palette, typography and usage rules." },
      { title: "Visual direction", body: "A clear look and feel agreed before design starts." },
      { title: "Business branding assets", body: "Business cards, letterheads, social images and similar." },
    ],
    deliverables: ["Logo files for web and print", "Color and typography guide", "Branding assets you choose", "Simple usage guidelines"],
    outcomes: [
      { title: "Recognizable", body: "A consistent look customers remember." },
      { title: "Ready to use", body: "Files for every place your brand appears." },
      { title: "Consistent", body: "Clear rules so everyone applies it the same way." },
    ],
    process: standardProcess,
    cta: "Discuss your brand",
    related: { slug: "website-design-development", prompt: "Ready to put the new brand online?" },
  },
];

export const getService = (slug: string) => SERVICES.find((s) => s.slug === slug);

export const TRACKS: Record<Track, { name: string; lead: string }> = {
  finance: {
    name: "Business, Finance & Insights",
    lead: "Accurate books, clear reporting and less manual work.",
  },
  digital: {
    name: "Digital & Technology",
    lead: "Websites, software, apps and branding built around your business.",
  },
};

export const LEAVE_FEATURES = [
  { title: "Employee, manager & admin roles", body: "Each role sees the views and actions that match their responsibilities." },
  { title: "Leave requests & approvals", body: "Employees submit requests; managers approve or decline with a clear trail." },
  { title: "Live leave balances", body: "Balances update as requests are approved, so everyone sees the same numbers." },
  { title: "Leave types & policies", body: "Configure leave types and the policies that govern them." },
  { title: "CSV import", body: "Bring existing employee data in without re-typing it." },
  { title: "Attachments", body: "Supporting documents attached directly to requests." },
  { title: "Notifications", body: "People are told when a request needs action or has been decided." },
  { title: "Reports", body: "Overview and reporting views for managers and admins." },
  { title: "Audit logs", body: "A record of who did what and when." },
];
