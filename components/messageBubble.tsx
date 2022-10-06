import { FC } from 'react';

interface Props {
  message: string;
  display: string;
  hideBubble: () => void;
}

export const MessageBubble: FC<Props> = (({message, display, hideBubble}) => {
  return (
    <div className={`bg-red-500 p-1.5 max-w-[150px] rounded-[5px] w-fit flex justify-center items-center leading-[12px] text-white text-[10px]`} style={{display: `${display}`}} onMouseOut={hideBubble}>
      {message}
    </div>
  )
})

