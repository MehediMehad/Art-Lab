
const LatestWorks = () => {
    return (
        <>
            {/*  */}
            <section className="py-6 bg-[#f5f5f5] my-20">
            <h1 className="text-center text-4xl font-semibold py-7 ">Our Latest Works</h1>
                <div className="container flex flex-col justify-center p-4 mx-auto">
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
                        <img className="object-cover w-full dark:bg-gray-500 aspect-square" src="https://i.ibb.co/SdZZRd7/DALL-E-2023-11-30-12-59-03-A-whimsical-and-colorful-illustration-of-an-artist-surrounded-by-a-whirlw.webp" />
                        <img className="object-cover w-full dark:bg-gray-500 aspect-square" src="https://i.ibb.co/WvvMJ1K/GQ-OCTOBER-SOCIAL-ONLINE-Header-2.webp" />
                        <img className="object-cover w-full dark:bg-gray-500 aspect-square" src="https://i.ibb.co/Hr9jYhw/8.webp" />
                        <img className="object-cover w-full dark:bg-gray-500 aspect-square" src="https://i.ibb.co/yNMVjTR/art-and-culture-bg.jpg" />
                    </div>
                </div>
                <div className="container flex flex-col justify-center p-4 mx-auto">
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
                        <img className="object-cover w-full dark:bg-gray-500 aspect-square" src="https://i.ibb.co/BLjDsB9/17423989-flowng-pnc60lno-022830.jpg" />
                        <img className="object-cover w-full dark:bg-gray-500 aspect-square" src="https://i.ibb.co/Q8KnLWq/optimized-art-in-our-lives-abstract-art-2.jpg" />
                        <img className="object-cover w-full dark:bg-gray-500 aspect-square" src="https://i.ibb.co/yB3tmpY/brain-art.webp" />
                        <img className="object-cover w-full dark:bg-gray-500 aspect-square" src="https://i.ibb.co/r0kr50W/8b5197edee5a893230b0518809a47c21.jpg" />
                    </div>
                </div>
            </section>
        </>
    );
};

export default LatestWorks;