import {
  Instagram,
  Twitter,
  Linkedin,
  Mail,
  PhoneCall,
  Github,
  Youtube,
  Facebook,
} from 'lucide-react';
import WhatsAppIcon from '@/components/icons/WhatsApp';

export type SocialPlatform = 'instagram' | 'facebook' | 'twitter' | 'linkedin' | 'youtube' | 'mail' | 'whatsapp' | 'phone' | 'github';

export interface SocialPlatformConfig {
  name: string;
  icon: React.ComponentType<any>;
  color: string;
  hoverColor: string;
}

export const SOCIAL_PLATFORM_CONFIG: Record<SocialPlatform, SocialPlatformConfig> = {
  instagram: {
    name: 'Instagram',
    icon: Instagram,
    color: 'text-pink-600',
    hoverColor: 'hover:text-pink-700',
  },
  facebook: {
    name: 'Facebook',
    icon: Facebook,
    color: 'text-blue-600',
    hoverColor: 'hover:text-blue-700',
  },
  twitter: {
    name: 'Twitter/X',
    icon: Twitter,
    color: 'text-slate-900',
    hoverColor: 'hover:text-slate-800',
  },
  linkedin: {
    name: 'LinkedIn',
    icon: Linkedin,
    color: 'text-blue-700',
    hoverColor: 'hover:text-blue-800',
  },
  youtube: {
    name: 'YouTube',
    icon: Youtube,
    color: 'text-red-600',
    hoverColor: 'hover:text-red-700',
  },
  mail: {
    name: 'Email',
    icon: Mail,
    color: 'text-gray-600',
    hoverColor: 'hover:text-gray-700',
  },
  whatsapp: {
    name: 'WhatsApp',
    icon: WhatsAppIcon,
    color: 'text-green-600',
    hoverColor: 'hover:text-green-700',
  },
  phone: {
    name: 'Phone',
    icon: PhoneCall,
    color: 'text-gray-600',
    hoverColor: 'hover:text-gray-700',
  },
  github: {
    name: 'GitHub',
    icon: Github,
    color: 'text-gray-800',
    hoverColor: 'hover:text-gray-900',
  },
};