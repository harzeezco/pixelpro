import React from 'react';

function Switch() {
  return (
    <label className='switch relative inline-block w-[74px] h-[35px]'>
      <input type='checkbox' className='opacity-0 w-0 h-0' />
      <span className='slider absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-blue-700 transition duration-400 rounded-[30px] border-1 border-gray-300' />
    </label>
  );
}

export default Switch;
