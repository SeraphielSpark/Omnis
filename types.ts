
import React from 'react';

export interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface UseCaseProps {
  category: string;
  title: string;
  benefits: string[];
  impact: string;
}

export interface NavLink {
  label: string;
  path: string;
}
