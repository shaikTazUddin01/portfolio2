import img from '@/assets/person.png'
// import Image from 'next/image';

const HeroArea = () => {
    return (
        <div className=' bg-[#151515]'>
           <div className='flex h-[600px] justify-around items-center max-w-7xl mx-auto'>
           <div className='flex-1'>
                <h1 className=''>i&#39;am <span className='text-4xl text-[#f7a32e]'>Shaik Taz Uddin</span></h1>
                <h1>A full stack Web Developer</h1>
            </div>
            <div className='w-[60%] h-full bg-no-repeat object-cover bg-cover bg-black text-center' >
{/* <Image src={}/> */}
<h1>image here</h1>
            </div>
           </div>
        </div>
    );
};

export default HeroArea;