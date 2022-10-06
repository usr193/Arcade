import { FC } from 'react';

interface Props {
  startFullScreen: () => void;
  stopFullScreen: () => void;
}

export const TopBarCircle: FC<Props> = ({ startFullScreen, stopFullScreen }) => {
  
  return (
    <div className='w-[40px] flex justify-between items-center'>
      <div className='w-[10px] h-[10px] bg-[#EE6A5F] rounded-full cursor-pointer' onClick={stopFullScreen} />
      <div className='w-[10px] h-[10px] bg-[#F4BD4E] rounded-full cursor-pointer' onClick={stopFullScreen} />
      <div className='w-[10px] h-[10px] bg-[#61C555] rounded-full cursor-pointer' onClick={startFullScreen}  />
    </div>
  )
}