import { FC } from 'react';

export const ClickPointer: FC<{showBubble: () => void}> = (({ showBubble }) => {
  return (
    <div className={` mt-[-10px] ml-[-10px] w-[20px] h-[20px] z-[1] border-2 border-red-500 rounded-full animate-clickPoint`} onMouseOver={showBubble} />
  );
});

