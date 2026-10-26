export const resourceCategories = [
  { id: "ideas", title: "Idea & Problem Validation", description: "For identifying worthwhile problems, testing assumptions and evaluating opportunities." },
  { id: "customers", title: "Customers & Market Research", description: "For customer interviews, buyer behaviour, existing alternatives and willingness to pay." },
  { id: "building", title: "Building Your First Offer", description: "For MVPs, prototypes, pilots and testing solutions before investing heavily." },
  { id: "sales", title: "Sales & Go-to-Market", description: "For positioning, early sales, customer acquisition, outreach and partnerships." },
  { id: "finance", title: "Business Models & Finance", description: "For pricing, unit economics, break-even analysis, cash flow and business viability." },
  { id: "legal", title: "Legal, Operations & Risk", description: "For contracts, business structures, intellectual property, compliance and operational decisions." },
] as const;

export type ResourceCategory = typeof resourceCategories[number]["id"];
export type ResourceType = "Article" | "Practical guide" | "Worksheet" | "Template" | "Video" | "Checklist" | "Case-based explainer";
export type Resource = {
  slug: string;
  title: string;
  summary: string;
  category: ResourceCategory;
  type: ResourceType;
  status: "draft" | "published";
  editorialApproved: boolean;
  readingTime: string;
  introduction: string;
  sections: { heading: string; paragraphs: string[]; example?: string }[];
  nextSteps: string[];
  relatedSlugs: string[];
  programLink?: boolean;
  author?: string;
  publishedAt?: string;
  updatedAt?: string;
  assetUrl?: string;
};

export const resources: Resource[] = [
  {
    slug: "is-a-business-idea-worth-pursuing",
    title: "How Do You Know If a Business Idea Is Worth Pursuing?",
    summary: "A practical framework for assessing a business idea before investing significant time or money.",
    category: "ideas",
    type: "Article",
    status: "published",
    editorialApproved: true,
    readingTime: "7 min read",
    introduction: "Most business ideas sound reasonable in conversation. Far fewer survive contact with real customers. The difference between an idea worth pursuing and one worth setting aside is rarely how clever it sounds — it is whether a specific group of people has a problem they care enough about to solve. This article offers a practical way to assess an idea before you commit serious time or money to it.",
    sections: [
      {
        heading: "An interesting idea is not the same as a meaningful problem",
        paragraphs: [
          "Ideas usually start as solutions: an app, a service, a product. Problems start with people. A meaningful customer problem has three qualities: it is specific enough to describe, it affects a group of people you can actually reach, and it costs them something — time, money, effort or frustration — that they would prefer not to lose.",
          "A useful test is to rewrite your idea as a problem statement. Instead of \"an app that helps clinics manage appointments\", write \"reception staff at small clinics lose hours each week rescheduling appointments by phone\". The second version can be checked. The first cannot.",
        ],
      },
      {
        heading: "Who experiences the problem?",
        paragraphs: [
          "Name the people who feel the problem most directly. Be as specific as you can: not \"small businesses\" but \"owners of independent dental practices with two to five chairs\". The narrower your description, the easier it becomes to find these people, speak with them and recognise whether their experiences match your assumption.",
          "Also note who else is involved. In many purchases the person who experiences the problem is not the person who pays for the solution. A clinic's receptionist feels the scheduling pain; the practice owner signs the cheque. You will need to understand both.",
        ],
      },
      {
        heading: "How do people solve it today?",
        paragraphs: [
          "Every real problem already has a solution, even if that solution is a spreadsheet, a phone call, a workaround or simply putting up with it. These existing alternatives are your true competition — not other startups.",
          "If people have built workarounds, pay for partial solutions or complain regularly, that is encouraging evidence. If they shrug and say the problem rarely comes up, that is evidence too — and it is telling you the problem may not be urgent enough to build a business around.",
        ],
      },
      {
        heading: "Conduct initial customer discovery",
        paragraphs: [
          "Before building anything, speak with ten to fifteen people who match your description of the customer. Ask about their past behaviour rather than their opinions of your idea: how they handled the problem most recently, what it cost them, what they have tried.",
          "Discovery conversations are not sales pitches. The goal is to learn whether the problem is real, frequent and expensive enough to matter — not to collect compliments.",
        ],
      },
      {
        heading: "Evidence that supports or weakens the opportunity",
        paragraphs: [
          "Supporting evidence looks like: people describe the problem without prompting, they have spent money or significant time on alternatives, they ask when they can try your solution, and they introduce you to others with the same problem. Weakening evidence looks like: polite encouragement without specifics, no current spending on the problem, and difficulty finding anyone who experiences it regularly.",
          "Treat both kinds as useful. Weak evidence gathered early is far cheaper than weak evidence gathered after you have built something.",
        ],
      },
      {
        heading: "A practical decision checklist",
        paragraphs: [
          "Before committing to the next stage of work, check whether you can answer yes to most of the following: I can name a specific group of people with this problem. I have spoken to at least ten of them. They describe the problem as frequent or costly. They already spend time or money addressing it. I understand who would pay and why. I can reach these people through channels available to me.",
          "If several answers are no, the honest options are to revise the idea, narrow the customer group, or stop and redirect your energy. Stopping is not failure — it is the framework working as intended.",
        ],
        example: "Example: a professional considers building a training platform for warehouse supervisors. After twelve conversations, she learns supervisors do struggle with onboarding — but their companies already pay for a generic course they consider adequate. The problem is real but not urgent. She narrows her focus to safety-certification tracking, where the same interviews reveal genuine spending and frustration, and tests that instead.",
      },
    ],
    nextSteps: [
      "Write your idea as a problem statement naming a specific group of people.",
      "List how those people solve the problem today, including workarounds.",
      "Arrange ten discovery conversations before building anything.",
      "Score the idea against the decision checklist and decide: continue, revise or stop.",
    ],
    relatedSlugs: ["interview-potential-customers", "test-whether-customers-will-pay", "mvp-prototype-or-pilot"],
    programLink: true,
  },
  {
    slug: "interview-potential-customers",
    title: "How to Interview Potential Customers Without Leading Them",
    summary: "Learn to run customer discovery conversations that produce evidence rather than polite encouragement.",
    category: "customers",
    type: "Practical guide",
    status: "published",
    editorialApproved: true,
    readingTime: "8 min read",
    introduction: "Customer interviews are the cheapest research tool a founder has — and the easiest to get wrong. Ask the wrong questions and people will tell you what you want to hear. Ask about real past behaviour and they will tell you what you need to know. This guide covers how to find interviewees, what to ask, what to avoid and how to turn conversations into evidence.",
    sections: [
      {
        heading: "Why customer discovery matters",
        paragraphs: [
          "Every new venture rests on assumptions: that a problem exists, that it matters, that people will pay to solve it. Interviews are how you test those assumptions before they become expensive. Twenty honest conversations can save months of building the wrong thing.",
          "Discovery is not market research in the survey sense. You are not measuring how many people like an idea. You are trying to understand how specific people experience a specific problem today.",
        ],
      },
      {
        heading: "Identify relevant interviewees",
        paragraphs: [
          "Start from your problem statement: who experiences this problem most directly? Look for people who match that description, not people who are simply easy to reach. Friends and family are convenient but rarely representative, and they are the most likely to encourage you regardless of the truth.",
          "Professional networks, industry groups, online communities and warm introductions all work. Aim for ten to fifteen conversations to start. If the people you can reach easily do not match your intended customer, that gap is itself important information about how hard the market will be to reach.",
        ],
      },
      {
        heading: "Ask about past behaviour, not future intentions",
        paragraphs: [
          "The single most useful rule in customer discovery: ask about what people have done, not what they say they would do. \"Tell me about the last time this happened\" produces a story with details. \"Would you use a tool that solved this?\" produces a guess, usually a polite one.",
          "Good questions include: When did you last run into this problem? What did you do about it? How long did that take? What did it cost? What have you tried before? These questions surface facts. Opinions about hypothetical products do not.",
        ],
      },
      {
        heading: "Questions that reveal workarounds and costs",
        paragraphs: [
          "Workarounds are gold. When someone has built a spreadsheet, hired help or invented a routine to cope with a problem, they are showing you the problem matters enough to act on. Ask: How do you handle this today? What would happen if you just ignored it? Have you ever paid to make this easier?",
          "The cost of the problem — in money, time or frustration — tells you what a solution might be worth. A problem that costs someone twenty minutes a month cannot support an expensive product. A problem that costs a team two days a month might.",
        ],
      },
      {
        heading: "Avoid leading and hypothetical questions",
        paragraphs: [
          "Leading questions smuggle your hopes into the conversation: \"Don't you think this is frustrating?\", \"Wouldn't it be great if...?\". Hypothetical questions invite fantasy: \"Would you pay for...?\". Both produce answers that feel encouraging and mean very little.",
          "If you catch yourself explaining your idea in the first fifteen minutes, stop. The moment you pitch, the interview becomes a politeness exercise. Save the idea for the end, if you mention it at all, and treat the reaction as a weak signal compared with everything said before it.",
        ],
      },
      {
        heading: "Record findings and separate evidence from assumptions",
        paragraphs: [
          "Write notes immediately after each conversation: the actual words used, the stories told, the numbers mentioned. Then, separately, record your interpretation. Mixing the two is how founders convince themselves that five compliments equal demand.",
          "After ten conversations, look for patterns. Which parts of the problem came up unprompted, again and again? Where did accounts contradict your assumptions? Evidence is what multiple people independently described. Everything else remains an assumption awaiting its own test.",
        ],
      },
      {
        heading: "A sample interview guide",
        paragraphs: [
          "A simple structure for a thirty-minute conversation: open with context (\"I'm researching how small clinics handle appointment scheduling — I'm not selling anything\"), then move through past behaviour (\"Tell me about the last time a scheduling problem caused trouble\"), current approach (\"How do you handle it today?\"), costs (\"What does that cost you in time or money?\"), and close with a referral request (\"Who else should I talk to about this?\").",
        ],
        example: "Sample questions: 1) Tell me about the last time you faced this problem. 2) What did you do about it? 3) How often does it come up? 4) What have you tried before, and how did that go? 5) What does the current approach cost you? 6) If you could wave a wand, what would change? 7) Who else experiences this that I should speak with?",
      },
    ],
    nextSteps: [
      "Write down the three assumptions your idea depends on most.",
      "List ten people who genuinely match your intended customer and request conversations.",
      "Draft your questions around past behaviour using the sample guide above.",
      "After each interview, record what was said separately from what you think it means.",
    ],
    relatedSlugs: ["is-a-business-idea-worth-pursuing", "test-whether-customers-will-pay"],
  },
  {
    slug: "test-whether-customers-will-pay",
    title: "How to Test Whether Customers Will Actually Pay",
    summary: "Understand the difference between positive feedback and evidence of genuine demand.",
    category: "customers",
    type: "Practical guide",
    status: "published",
    editorialApproved: true,
    readingTime: "7 min read",
    introduction: "\"I'd definitely use that\" is easy to say and costs nothing. Payment is different: it is the moment a customer's interest becomes a decision with consequences. Testing willingness to pay early — before you build — is the strongest signal you can gather about whether an idea can become a business. This guide explains how to test it honestly.",
    sections: [
      {
        heading: "Positive feedback is not buying intent",
        paragraphs: [
          "People are kind, and enthusiasm is free. Praise for your idea tells you the conversation went well; it does not tell you anyone will pay. The gap between \"great idea\" and \"here is my money\" is where most ventures fail.",
          "The only reliable evidence of demand is commitment: money paid, a signed pilot agreement, a deposit, or at minimum time and effort invested that the customer would not have spent otherwise. Design your tests to ask for commitment, not applause.",
        ],
      },
      {
        heading: "Identify the user, the buyer and the decision-maker",
        paragraphs: [
          "In many markets these are different people. A nurse uses the software, the hospital administrator buys it, and a committee approves the budget. Your willingness-to-pay test must reach the person who actually controls the money, not just the person who likes the product.",
          "Map these roles before you test. If you cannot get in front of the real buyer, treat every positive signal from other roles as provisional.",
        ],
      },
      {
        heading: "Understand current spending and alternatives",
        paragraphs: [
          "The strongest predictor of future spending is current spending. If customers already pay for alternatives — competitors, consultants, overtime, workarounds — you know money exists for this problem. Your question becomes whether your offer is better enough to switch.",
          "If nobody spends anything on the problem today, ask why. Sometimes you have found an untouched opportunity. More often, you have found a problem people do not consider worth paying to solve.",
        ],
      },
      {
        heading: "Ways to test willingness to pay",
        paragraphs: [
          "Tests range from weak to strong. Weaker: discussing pricing in interviews (\"What do you currently pay? What would this need to do to be worth that?\"). Stronger: a pilot offer with a real price, a paid trial, a pre-order or deposit, a letter of intent from a business customer.",
          "A paid pilot is often the best early test for a new venture. It is small enough for a customer to approve, real enough to count as evidence, and it generates the usage feedback you need anyway. Price it honestly — a free pilot proves far less than a modestly priced one.",
        ],
      },
      {
        heading: "Interpreting weak or contradictory evidence",
        paragraphs: [
          "Mixed signals are normal. Some interviewees love the idea but baulk at the price; others pay readily but want changes. Look for the pattern: is hesitation about the price level, the value, or the problem itself? Each points to a different fix — repricing, repositioning or reconsidering the opportunity.",
          "Be suspicious of unanimous enthusiasm; it usually means your sample is too friendly. Be equally careful about a single rejection; one \"no\" is an anecdote, ten are a finding.",
        ],
      },
      {
        heading: "A simple validation worksheet",
        paragraphs: [
          "For each demand test, record: who you tested with (user, buyer or decision-maker), what commitment you asked for, what they actually did, the price discussed, and what happened next. Then rate the evidence: paid commitment, signed intent, verbal interest, or politeness.",
          "Set your bar in advance. For example: \"I will proceed if at least three of ten approached customers agree to a paid pilot.\" Deciding the threshold before you run the test protects you from moving the goalposts afterwards.",
        ],
        example: "Example: a founder testing a compliance-checklist service for small exporters offers a four-week paid pilot at a modest fee to eight businesses she interviewed. Three accept, two ask to revisit next quarter, three decline. Three paying pilots is real demand evidence — and the five non-conversions tell her exactly which objections to work on.",
      },
    ],
    nextSteps: [
      "Map the user, buyer and decision-maker for your offer.",
      "Find out what customers currently spend on the problem, including workarounds.",
      "Design one test that asks for a real commitment — a paid pilot, deposit or signed intent.",
      "Set your pass threshold before you run the test, then follow it.",
    ],
    relatedSlugs: ["interview-potential-customers", "mvp-prototype-or-pilot", "calculate-business-break-even"],
    programLink: true,
  },
  {
    slug: "mvp-prototype-or-pilot",
    title: "MVP, Prototype or Pilot: What Should You Build First?",
    summary: "Choose an appropriate way to test a solution before committing to a larger build.",
    category: "building",
    type: "Article",
    status: "published",
    editorialApproved: true,
    readingTime: "7 min read",
    introduction: "Prototype, MVP and pilot are often used interchangeably, but they answer different questions and cost different amounts of time and money. Choosing the wrong one means either testing too little (building the full product on faith) or testing too slowly (polishing a prototype when customers are waiting). This article explains what each term means and how to choose the smallest useful test for your situation.",
    sections: [
      {
        heading: "What each term actually means",
        paragraphs: [
          "A prototype is a representation of the solution: a mock-up, a clickable design, a manual demonstration. It answers \"can people understand and react to this?\" A minimum viable product (MVP) is the smallest version that actually delivers the core value to a real user. It answers \"will people use this?\" A pilot is a time-boxed, real-world trial of your offer with an actual customer, often delivered partly by hand. It answers \"will someone pay for this, and does it work in their environment?\"",
        ],
      },
      {
        heading: "When each is appropriate",
        paragraphs: [
          "Use a prototype when the main uncertainty is comprehension or desirability — you need reactions before anything exists. Use an MVP when you understand the problem and need to learn whether people will actually use a working version. Use a pilot when the question is commercial or operational: will a customer pay, and can you deliver the value in their real setting?",
          "The sequence is usually prototype, then MVP or pilot — but the order matters less than matching the test to the question. If your biggest risk is demand, a paid pilot beats a polished MVP every time.",
        ],
      },
      {
        heading: "How much effort each should require",
        paragraphs: [
          "A prototype should take days, not months. If it takes longer, you are building a product, not a prototype. An MVP should take weeks and do one thing adequately rather than ten things poorly. A pilot should be scoped to a fixed period — typically four to twelve weeks — with agreed success criteria and a price, even if modest.",
          "A useful rule: each stage should cost roughly an order of magnitude more than the last, and each should only happen because the previous stage produced evidence that justifies it.",
        ],
      },
      {
        heading: "What question each should answer",
        paragraphs: [
          "Before building anything, write down the single question the test must answer. \"Will clinic managers understand the dashboard?\" suggests a prototype. \"Will they log in weekly?\" suggests an MVP. \"Will the clinic pay for this after a month?\" suggests a pilot.",
          "If you cannot name the question, you are not testing — you are just building. And if the question is \"will they pay?\", no amount of free usage will answer it.",
        ],
      },
      {
        heading: "Examples across software, services and B2B",
        paragraphs: [
          "Software: a founder sketches the three core screens as a clickable mock-up (prototype), then builds a single-feature version using no-code tools (MVP), then runs it with two design partners for six weeks (pilot). Service: a consultant delivers the service manually to one client at a reduced fee before productising anything — the manual delivery is the pilot. B2B product: a hardware-adjacent venture assembles ten units by hand and places them with a friendly customer under a paid trial agreement.",
        ],
        example: "Example: a professional wants to build a reporting tool for logistics firms. Instead of developing software, she offers to produce the reports herself for one firm for a month, using spreadsheets. The firm pays a small fee, she learns exactly which reports matter, and only then does she scope what to automate. Her \"pilot\" was a service; the product came later.",
      },
      {
        heading: "Common mistakes, and choosing the smallest useful test",
        paragraphs: [
          "The most common mistakes: building a full product and calling it an MVP; running free pilots that prove nothing about willingness to pay; polishing prototypes long after the comprehension question is answered; and skipping straight to building because testing feels slow.",
          "To choose, ask three questions. What is my biggest uncertainty — comprehension, usage or payment? What is the cheapest test that could answer it? What evidence would make me proceed to the next stage? Then build exactly that test and no more.",
        ],
      },
    ],
    nextSteps: [
      "Write down the single biggest uncertainty in your venture today.",
      "Choose the cheapest test — prototype, MVP or pilot — that could answer it.",
      "Define in advance what result would justify the next stage of investment.",
      "If the question is about payment, make sure the test involves a real price.",
    ],
    relatedSlugs: ["test-whether-customers-will-pay", "is-a-business-idea-worth-pursuing", "calculate-business-break-even"],
  },
  {
    slug: "calculate-business-break-even",
    title: "How to Calculate the Break-Even Point for a New Business",
    summary: "Understand the relationship between pricing, costs and the sales needed to cover expenses.",
    category: "finance",
    type: "Practical guide",
    status: "published",
    editorialApproved: true,
    readingTime: "6 min read",
    introduction: "Break-even analysis answers a deceptively simple question: how much do you need to sell before the business stops losing money? It will not tell you whether your idea is good, but it will tell you whether your numbers can work — and it often reveals that a venture needs far more sales, or a very different price, than the founder assumed.",
    sections: [
      {
        heading: "Fixed costs and variable costs",
        paragraphs: [
          "Fixed costs are expenses you pay regardless of how much you sell: rent, salaries, software subscriptions, insurance. Variable costs rise with each sale: materials, delivery, payment processing, commissions.",
          "Classify your costs honestly. Some sit between the two — a support hire is fixed until volume forces another hire — but for a first pass, put each cost in the bucket it behaves most like.",
        ],
      },
      {
        heading: "Price and contribution per sale",
        paragraphs: [
          "The contribution per sale is what remains from the selling price after covering the variable cost of that sale. It is the amount each unit sold contributes towards paying the fixed costs.",
          "If you sell a service package for Rs 10,000 and each delivery costs Rs 4,000 in variable expenses, your contribution per sale is Rs 6,000. Every sale pays down Rs 6,000 of fixed costs.",
        ],
      },
      {
        heading: "The break-even formula",
        paragraphs: [
          "Break-even units = Fixed costs ÷ (Selling price per unit − Variable cost per unit)",
          "The formula assumes a positive contribution per unit — that you sell for more than the variable cost of each sale. If that is not true, no volume will save the business; more sales simply lose money faster. The result must also be interpreted in the context of your business model: break-even units only matter if the market can realistically deliver that volume.",
        ],
      },
      {
        heading: "A worked example",
        paragraphs: [
          "Imagine a small training venture. Monthly fixed costs — platform, part-time support, marketing — come to Rs 1,80,000. Each seat sells for Rs 12,000, with variable costs of Rs 3,000 per seat, giving a contribution of Rs 9,000 per seat.",
          "Break-even units = 1,80,000 ÷ 9,000 = 20 seats per month. Break-even revenue = 20 × 12,000 = Rs 2,40,000 per month. Now the useful question: is selling 20 seats a month realistic for this venture, at this price, through the channels available? The formula gives you the number; judgement tells you whether the number is achievable.",
        ],
        example: "Sensitivity check: if the price drops to Rs 10,000, contribution falls to Rs 7,000 and break-even rises to about 26 seats. If variable costs rise to Rs 4,000, break-even rises to about 23 seats. Small changes in price or cost move the break-even point more than most founders expect.",
      },
      {
        heading: "Limitations of break-even analysis",
        paragraphs: [
          "Break-even assumes a single price, stable costs and that everything produced is sold. Real businesses have discounts, cost steps and unsold capacity. It also says nothing about timing: a venture can be past break-even on paper and still run out of cash waiting for customers to pay.",
          "Use break-even as a sanity check, not a forecast. Pair it with cash-flow thinking — when money actually arrives and leaves — before making commitments.",
        ],
      },
      {
        heading: "A simple worksheet for your own venture",
        paragraphs: [
          "On one page, write: your monthly fixed costs; your selling price; your variable cost per sale; your contribution per sale; your break-even units and revenue. Then answer three questions: Can the market plausibly deliver this volume? How long would it take to reach it? What happens to break-even if the price is 15% lower or costs 15% higher?",
          "If break-even requires volume you cannot imagine reaching, the levers are price, variable cost, fixed cost or the model itself. Better to pull those levers on a worksheet than in a running business.",
        ],
      },
    ],
    nextSteps: [
      "List your fixed and variable costs and compute your contribution per sale.",
      "Calculate your break-even units and revenue using the formula above.",
      "Stress-test the result: recompute with a lower price and higher costs.",
      "Ask whether the required volume is realistic, and what you would change if it is not.",
    ],
    relatedSlugs: ["test-whether-customers-will-pay", "mvp-prototype-or-pilot"],
  },
  {
    slug: "build-a-business-alongside-employment",
    title: "How to Build a Business While Keeping Your Full-Time Job",
    summary: "Explore how to structure early validation and venture-building alongside employment.",
    category: "legal",
    type: "Article",
    status: "published",
    editorialApproved: true,
    readingTime: "8 min read",
    introduction: "For many experienced professionals, the sensible route into entrepreneurship is not a dramatic resignation — it is testing an idea while employed, and letting evidence decide when (or whether) to make the leap. Done well, this approach reduces financial risk and produces a better-informed decision. Done carelessly, it can create conflicts with your employer. This article covers how to structure the effort responsibly.",
    sections: [
      {
        heading: "Set a realistic weekly time budget",
        paragraphs: [
          "Eight to twelve hours a week is a workable range for most people: a few evenings and part of a weekend. What matters is consistency, not heroics. A sustainable ten hours every week will outproduce an unsustainable thirty-hour burst followed by a month of exhaustion.",
          "Protect the time explicitly. Put venture hours in your calendar like meetings, and agree boundaries with your family so the commitment is understood rather than resented.",
        ],
      },
      {
        heading: "Choose a small, testable problem",
        paragraphs: [
          "Alongside a job, you cannot afford a sprawling idea. Choose a problem narrow enough to test in weeks: one customer group, one painful problem, one simple offer. Your industry knowledge is an advantage here — the problems you already understand deeply are the ones you can test fastest.",
          "A good filter: could you run a meaningful customer interview or a small paid pilot within the next month, using only the hours you have? If not, narrow the scope until the answer is yes.",
        ],
      },
      {
        heading: "Do customer discovery before substantial investment",
        paragraphs: [
          "The biggest financial risk for an employed founder is spending money before learning. Interviews, problem research and simple landing-page tests cost little more than time. Development, incorporation, branding and inventory all cost real money — and none of them answer the question of whether anyone wants what you are building.",
          "Sequence deliberately: conversations first, then a small paid test, then — only if the evidence supports it — larger investment.",
        ],
      },
      {
        heading: "Separate personal and business finances from day one",
        paragraphs: [
          "Even before formal incorporation, track every rupee the venture spends and earns separately from your personal accounts. A dedicated bank account (once you have an entity) and a simple spreadsheet (before then) prevent confusion, make tax time survivable and give you an honest picture of what the experiment costs.",
          "Decide in advance how much personal money you are willing to put at risk in total, and treat that number as a hard limit rather than a starting suggestion.",
        ],
      },
      {
        heading: "Review your employment contract and obligations",
        paragraphs: [
          "Many employment contracts include clauses about outside work, intellectual property, non-competition and confidentiality. Read yours before you begin. What you build in your own time may still be claimed by your employer in some circumstances, depending on your contract, your role and applicable law.",
          "Employment restrictions and legal obligations depend on your individual circumstances and jurisdiction, and this article cannot provide legal advice. If your contract contains IP assignment, moonlighting or non-compete clauses, consider consulting a qualified lawyer before investing significant effort. In some cases, an honest conversation with your employer is the safest path.",
        ],
      },
      {
        heading: "Protect confidential information and intellectual property",
        paragraphs: [
          "Never use your employer's time, equipment, data, documents or contacts for your venture. Keep the separation clean: your own devices, your own hours, your own materials. Build your venture in a domain that does not compete with your employer unless you have explicit clearance.",
          "Document when and how you developed your own ideas. Contemporaneous records — dated notes, personal repositories, emails to yourself — help establish that your work is yours if the question ever arises.",
        ],
      },
      {
        heading: "Avoid premature hiring and unnecessary development",
        paragraphs: [
          "Alongside a job, complexity is your enemy. Every hire, vendor and tool adds management overhead you do not have time for. Use no-code tools, freelancers for defined tasks and your own manual effort before building a team.",
          "The question to ask before any spending: does this help me learn whether the venture works, or does it just make the venture feel more real? Pay for learning. Defer everything else.",
        ],
      },
      {
        heading: "Set evidence-based milestones for the next decision",
        paragraphs: [
          "Decide in advance what evidence would justify each escalation: what would justify spending money, what would justify going part-time, what would justify resigning. For example: \"I will consider leaving my job when the venture has five paying customers and three months of personal runway saved.\"",
          "Written milestones protect you from both directions — from quitting too early on enthusiasm, and from never quitting because the comfortable moment never feels certain. The goal of building alongside employment is not to stay forever; it is to make the leap, when it comes, an informed decision rather than a gamble.",
        ],
        example: "Example: a senior manager spends six months testing a compliance-training idea in ten hours a week: twenty customer interviews, then a paid pilot with two firms. The evidence is strong. Only then does she incorporate, and she resigns four months later with eight paying customers and a written transition plan. Each step was triggered by evidence, not impatience.",
      },
    ],
    nextSteps: [
      "Block a realistic weekly time budget in your calendar.",
      "Read your employment contract for IP, moonlighting and non-compete clauses; take legal advice if anything is unclear.",
      "Choose one narrow problem you can test within a month using only your available hours.",
      "Write down the evidence milestones that would justify each next step, up to and including resignation.",
    ],
    relatedSlugs: ["is-a-business-idea-worth-pursuing", "interview-potential-customers", "test-whether-customers-will-pay"],
    programLink: true,
  },
];

export function isPublishedResource(resource: Resource) {
  return resource.status === "published" && resource.editorialApproved &&
    resource.introduction.trim().length > 0 && resource.sections.length > 0 &&
    resource.sections.every(section => section.heading.trim().length > 0 && section.paragraphs.some(paragraph => paragraph.trim().length > 0)) &&
    resource.nextSteps.some(step => step.trim().length > 0) &&
    (!["Worksheet", "Template", "Video"].includes(resource.type) || Boolean(resource.assetUrl));
}

export function getPublishedResources(source: Resource[] = resources) {
  return source.filter(isPublishedResource);
}
export function findPublishedResource(slug: string) {
  return getPublishedResources().find(resource => resource.slug === slug);
}

// Set only to the verified published/custom origin, never the draft preview origin.
export const PUBLIC_SITE_ORIGIN = "";
export function canonicalLinks(path: string) {
  return [{ rel: "canonical", href: PUBLIC_SITE_ORIGIN ? `${PUBLIC_SITE_ORIGIN}${path}` : path }];
}
export function publishedPagePaths() {
  return ["/", "/about", "/programs", "/experience-to-enterprise", "/contact", "/resources", ...getPublishedResources().map(resource => `/resources/${resource.slug}`)];
}

// Real sample asset required before exposing the download action.
export const SAMPLE_DOSSIER_URL = "";
export const SAMPLE_DISCLOSURE = "Illustrative example for demonstration purposes. Not an actual participant venture or program outcome.";
