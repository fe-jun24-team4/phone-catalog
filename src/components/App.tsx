import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { Outlet } from 'react-router-dom';
import { TechSpecs } from './TechSpecsTable';
import { Product } from '../types/Product';

const product: Product = {
  id: '1',
  category: 'hi',
  namespaceId: 'hi',
  name: 'phone',
  capacityAvailable: ['sdf'],
  capacity: '64 GB',
  priceRegular: 3,
  priceDiscount: 2,
  colorsAvailable: ['fsd'],
  color: 'dsd',
  images: ['das'],
  description: {
    title: 'da',
    text: ['das'],
  },
  screen: "6.1' IPS",
  resolution: '1792x828',
  processor: 'Apple A13 Bionic',
  ram: '4GB',
  camera: '12 Mp + 12 Mp + 12MP',
  zoom: 'Digital, 5x',
  cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE'],
};

function App() {
  return (
    <div className="wrapper">
      <header className="header">
        <Header />
      </header>
      <main className="page">
        <div className="page___container">
          <Outlet />
        </div>
        <TechSpecs product={product} />
      </main>

      <div className="div__container">
        <Footer />
      </div>
    </div>
  );
}

export default App;
