"use client"
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import Header from '@/components/Header/header';
import Body from '@/components/Body/Body';

const HomePage: React.FC = () => {
  useEffect(() => {
    ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
      <>
      <Header/>
      <Body />
      </>
    )
  }, []);

  return <div id="root"></div>;
};

export default HomePage;

