import { assets, infoList, toolsData } from '@/assets/assets';
import { motion } from "motion/react";
import Image from 'next/image';

const About = ({isDarkMode}) => {
  return (
    <motion.div id='about' className='w-full px-[12%] py-10 scroll-mt-20'
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration:1}}
    >
        <motion.h4 
        initial={{opacity: 0, y: -20}}
        whileInView={{opacity: 1 ,y: 0 }}
        transition={{duration:0.5,delay: 0.5 }}
        className="text-center mb-2 text-lg
        font-Ovo">Introduction</motion.h4>
        <motion.h2 className="text-center text-5xl font-Ovo">
            About me</motion.h2>
            <motion.div 
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration:0.8 }}
            className='flex w-full flex-col lg:flex-row items-center gap-20 
            my-20'>
                <motion.div 
                initial={{opacity: 0, scale:0.9}}
                whileInView={{opacity: 1 ,scale: 1 }}
                transition={{duration:0.6 }}
                className='w-64 sm:w-80 rounded-3xl max-w-none'>
                    <Image src={assets.user_image} alt='user'
                    className=' w-full h-full object-cover rounded-3xl'/>
                    
                </motion.div>
                <motion.div 
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{duration:0.6, delay:0.8}}
                className='flex-1'>
                    <p className='mb-10 mx-w-2xl font-Ovo'>
                    I'm a computer science graduate student with hands-on experience in full-stack development, cloud deployment, 
                    and DevOps practices. I’ve built and deployed modern web applications using React, Docker, and AWS, contributed to 
                    open-source projects, and gained real-world problem-solving experience through IT support internships. 
                    I'm actively seeking entry-level opportunities as a Software Engineer, 
                    Junior Cloud Engineer, Site Reliability Engineer (SRE), or Full-Stack Developer—where I can bring adaptability, 
                    a growth mindset, and a strong interest in building reliable and scalable systems.
                        </p>

                        <motion.ul 
                        initial={{opacity: 0}}
                        whileInView={{opacity: 1 }}
                        transition={{duration:0.8,delay: 1 }}
                        className='grid grid-cols-1 sm:grid-cols-3 gap-6
                        max-w-2xl'>
                            {infoList.map(({icon,iconDark,title,description}, index)=>(
                                <motion.li 
                                whileInView={{scale: 1.05}}
                                className='border-[0.5px] border-gray-400 rounded-xl
                                p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1
                                duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50'
                                key={index}>
                                    <Image src={isDarkMode ? iconDark : icon} alt={title} className='w-7 mt-3'/>
                                    <h3 className='my-4 font-semibold text-gray-700 dark:text-white '>{title}</h3>
                                    <p className='text-gray-600 text-sm dark:text-white/80'>{description}</p>
                                </motion.li>
                            ))}


                        </motion.ul>


                        <motion.h4 
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1 ,y: 0 }}
                        transition={{duration:0.5,delay: 1.3 }}
                        className='my-6 text-gray-700 font-Ovo dark:text-white/80'>Tools I use</motion.h4>

                        <motion.ul 
                        initial={{opacity: 0}}
                        whileInView={{opacity: 1  }}
                        transition={{duration:0.6,delay: 1.5 }}
                        className='flex items-center gap-3 sm:gap-5' >
                            {toolsData.map((tool,index) =>(
                                <motion.li
                                whileHover={{scale: 1.05}}
                                className='flex items-center justify-center w-12
                                sm:w-14 aspect-square border border-gray-400 rounded-lg
                                cursor-pointer hover:-translate-y-1 duration-500'
                                key={index}>
                                    <Image src={tool} alt='Tool' className='w-5 sm:w-7'/>
                                </motion.li>
                            ))}
                        </motion.ul>
                        


                </motion.div>
            </motion.div>
    </motion.div>
  )
}

export default About