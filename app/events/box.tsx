import Image from 'next/image';



export default function Box () {
    return(
        <>
            <div className="flex justify-center h-full">
                <div className="bg-tc-blue min-h-[500px] w-9/12 rounded-b-[100px]">
                    <div className='text-white pl-10 pt-12 pb-10 flex gap-6 pr-10'>
                        <Image src="/photo1.jpeg" alt="Logo" className='border-white border-8 rounded-bl-[80px] rounded-tr-[80px]' width={400} height={480} priority />
                        <p > Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi vero esse fugit, soluta excepturi necessitatibus nemo eaque distinctio nisi, autem, eos assumenda accusamus fugiat quisquam ipsa. Voluptatibus, adipisci iure fugiat voluptatum sunt totam amet deserunt maiores natus! Voluptas laboriosam alias nisi mollitia veritatis ipsa optio earum dolorem? Dicta omnis maxime incidunt unde, quibusdam molestiae nobis, similique quia ut tempore necessitatibus. Sapiente enim, aut corrupti deserunt velit provident tempora esse debitis cumque nostrum perspiciatis alias nam modi doloribus quae facere excepturi commodi deleniti sint itaque hic. Consectetur porro blanditiis veniam! Dolorum labore cupiditate, pariatur ad iste possimus deserunt omnis ullam sapiente. </p>
                    </div>
                </div>
            </div>
        </>
    );
}