import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { personalInfo } from '../../data/portfolio';
import Container from '../layout/Container';
import SectionHeading from '../common/SectionHeading';
import ContactCard from '../common/ContactCard';
import { MapPin, Mail, Phone } from 'lucide-react';

const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export default function Contact() {
  const { isId } = useLanguage();

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-[#FAF8F3] via-white to-[#F5F1EB] relative overflow-hidden">
      <Container className="space-y-16">
        
        <SectionHeading
          tagline={isId ? "Mari Terhubung" : "Let's Connect"}
          title="Let's Connect & Collaborate"
          subtitle={isId
            ? "Interested in working together on spatial data projects, thematic mapping, or have a question about GIS? Reach out directly!"
            : "Interested in working together on spatial data projects, thematic mapping, or have a question about GIS? Reach out directly!"}
        />

        {/* 4 Contact Cards Grid (Direct Contact Info) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          
          {/* Location */}
          <ContactCard
            icon={MapPin}
            label={isId ? "Lokasi" : "Location"}
            value={isId ? personalInfo.location.id : personalInfo.location.en}
          />

          {/* Email */}
          <ContactCard
            icon={Mail}
            label="Email"
            value={personalInfo.email}
            href={`mailto:${personalInfo.email}`}
          />

          {/* Phone / WhatsApp */}
          <ContactCard
            icon={Phone}
            label="WhatsApp"
            value={personalInfo.phone}
            href={`https://wa.me/${personalInfo.phoneRaw}`}
          />

          {/* LinkedIn */}
          <ContactCard
            icon={LinkedinIcon}
            label="LinkedIn"
            value="Putri Arielia"
            href={personalInfo.linkedin}
          />

        </div>

      </Container>
    </section>
  );
}
