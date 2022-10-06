import { FC } from 'react';
import { TopBarCircle } from './topBarCircle';

interface Props {
  handleClick: () => void;
  startFullScreen: () => void;
  stopFullScreen: () => void;
}

export const TopBar:FC<Props> = ({ handleClick, startFullScreen, stopFullScreen }) => {
  return (
    
    <div className='relative w-[320px] h-[20px] bg-[#1E2837] px-[10px] flex justify-between items-center overflow-hidden'>

      <TopBarCircle startFullScreen={startFullScreen} stopFullScreen={stopFullScreen}/>

      <div className='absolute rounded-[2px] left-[30%] w-[120px] h-[16px] bg-[#374151]  flex justify-between items-center px-[5px] text-gray-400'>
        <div className='w-[12px] h-[12px] '>
          <svg  fill="currentColor" strokeWidth="0" viewBox="0 0 20 20" className=" h-[11px] w-[11px]"  xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"></path></svg>
        </div>
        <div className='h-[12px] leading-[12px] text-center text-[8px]'>
          Tired of high gas prices?
        </div>
        <div className='w-[12px] h-[12px] cursor-pointer ' onClick = {handleClick}>
          <svg  fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className=" h-[12px] w-[12px] hover:text-gray-100" xmlns="http://www.w3.org/2000/svg"><path d="M256 388c-72.597 0-132-59.405-132-132 0-72.601 59.403-132 132-132 36.3 0 69.299 15.4 92.406 39.601L278 234h154V80l-51.698 51.702C348.406 99.798 304.406 80 256 80c-96.797 0-176 79.203-176 176s78.094 176 176 176c81.045 0 148.287-54.134 169.401-128H378.85c-18.745 49.561-67.138 84-122.85 84z"></path></svg>
        </div>
        
      </div>

      <div></div>

    </div>
  )
}