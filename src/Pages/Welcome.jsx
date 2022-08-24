import React from 'react';

// Components
import Title from '../components/Title';

// Redux
import { useDispatch } from 'react-redux';

// Routing
import { Link } from 'react-router-dom';

// Animation
import { motion } from 'framer-motion';

// Ref
import { useRef } from 'react';

// Actions
import { selectCategory } from '../redux/actions/actions';

export default function Welcome() {
  // Disptach
  const dispatch = useDispatch();

  const saveCategory = () => {
    const { value } = selectRef.current;
    dispatch(selectCategory(value));
  };

  const selectRef = useRef();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}>
      <Title titleText="Welcome to QUIZ" />
      <p className="text-center">Select Category</p>
      <select ref={selectRef} className="mx-auto text-center block mt-[20px] border p-[10px]">
        <option className="p-[10px] text-[14px]">Geography</option>
        <option className="p-[10px] text-[14px]">General Knowledge</option>
        <option className="p-[10px] text-[14px]">History</option>
      </select>
      <Link
        onClick={saveCategory}
        className="text-[24px] bg-transparent border-[2px] border-black w-full block mt-[24px] text-center p-[6px] transition ease-in delay-150 hover:bg-slate-600 hover:text-white"
        to="quiz">
        Start
      </Link>
    </motion.div>
  );
}
