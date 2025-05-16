
export interface Hero {
  headline: string;
  subtext?: string;
  cta: {
    text: string;
    link: string;
  };
  image: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export interface NumberCard {
  icon: string;
  title: string;
  number: string | number;
  content?: string;
}

export interface Testimonial {
  name: string;
  role?: string;
  stars?: 0 | 1 | 2 | 3 | 4 | 5;
  text: string;
  image: string;
}

export interface PricingPlan {
  title: string;
  price: { monthly: string; yearly: string };
  features: string[];
  cta: string;
}

export interface Pricing {
  yearly_message?: string;
  highlight?: { title: string; message: string };
  plans: PricingPlan[];
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface CTASection {
  text: string;
  button: {
    text: string;
    link: string;
  };
}

export interface NewsletterSignup {
  heading: string;
  subtext: string;
  placeholder: string;
  buttonText: string;
}

export interface FooterLink {
  icon?: string;
  link: string;
}

export interface Footer {
  logo: string;
  links: string[];
  socials: FooterLink[];
  contact: {
    location: string;
    phone: string;
    email: string;
  };
}

export interface SpecialOffer {
  title: string;
  description: string;
  endTime: Date;
}

export interface NavLink {
  name: string;
  href: string;
}

export interface HeaderButtons {
  text: string;
  href?: string;
  variant?: 'solid' | 'faded' | 'bordered' | 'light' | 'flat' | 'ghost' | 'shadow'
}
