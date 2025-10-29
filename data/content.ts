import { Target, Users, TrendingUp, Heart } from 'lucide-react'

export interface Topic {
  id: string
  title: string
  description: string
  icon: any
}

export interface Testimonial {
  id: string
  name: string
  role: string
  organisation: string
  quote: string
  image?: string
}

export const topics: Topic[] = [
  {
    id: 'resilience',
    title: 'Resilience & Reinvention',
    description: 'Transform adversity into advantage. Learn how to navigate uncertainty with grace and emerge stronger from life\'s most challenging moments.',
    icon: TrendingUp,
  },
  {
    id: 'leadership',
    title: 'Leadership Learned in Unlikely Places',
    description: 'Discover leadership lessons from the frontlines of charity work to the boardroom. Real stories of influence that transcend traditional business settings.',
    icon: Target,
  },
  {
    id: 'strategy',
    title: 'From War Tactics to Success Strategies',
    description: 'How a war-zone mindset shaped boardroom brilliance. Practical frameworks for strategic thinking under pressure and building unshakeable focus.',
    icon: Users,
  },
  {
    id: 'empowerment',
    title: 'Empowering Women Through Education & Career',
    description: 'Breaking barriers and building pathways. A powerful narrative on creating opportunities, mentorship, and the transformative power of education for women.',
    icon: Heart,
  },
]

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Emma Richardson',
    role: 'Event Director',
    organisation: 'Global Leadership Summit',
    quote: 'Sarah\'s talk left our audience of 500+ leaders completely transformed. Her ability to weave personal experience with actionable insights is unmatched.',
  },
  {
    id: '2',
    name: 'David Chen',
    role: 'Chief People Officer',
    organisation: 'TechVentures International',
    quote: 'We brought Sarah in for our annual conference and she exceeded every expectation. Her story of resilience resonated deeply with our diverse team.',
  },
  {
    id: '3',
    name: 'Dr. Amara Okoye',
    role: 'Founder',
    organisation: 'Women in Business Africa',
    quote: 'Sarah doesn\'t just speak—she connects. Her journey from Congo to KPMG is a masterclass in turning challenges into triumphs. Absolutely inspiring.',
  },
  {
    id: '4',
    name: 'James Morrison',
    role: 'Managing Partner',
    organisation: 'Morrison & Associates',
    quote: 'Authentic, powerful, and deeply moving. Sarah brought a fresh perspective on leadership that our partners are still talking about months later.',
  },
]

export const journeyContent = {
  headline: 'Charity → Audit → Inspire',
  sections: [
    {
      title: 'Born in Congo',
      text: 'Sarah\'s story begins in the Democratic Republic of Congo, where she witnessed firsthand the transformative power of education and resilience in the face of adversity.',
      previewImage: '/images/journey/congo.png',
    },
    {
      title: 'Championing Women\'s Education',
      text: 'Working for a women\'s education charity, Sarah dedicated herself to creating pathways for women to access education and economic opportunities, shaping her lifelong commitment to empowerment.',
      previewImage: '/images/charity.mp4',
      isVideo: true,
    },
    {
      title: 'London & Beyond',
      text: 'Pursuing her own education in London, Sarah embodied the very transformation she advocated for—proving that with determination and support, boundaries can be transcended.',
      previewImage: '/images/journey/london.png',
    },
    {
      title: '15 Years at KPMG',
      text: 'At KPMG, Sarah honed her expertise in leadership, change management, and strategic thinking. From audit to advisory, she navigated complex challenges and led high-performing teams across multiple continents.',
      previewImage: '/images/Generated Image October 29, 2025 - 7_00PM.png',
    },
    {
      title: 'Speaking to the World',
      text: 'Today, Sarah channels her unique journey into powerful keynotes that inspire audiences in London, Brussels, Johannesburg, and beyond—transforming how leaders think about resilience, strategy, and impact.',
      previewImage: '/images/Generated Image October 29, 2025 - 7_03PM.png',
    },
  ],
}

export const impactStats = {
  cities: ['London', 'Brussels', 'Johannesburg', 'New York', 'Dubai'],
  audiences: '10,000+',
  engagements: '150+',
}
