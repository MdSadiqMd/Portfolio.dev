"use client"
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import Header from '@/components/Header/header';

const HomePage: React.FC = () => {
  useEffect(() => {
    ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
      <>
      <Header/>
      </>
    )
  }, []);

  return <div id="root"></div>;
};

export default HomePage;

