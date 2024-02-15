import React from 'react';

const WorldCard = ( { img, title, position } ) => {
  return (
    <div className={`${position} p-3 bg-slate-700/70 backdrop-blur-[1px] rounded-[22px]`}>
        <div className="rounded-[30px]">
            <img src={ img } className='w-[210px]'/>
        </div>
        <div>
            <div className='absolute bottom-16 left-8 flex flex-row
            -space-x-2 z-10'>
                <img src="./person-04.svg" className='z-40'/>
                <img src='./person-05.svg' className='z-30'/>
                <img src='./person-06.svg' className='z-20'/>
            </div>
            <p className='absolute bottom-16 right-8 text-[12px]
             items-center text-white font-medium'>+260 have joined</p>
        </div>
        <h3 className='absolute bottom-6 left-7 font-medium text-[22px]
         text-white'>{title}</h3>
    </div>
  )
}

export default WorldCard