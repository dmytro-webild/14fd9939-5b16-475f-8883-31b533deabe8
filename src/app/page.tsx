"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureBento from '@/components/sections/feature/FeatureBento';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import HeroBillboardGallery from '@/components/sections/hero/HeroBillboardGallery';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';
import { Image, Maximize, Server, Shield, Users, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="shift-hover"
        defaultTextAnimation="background-highlight"
        borderRadius="rounded"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "Features",
          id: "features",
        },
        {
          name: "Pricing",
          id: "pricing",
        },
        {
          name: "FAQ",
          id: "faq",
        },
      ]}
      brandName="Bloom Free"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardGallery
      background={{
        variant: "sparkles-gradient",
      }}
      title="Unleash Creativity, Free for Everyone."
      description="Generate professional on-brand assets in seconds. The power of AI, completely free."
      mediaItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/woman-watching-business-conference-computer-screen-looking-statistics_482257-125563.jpg",
          imageAlt: "ai technology neural network",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/professional-person-engaging-with-ai-chatbot-computer-screen_482257-126263.jpg",
          imageAlt: "digital art interface holographic",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/modern-work-environment-empty-office-business-industry-enterprise-culture_482257-118995.jpg",
          imageAlt: "software dashboard clean",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/blurred-night-lights_23-2148139249.jpg",
          imageAlt: "Blurred night lights",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/server-room-computer-controlling-devices-used-high-speed-data-transfers_482257-124282.jpg",
          imageAlt: "Server room computer controlling devices used for high speed data transfers",
        },
      ]}
      mediaAnimation="slide-up"
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={true}
      heading={[
        {
          type: "text",
          content: "Design Without Boundaries",
        },
        {
          type: "image",
          src: "http://img.b2bpic.net/free-photo/creative-agency-production-department-office-workers-brainstorming-3d-project-ideas-asian-developer-african-american-colleague-developing-digital-art-using-modelling-software_482257-41667.jpg",
          alt: "digital design democratization",
        },
      ]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureBento
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "Lightning Generation",
          description: "High-speed AI output.",
          bentoComponent: "reveal-icon",
          icon: Zap,
          imageSrc: "http://img.b2bpic.net/free-vector/creative-watch-logo-templates_23-2148958953.jpg",
          imageAlt: "ai speed symbol",
        },
        {
          title: "Brand Sync",
          description: "Maintain consistency across assets.",
          bentoComponent: "reveal-icon",
          icon: Shield,
          imageSrc: "http://img.b2bpic.net/free-photo/woman-watching-business-conference-computer-screen-looking-statistics_482257-125563.jpg",
          imageAlt: "ai speed symbol",
        },
        {
          title: "Infinite Scale",
          description: "Export at any resolution.",
          bentoComponent: "reveal-icon",
          icon: Maximize,
          imageSrc: "http://img.b2bpic.net/free-photo/professional-person-engaging-with-ai-chatbot-computer-screen_482257-126263.jpg",
          imageAlt: "ai speed symbol",
        },
      ]}
      title="Features That Drive Growth"
      description="Powerful AI tools designed for modern creators, without the price tag."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardOne
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={true}
      metrics={[
        {
          id: "m1",
          value: "1M+",
          title: "Assets Generated",
          description: "Every single month",
          icon: Image,
        },
        {
          id: "m2",
          value: "200K+",
          title: "Happy Users",
          description: "Creative professionals",
          icon: Users,
        },
        {
          id: "m3",
          value: "99.9%",
          title: "Uptime",
          description: "Reliable creation",
          icon: Server,
        },
      ]}
      title="Powering Millions"
      description="Our community is growing every day."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardOne
      animationType="depth-3d"
      textboxLayout="default"
      useInvertedBackground={false}
      plans={[
        {
          id: "p1",
          badge: "Core",
          price: "$0",
          subtitle: "Always free",
          features: [
            "Full AI access",
            "Commercial rights",
            "Unlimited exports",
          ],
        },
        {
          id: "p2",
          badge: "Pro",
          price: "$0",
          subtitle: "Forever free",
          features: [
            "Advanced models",
            "API access",
            "Priority queue",
          ],
        },
        {
          id: "p3",
          badge: "Team",
          price: "$0",
          subtitle: "Scale free",
          features: [
            "Shared workspaces",
            "Unified brands",
            "Team analytics",
          ],
        },
      ]}
      title="Transparently Free"
      description="Zero costs, zero limits on creativity."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSix
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "t1",
          name: "Alice D.",
          handle: "@aliced",
          testimonial: "Truly the best free alternative to professional AI platforms.",
          imageSrc: "http://img.b2bpic.net/free-photo/man-is-working-cafe-concept-freelancing-coffee-laptop_1321-898.jpg",
        },
        {
          id: "t2",
          name: "Mark S.",
          handle: "@marks",
          testimonial: "Incredible features for a completely free service.",
          imageSrc: "http://img.b2bpic.net/free-photo/young-stylish-asian-woman-business-owner-glasses-sitting-cafe-with-notebook-smiling-camera_1258-199055.jpg",
        },
        {
          id: "t3",
          name: "Chloe R.",
          handle: "@chloer",
          testimonial: "I scaled my design studio overnight using this.",
          imageSrc: "http://img.b2bpic.net/free-photo/graphic-designer-sketching-logo_23-2149142122.jpg",
        },
        {
          id: "t4",
          name: "James V.",
          handle: "@jamesv",
          testimonial: "Simple, powerful, and accessible to everyone.",
          imageSrc: "http://img.b2bpic.net/free-photo/happy-employee_1098-16109.jpg",
        },
        {
          id: "t5",
          name: "Sarah L.",
          handle: "@sarahl",
          testimonial: "Finally, professional tools without the paywall.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-handsome-bearded-man-suit_23-2149705921.jpg",
        },
      ]}
      title="Loved by Creators"
      description="Hear what our community says."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "f1",
          title: "Is it really free?",
          content: "Yes, completely free forever.",
        },
        {
          id: "f2",
          title: "Can I use for business?",
          content: "Yes, commercial rights are included.",
        },
        {
          id: "f3",
          title: "How do you sustain it?",
          content: "We are community-funded and open-source.",
        },
      ]}
      title="Questions Answered"
      description="Find everything you need to know."
      faqsAnimation="opacity"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={true}
      background={{
        variant: "plain",
      }}
      tag="Get Started"
      title="Start Creating Today"
      description="Join thousands of creators."
      buttons={[
        {
          text: "Launch App",
          href: "#",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseCard
      logoText="Bloom Free"
      columns={[
        {
          title: "Company",
          items: [
            {
              label: "About",
              href: "#",
            },
            {
              label: "Careers",
              href: "#",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy",
              href: "#",
            },
            {
              label: "Terms",
              href: "#",
            },
          ],
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
