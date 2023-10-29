import Image from 'next/image';



export default function Box () {
    return(
        <>
            <div className="flex justify-center h-full w-full">
                <div className="bg-tc-blue events-box rounded-b-[100px]">
                    <div className='text-white pl-10 pt-12 pb-10 gap-6 pr-10 flex flex-col lg:flex-row'>
                        <Image src="/photo1.jpeg" alt="Logo" className='border-white border-8 rounded-bl-[80px] rounded-tr-[80px]' width={400} height={480} priority />
                        <p className='text-center'>HEADING</p>
                        <p className='text-center'>DESC</p>
                    </div>
                </div>
            </div>
        </>
    );
}