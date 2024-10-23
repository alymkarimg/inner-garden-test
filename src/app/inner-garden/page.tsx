'use client'; // Error components must be Client Components

import Hexagon from '@/components/container/Hexagon';
import Octagon from '@/components/container/Octagon';

export default function InnerGarden() {
  return (
    <main>
      <section className='bg-[#3F3676] overflow-auto'>
        {/* placeholder covering top of hexagon */}
        <div className='bg-[#8858B5] w-full h-48 absolute'></div>
        <Hexagon
          image='/images/24f63bfc40c7c3099a2923c4f6a9bd90.png'
          className='relative w-[180%] right-[40%] h-[600px] bg-blue-500 flex items-center justify-center text-white hexagon-2'
        >
          <Octagon className='h-[275px] w-[275px] sm:h-[350px] sm:w-[350px] md:h-[510.16px] md:w-[510.16px] rotate-[67deg] bg-slate-100' />
        </Hexagon>
        <div className='flex flex-col items-center relative top-[-200px] overflow-hidden'>
          <Hexagon className='bg-[#8858B5] w-[90vw] md:w-[50vw] relative top-[50px] h-[103px] z-10 flex items-center justify-center text-white'></Hexagon>
          <Hexagon className='bg-[#D5D1ED] w-[1750px] h-[200px] relative flex items-center justify-center text-white'></Hexagon>
        </div>
        <div className='w-full flex flex-col justify-center items-center top-[-150px] relative'>
          <Hexagon className='bg-white w-[200px] h-[50px] flex items-center justify-center text-white'></Hexagon>
          <div className='flex flex-wrap lg:flex-nowrap justify-center xl:gap-20 lg:pt-20'>
            <div className='flex flex-col items-center w-[310px] h-[310px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] xl:w-[45vw] xl:h-[45vw] md:p-5'>
              <Hexagon className='bg-[#8858B5] w-full relative top-[39px] h-[75px] z-10 flex items-center justify-center text-white'></Hexagon>
              <Octagon className='bg-white flex w-full h-full items-start justify-center text-white octagon-2'></Octagon>
            </div>
            <div className='flex flex-col items-center w-[310px] h-[310px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] xl:w-[45vw] xl:h-[45vw] md:p-5'>
              <Hexagon className='bg-[#8858B5] w-full relative top-[39px] h-[75px] z-10 flex items-center justify-center text-white'></Hexagon>
              <Octagon className='bg-white flex w-full h-full items-center justify-center text-white octagon-2'></Octagon>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
