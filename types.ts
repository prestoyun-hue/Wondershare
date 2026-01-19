import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  detail: string;
}

export interface TestimonialProps {
  quote: string;
  author: string;
  company: string;
  role?: string;
}

export interface FormData {
  name: string;
  companyName: string;
  email: string;
  phone: string;
  teamSize: string;
  interests: string[];
  message: string;
}