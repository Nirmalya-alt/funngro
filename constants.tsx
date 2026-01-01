
import React from 'react';
import { 
  Zap, 
  Code, 
  Palette, 
  Smartphone, 
  Megaphone, 
  Camera, 
  Search, 
  Users, 
  Briefcase, 
  Globe, 
  GraduationCap, 
  Trophy 
} from 'lucide-react';

export const CATEGORIES = [
  { id: '1', title: 'Social Media', icon: <Megaphone className="w-6 h-6" />, description: 'Instagram, FB, Twitter management' },
  { id: '2', title: 'Video Creation', icon: <Camera className="w-6 h-6" />, description: 'Reels, YouTube, Short films' },
  { id: '3', title: 'Web Design', icon: <Palette className="w-6 h-6" />, description: 'UI/UX and Web development' },
  { id: '4', title: 'Mobile Apps', icon: <Smartphone className="w-6 h-6" />, description: 'Flutter, React Native' },
  { id: '5', title: 'Research', icon: <Search className="w-6 h-6" />, description: 'Data gathering and analysis' },
  { id: '6', title: 'Graphics', icon: <Zap className="w-6 h-6" />, description: 'Logo, Branding, Post design' },
];

export const TESTIMONIALS = [
  {
    id: '1',
    name: 'Darsh Golecha',
    role: 'Monech',
    content: 'Happy customer as Teens work is excellent. It\'s cost effective with great quality. Have used their graphic designing.',
    avatar: 'https://picsum.photos/seed/p1/100/100'
  },
  {
    id: '2',
    name: 'Ravishankar',
    role: 'Execute Partners',
    content: 'Impressed by the article written by a Grade IX student on how he has seen life transform around him.',
    avatar: 'https://picsum.photos/seed/p2/100/100'
  },
  {
    id: '3',
    name: 'Meetu',
    role: 'Let\'s Evolve',
    content: 'Funngro services are excellent. They have provided blogs for our website and user-base impressed by the work.',
    avatar: 'https://picsum.photos/seed/p3/100/100'
  }
];

export const TRUSTED_COMPANIES = [
  'Cardekho', 'Energy Solar', 'Tarrakki', 'StockPe', 'Qapita', 'Headstart', 'Eco365'
];
