import React from 'react';

// Components
import Welcome from './Pages/Welcome';
import QuizPage from './Pages/QuizPage';

// Routing
import { Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

// Animation
import { motion, AnimatePresence } from 'framer-motion';

export default function Content() {
  const location = useLocation();
  return (
    <div className="text-black border w-[300px] min-h-max p-[20px] absolute top-[50%] bottom-[50%] left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] bg-white shadow-black rounded-[15px] backdrop-sepia content ">
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Welcome />} />
          <Route path="/quiz" element={<QuizPage />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}
