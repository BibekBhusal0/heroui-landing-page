export const hero = {
  headline: "Launch Your Product Faster",
  subtext: "A clean, conversion-optimized landing page template built with HeroUI. Perfect for SaaS, apps, or tools.",
  cta: {
    text: "Get Started Free",
    link: "#"
  },
  image: "https://img.heroui.chat/image/dashboard?w=600&h=400&u=hero123"
};

export const features = [
  {
    title: "Fast Setup",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    icon: "lucide:rocket-launch"
  },
  {
    title: "Responsive Design",
    description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: "lucide:devices"
  },
  {
    title: "Fully Customizable",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    icon: "lucide:tools"
  },
  {
    title: "Built with HeroUI",
    description: "Templated with reusable, clean HeroUI components.",
    icon: "lucide:code"
  }
];

export const numbers = [
  {
    icon: "lucide:building", 
    title: "Trusted by",
    number: '50+',
    content: "Companies",
  },
  {
    icon: "lucide:users", 
    title: "Served over",
    number: '9000',
    content: "Clients",
  },
  {
    icon: "lucide:calendar",
    title: "In industry for",
    number: '4+',
    content: "years"
  }
];

export const testimonials = [
  {
    name: "Jane Doe",
    role: "Founder at LoremCo",
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
    image: "https://img.heroui.chat/image/avatar?w=100&h=100&u=jane"
  },
  {
    name: "John Smith",
    role: "CEO at IpsumTech",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
    image: "https://img.heroui.chat/image/avatar?w=100&h=100&u=john"
  },
  {
    name: "Sarah Johnson",
    role: "CTO at TechSolutions",
    text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.",
    image: "https://img.heroui.chat/image/avatar?w=100&h=100&u=sarah"
  }
];

export const pricing = {
  yearly_message: "save 60%",
  plans: [
    {
      title: "Basic",
      price: {monthly: "$30", yearly: "$300"},
      features: ["1 Project", "Basic Support", "Email Integration"],
      cta: "Choose Plan",
    },
    {
      title: "Pro",
      price: {monthly: "$50", yearly: "$500"},
      features: ["Unlimited Projects", "Priority Support", "Advanced Analytics"],
      cta: "Choose Plan",
      popular: true
    },
    {
      title: "Enterprise",
      price: {monthly: "$100", yearly: "$1000"},
      features: ["Unlimited Projects", "24/7 Support", "Custom Solutions", "Dedicated Account Manager"],
      cta: "Contact Sales",
    }
  ]
};

export const faqs = [
  {
    question: "Is there a free trial?",
    answer: "Yes, you can try it free for 7 days without a credit card."
  },
  {
    question: "Can I cancel anytime?",
    answer: "Absolutely. There are no contracts or cancellation fees."
  },
  {
    question: "Do you offer support?",
    answer: "Yes, our support team is available 24/7 via email or chat."
  },
  {
    question: 'Is this for real?',
    answer: "No this is just a template."
  }
];

export const ctaSection = {
  text: "Ready to get started?",
  button: {
    text: "Start Free Trial",
    link: "#"
  }
};

export const newsletterSignup = {
  heading: "Stay Updated!",
  subtext: "Subscribe to our newsletter for the latest news and offers.",
  placeholder: "Enter your email",
  buttonText: "Subscribe"
};

export const footer = {
  logo: "https://img.heroui.chat/image/ai?w=100&h=40&u=logo123",
  links: ["About", "Blog", "Privacy", "Terms"],
  socials: [
    { icon: "lucide:twitter", link: "#" },
    { icon: "lucide:github", link: "#" },
    { icon: "lucide:linkedin", link: "#" }
  ],
  contact: {
    location: "City, Country",
    phone: "123 456 789",
    email: "thisIsNot@email.com"
  }
};

// Special offer countdown data
export const specialOffer = {
  title: "Special Launch Offer",
  description: "Get 50% off for the first 3 months when you sign up today!",
  endTime: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24 hours from now
};

// Navigation links
export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Features", href: "#features" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Pricing", href: "#pricing" },
  { name: "FAQ", href: "#faq" },
];
