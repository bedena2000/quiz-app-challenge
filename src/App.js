import React from 'react';

// Component
import Content from './Content';

// Background Image
import backgroundImage from './assets/img/background.jpg';

export default function App() {
  return (
    <div className='min-h-screen bg-main-background bg-cover bg-no-repeat bg-center relative'>
        <Content />
    </div>
  );
}
