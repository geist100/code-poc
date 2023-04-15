import React from 'react';
import MCarosuel from "@/components/MCarosuel";
import Header from "@/components/Header";
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeicons/primeicons.css';

const Home = () => {

  return (
      <div>
        <Header/>
        <MCarosuel/>
      </div>
  );
};

export default Home;
