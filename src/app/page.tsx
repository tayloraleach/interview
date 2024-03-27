// import Image from "next/image";

import Article from './components/Article';

export default function Home() {
  return (
    <main className='max-w-2xl m-auto min-h-screen p-2'>
      <Article />
      <div tabIndex={0} className='collapse bg-base-200 my-4'>
        <div className='collapse-title text-xl font-medium'>Focus me to see content</div>
        <div className='collapse-content'>
          <p>tabIndex={0} attribute is necessary to make the div focusable</p>
        </div>
      </div>
      <div className='gap-2 flex my-4'>
        <button className='btn btn-primary'>Primary</button>
        <button className='btn btn-secondary'>Secondary</button>
      </div>
    </main>
  );
}
