"use client"
import { motion } from "framer-motion";
import SecondPage from "@/components/SecondPage";
import ThirdPage from "@/components/ThirdPage";
const Home = () => (
    <section>
        <div class="bg-image min-h-screen pg1 flex flex-col sm:justify-center items-center text-left p-8 sm:p-6 md:p-32">
            <div className="container mx-auto">
                <p className="w-42 h-42 mr-auto font-satoshi text-2xl font-bold">MULT0R</p>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl sm:text-6xl md:text-7xl lg:text-7xl font-bold mt-20 font-playfair text-green"
                >
                    Describe the <br /> value of booking <br /> an appointment
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-lg w-full sm:w-2/3 md:w-1/3 mt-6 text-green"
                >
                    No need to get clever. Tell people exactly what you're offering, then use this space to communicate your key value proposition.
                </motion.p>
            </div>

        </div>
        <SecondPage />
        <ThirdPage />
        {/* <Footer/> */}
    </section>
);

export default Home;