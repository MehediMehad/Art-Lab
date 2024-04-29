import { Slide } from "react-awesome-reveal";


const OurTeam = () => {
    return (

        <section className="py-6 dark:bg-gray-100 dark:text-gray-800 mt-20">
        <div className="container flex flex-col items-center justify-center p-4 mx-auto space-y-8 sm:p-10">
            <h1 className="text-4xl font-bold leading-none text-center sm:text-5xl">Our team</h1>
            <p className="max-w-2xl text-center dark:text-gray-600 text-3xl">Together, we make the perfect team and Achieve the impossible.</p>
            <Slide>
            <div className="flex flex-row flex-wrap-reverse justify-center">
                <div className="flex flex-col justify-center m-8 text-center">
                    <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500 object-cover" src="https://i.ibb.co/VQbQK4V/photo-1581403341630-a6e0b9d2d257.jpg" />
                    <p className="text-xl font-semibold leading-tight">Leo</p>
                    <p className="dark:text-gray-600">Sinner Designer</p>
                </div>
                <div className="flex flex-col justify-center m-8 text-center">
                    <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500 object-cover" src="https://i.ibb.co/dQtW7tZ/photo-1515138692129-197a2c608cfd.jpg" />
                    <p className="text-xl font-semibold leading-tight">RusKus Borsha</p>
                    <p className="dark:text-gray-600">CEO Of Designer</p>
                </div>
                <div className="flex flex-col justify-center m-8 text-center">
                    <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500 object-cover" src="https://i.ibb.co/yW4HNT1/photo-1632765854612-9b02b6ec2b15.jpg" />
                    <p className="text-xl font-semibold leading-tight">Samira Mahi</p>
                    <p className="dark:text-gray-600">Artist </p>
                </div>
                <div className="flex flex-col justify-center m-8 text-center">
                    <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500 object-cover" src="https://i.ibb.co/PhyNyfv/photo-1459486358775-edfe3fb98c36.jpg" />
                    <p className="text-xl font-semibold leading-tight">Funsung Wangro</p>
                    <p className="dark:text-gray-600">Designer</p>
                </div>
                <div className="flex flex-col justify-center m-8 text-center">
                    <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500 object-cover" src="https://i.ibb.co/jyNbr88/photo-1522874339442-b66b63414ab4.jpg" />
                    <p className="text-xl font-semibold leading-tight">Ebu Ebran</p>
                    <p className="dark:text-gray-600">Instructor</p>
                </div>
                <div className="flex flex-col justify-center m-8 text-center">
                    <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500 object-cover" src="https://i.ibb.co/xYYQn8t/photo-1515027037286-7da2d06130cf.jpg" />
                    <p className="text-xl font-semibold leading-tight">Leroy Jenkins</p>
                    <p className="dark:text-gray-600">Manege </p>
                </div>
            </div>
            </Slide>
        </div>
    </section>
    );
};

export default OurTeam;