'use client'
import { LandingCTA } from '@/designSystem/landing/LandingCTA'
import { LandingContainer } from '@/designSystem/landing/LandingContainer'
import LandingFAQ from '@/designSystem/landing/LandingFAQ'
import { LandingFeatures } from '@/designSystem/landing/LandingFeatures'
import { LandingHero } from '@/designSystem/landing/LandingHero'
import { LandingHowItWorks } from '@/designSystem/landing/LandingHowItWorks'
import { LandingPainPoints } from '@/designSystem/landing/LandingPainPoints'
import { LandingPricing } from '@/designSystem/landing/LandingPricing'
import { LandingSocialProof } from '@/designSystem/landing/LandingSocialProof'
import { LandingSocialRating } from '@/designSystem/landing/LandingSocialRating'
import { LandingTestimonials } from '@/designSystem/landing/LandingTestimonials'
import {
  RobotOutlined,
  ThunderboltOutlined,
  DollarOutlined,
  ClockCircleOutlined,
  LineChartOutlined,
  GlobalOutlined,
} from '@ant-design/icons'

export default function LandingPage() {
  const features = [
    {
      heading: `AI-Powered Conversations`,
      description: `Create intelligent agents that engage customers with human-like interactions across multiple platforms.`,
      icon: <RobotOutlined />,
    },
    {
      heading: `One-Click Deployment`,
      description: `Launch your custom AI agents instantly, no coding required.`,
      icon: <ThunderboltOutlined />,
    },
    {
      heading: `Cost-Effective Solution`,
      description: `Reduce customer service costs by up to 30% while improving satisfaction.`,
      icon: <DollarOutlined />,
    },
    {
      heading: `24/7 Availability`,
      description: `Provide round-the-clock support to your customers, enhancing their experience.`,
      icon: <ClockCircleOutlined />,
    },
    {
      heading: `Real-Time Analytics`,
      description: `Track performance and gain insights to continuously improve your AI agents.`,
      icon: <LineChartOutlined />,
    },
    {
      heading: `Multi-Platform Integration`,
      description: `Seamlessly deploy your AI agents on WhatsApp, Facebook, and Instagram.`,
      icon: <GlobalOutlined />,
    },
  ]

  const testimonials = [
    {
      name: `Sarah Thompson`,
      designation: `Marketing Director, TechStart Inc.`,
      content: `The AI Agent Builder transformed our customer service. We're now handling 3x more inquiries with 99% customer satisfaction!`,
      avatar: 'https://randomuser.me/api/portraits/women/6.jpg',
    },
    {
      name: `John Martinez`,
      designation: `CEO, GrowFast Solutions`,
      content: `As a non-tech person, I never thought I could create AI agents. This platform made it so easy, our sales have increased by 40%!`,
      avatar: 'https://randomuser.me/api/portraits/men/7.jpg',
    },
    {
      name: `Emily Chen`,
      designation: `E-commerce Entrepreneur`,
      content: `The AI agents have been a game-changer for my online store. They've boosted our conversion rates and customer retention significantly.`,
      avatar: 'https://randomuser.me/api/portraits/women/27.jpg',
    },
    {
      name: `Michael Brown`,
      designation: `Customer Success Manager, CloudServe`,
      content: `We've cut our response times by 80% and our team can now focus on complex issues. This tool is a must-have for any growing business.`,
      avatar: 'https://randomuser.me/api/portraits/men/12.jpg',
    },
    {
      name: `Lisa Patel`,
      designation: `Digital Marketing Consultant`,
      content: `I've recommended the AI Agent Builder to all my clients. It's user-friendly and delivers real results in customer engagement.`,
      avatar: 'https://randomuser.me/api/portraits/women/32.jpg',
    },
    {
      name: `David Wilson`,
      designation: `Founder, InnovateTech`,
      content: `This platform allowed us to scale our support without hiring more staff. It's been crucial for our rapid growth and maintaining quality.`,
      avatar: 'https://randomuser.me/api/portraits/men/17.jpg',
    },
  ]

  const navItems = [
    {
      title: `Features`,
      link: `#features`,
    },
    {
      title: `Pricing`,
      link: `#pricing`,
    },
    {
      title: `FAQ`,
      link: `#faq`,
    },
  ]

  const packages = [
    {
      title: `Starter`,
      description: `Perfect for small businesses just getting started with AI`,
      monthly: 49,
      yearly: 470,
      features: [`1 AI Agent`, `1,000 conversations/month`, `Basic analytics`],
    },
    {
      title: `Growth`,
      description: `Ideal for growing businesses with increasing customer interactions`,
      monthly: 99,
      yearly: 950,
      features: [
        `3 AI Agents`,
        `10,000 conversations/month`,
        `Advanced analytics`,
        `Priority support`,
      ],
      highlight: true,
    },
    {
      title: `Enterprise`,
      description: `Tailored solutions for large-scale operations`,
      monthly: 249,
      yearly: 2390,
      features: [
        `Unlimited AI Agents`,
        `Unlimited conversations`,
        `Custom integrations`,
        `Dedicated account manager`,
      ],
    },
  ]

  const questionAnswers = [
    {
      question: `Do I need coding skills to use the AI Agent Builder?`,
      answer: `Not at all! Our platform is designed to be user-friendly and intuitive. You can create and deploy sophisticated AI agents without any coding knowledge.`,
    },
    {
      question: `How quickly can I get my AI agent up and running?`,
      answer: `With our one-click deployment, you can have your AI agent live within minutes. The setup process is straightforward and guided.`,
    },
    {
      question: `Can I customize the AI agent's responses?`,
      answer: `Absolutely! You can easily customize your AI agent's responses to align with your brand voice and specific customer needs.`,
    },
    {
      question: `What platforms can I deploy my AI agent on?`,
      answer: `Currently, you can deploy your AI agents on WhatsApp, Facebook, and Instagram. We're constantly working on adding more platforms.`,
    },
  ]

  const logos = [
    { url: 'https://i.imgur.com/afwBIFK.png' },
    { url: 'https://i.imgur.com/LlloOPa.png' },
    { url: 'https://i.imgur.com/j8jPb4H.png' },
    { url: 'https://i.imgur.com/mJ1sZFv.png' },
  ]

  const steps = [
    {
      heading: `Define Your Requirements`,
      description: `Easily input your business needs and goals for the AI agent.`,
    },
    {
      heading: `Choose Functionalities`,
      description: `Select from a range of powerful features to customize your AI agent.`,
    },
    {
      heading: `Train Your Agent`,
      description: `Our platform uses advanced NLP to train your agent on your specific use case.`,
    },
    {
      heading: `Deploy and Scale`,
      description: `Launch your AI agent across multiple platforms with just one click.`,
    },
  ]

  const painPoints = [
    {
      emoji: `😓`,
      title: `Overwhelmed by customer inquiries`,
    },
    {
      emoji: `💸`,
      title: `High costs of scaling customer support`,
    },
    {
      emoji: `⏰`,
      title: `Limited availability for customer interactions`,
    },
  ]

  const avatarItems = [
    {
      src: 'https://randomuser.me/api/portraits/men/51.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/women/9.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/women/52.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/men/4.jpg',
    },
  ]

  return (
    <LandingContainer navItems={navItems}>
      <LandingHero
        title={`Revolutionize Your Customer Interactions with AI`}
        subtitle={`Create and deploy intelligent AI agents in minutes. No coding required.`}
        buttonText={`Get Started`}
        pictureUrl={`https://marblism-dashboard-api--production-public.s3.us-west-1.amazonaws.com/hQ8yyl-dynamicai-LwMr`}
        socialProof={
          <LandingSocialRating
            avatarItems={avatarItems}
            numberOfUsers={1000}
            suffixText={`from happy businesses`}
          />
        }
      />
      <LandingSocialProof logos={logos} title={`Featured on`} />
      <LandingPainPoints
        title={`Are you struggling with these challenges?`}
        painPoints={painPoints}
      />
      <LandingHowItWorks
        title={`Empower Your Business with AI in 4 Simple Steps`}
        steps={steps}
      />
      <LandingFeatures
        id="features"
        title={`Unlock the Power of AI for Your Business`}
        subtitle={`Discover how our AI Agent Builder can transform your customer interactions and boost your business growth.`}
        features={features}
      />
      <LandingTestimonials
        title={`Success Stories: How AI Agents Are Transforming Businesses`}
        subtitle={`See how companies like yours are achieving remarkable results with our AI Agent Builder.`}
        testimonials={testimonials}
      />
      <LandingPricing
        id="pricing"
        title={`Affordable Solutions for Every Business Size`}
        subtitle={`Choose the perfect plan to supercharge your customer interactions and grow your business.`}
        packages={packages}
      />
      <LandingFAQ
        id="faq"
        title={`Got Questions? We've Got Answers`}
        subtitle={`Find quick answers to common questions about our AI Agent Builder.`}
        questionAnswers={questionAnswers}
      />
      <LandingCTA
        title={`Ready to Transform Your Customer Interactions?`}
        subtitle={`Join thousands of businesses already benefiting from AI-powered customer service. Get started today!`}
        buttonText={`Create Your AI Agent Now`}
        buttonLink={`/register`}
      />
    </LandingContainer>
  )
}
