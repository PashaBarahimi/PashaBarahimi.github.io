// Typed access to the YAML content files. The .yaml imports are resolved at
// build time by @rollup/plugin-yaml (see astro.config.mjs), so nothing here
// reaches the browser.

import profileData from './profile.yaml';
import educationData from './education.yaml';
import experienceData from './experience.yaml';
import teachingData from './teaching.yaml';

export interface Profile {
  name: string;
  handle: string;
  terminalHost: string;
  terminalCommand: string;
  tagline: string;
  bio: string;
  email: string;
  github: string;
  linkedin: string;
  scholar: string;
  orcid: string;
  cvPath: string;
  photo?: string;
}

/** Education and Teaching share the date-column layout. */
export interface DatedEntry {
  dateRange: string;
  title: string;
  institution: string;
  description?: string;
}

/** Teaching entries also record who the course was taught to. */
export interface TeachingEntry extends DatedEntry {
  level: 'undergraduate' | 'graduate';
}

export interface ExperienceEntry {
  dateRange: string;
  title: string;
  organization: string;
  bullets: string[];
}

export const profile = profileData as Profile;
export const education = educationData as DatedEntry[];
export const experience = experienceData as ExperienceEntry[];
export const teaching = teachingData as TeachingEntry[];
