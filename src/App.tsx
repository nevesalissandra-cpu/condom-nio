/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FormsDirectBanner } from './components/FormsDirectBanner';
import { TypologiesSection } from './components/TypologiesSection';
import { AmenitiesSection } from './components/AmenitiesSection';
import { LocationSection } from './components/LocationSection';
import { FinancingBanner } from './components/FinancingBanner';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { InterestModal } from './components/InterestModal';
import { FloatingMobileBar } from './components/FloatingMobileBar';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedApartmentId, setSelectedApartmentId] = useState<string | null>(null);

  const handleOpenModal = (apartmentId?: string) => {
    setSelectedApartmentId(apartmentId || null);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedApartmentId(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 text-stone-900 selection:bg-amber-200 selection:text-amber-900">
      {/* Top Navigation */}
      <Navbar onOpenInterestModal={() => handleOpenModal()} />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenInterestModal={() => handleOpenModal()} />

        {/* Direct Links / Forms Access */}
        <FormsDirectBanner />

        {/* Apartamentos & Plantas */}
        <TypologiesSection onSelectApartment={(id) => handleOpenModal(id)} />

        {/* Lazer & Infraestrutura */}
        <AmenitiesSection onOpenInterestModal={() => handleOpenModal()} />

        {/* Localização Estratégica */}
        <LocationSection onOpenInterestModal={() => handleOpenModal()} />

        {/* Condições & Financiamento */}
        <FinancingBanner onOpenInterestModal={() => handleOpenModal()} />

        {/* Perguntas Frequentes */}
        <FaqSection onOpenInterestModal={() => handleOpenModal()} />
      </main>

      {/* Footer */}
      <Footer onOpenInterestModal={() => handleOpenModal()} />

      {/* Floating Bottom Action Bar for Mobile */}
      <FloatingMobileBar onOpenInterestModal={() => handleOpenModal()} />

      {/* Modal with Google Forms Selector */}
      <InterestModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        selectedApartmentId={selectedApartmentId}
      />
    </div>
  );
}
