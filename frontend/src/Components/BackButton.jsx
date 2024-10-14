import React from 'react'
import { BsArrowLeft } from "react-icons/bs";
import { Link } from 'react-router-dom';

function BackButton() {
  return (
    <div>
        <Link to='/' className=''>
        <BsArrowLeft className='bg-indigo-600 hover:bg-indigo-700 text-white text-4xl p-1'/>
        </Link>
    </div>
  )
}

export default BackButton
