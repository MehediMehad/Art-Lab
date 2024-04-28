
const LatestWorks = () => {
    return (
        <div className="bg-[#f5f5f5] my-28">
            <h1 className="text-center text-4xl font-semibold py-7 ">Our Latest Works</h1>
            <div className="mx-96 grid grid-cols-3 gap-x-5 pb-12">
                <img className="lg:col-span-1 md:col-span-2" src="https://i.ibb.co/12qwLQk/spanish-2836864-1920-300x300.jpg" alt="" />
                <img className="lg:col-span-1 md:col-span-2" src="https://i.ibb.co/b5PpSHC/a1-300x300.jpg" alt="" />
                <img className="lg:col-span-1 md:col-span-2" src="https://i.ibb.co/zFrV4Sy/09-300x300.jpg" alt="" />
            </div>
        </div>
    );
};

export default LatestWorks;