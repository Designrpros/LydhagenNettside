import React from 'react';
import Hero from '../Sections/Hero';
import Info from '../Sections/Info';
import Info1 from '../Sections/Info1';
import CreativeArtistsGallery from '../Sections/Backstage';
import FestivalInfo from '../Sections/FestivalInfo';
import PerformersGallery from '../Sections/PerformersGallery';

const Lydhagen = () => {
  return (
    <div>
      <Hero />
      <Info />
      <PerformersGallery />
      <Info1 />
      <CreativeArtistsGallery />
      <FestivalInfo />
    </div>
  );
};

export default Lydhagen;