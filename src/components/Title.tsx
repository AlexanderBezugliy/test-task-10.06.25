import { motion } from "framer-motion"


const Title = () => {
    return (
        <motion.div 
            className="w-full"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
        >
            <h1 className="text-center px-5 font-bold text-5xl mt-[46px] change-cart:text-3xl">Voices of Success with Sales Fortuna</h1>
        </motion.div>
    )
}

export default Title