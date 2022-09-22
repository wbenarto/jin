import * as React from "react";
import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "./use-dimensions";
import { MenuToggle } from "./MenuToggle";
import Link from 'next/link'

import styles from '../styles/Navbar.module.scss'

const sidebar = {
    open: (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2
        }
    }),
    closed: {
        clipPath: "circle(30px at 40px 40px)",
        transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 40
        }
    }
};

const variants = {
   open: {
       transition: { staggerChildren: 0.07, delayChildren: 0.2 }
   },
   closed: {
       transition: { staggerChildren: 0.05, staggerDirection: -1 }
   }
};
const itemIds = [0, 1, 2, 3];

const variants2 = {
   open: {
       y: 0,
       opacity: 1,
       transition: {
           y: { stiffness: 1000, velocity: -100 }
       }
   },
   closed: {
       y: 50,
       opacity: 0,
       transition: {
           y: { stiffness: 1000 }
       }
   }
};

const Layout = ({children} : {children: React.ReactNode}) => {
    
   const [isOpen, toggleOpen] = useCycle(false, true);
   const containerRef = useRef(null);
   const { height } = useDimensions(containerRef);

   const style = { backgroundColor: '#000222' };
   const links = ['HOME', "MUSIC", "PHOTOGRAPHY", 'ABOUT']
   const link = ['', "music", "photography", 'about']

    return (
        <div className={styles.layout}>
            
            <nav className={styles.container}>
            <div className={styles.logo} >
            <p>JIN CHOI</p>
            </div>
            <motion.nav
            initial={false}
            animate={isOpen ? "open" : "closed"}
            custom={height}
            ref={containerRef}
            className={styles.menuNav}
                >
            <motion.div className={styles.background} variants={sidebar} />
            <motion.ul className={styles.navUl} variants={variants}>
            {itemIds.map((i: any) => (
               <Link href={`/${link[i]}`}>
               <motion.li
                 className={styles.navLi}
                 variants={variants2}
                 whileHover={{ scale: 1.1 }}
                 whileTap={{ scale: 0.95 }}
 
               >
 
                    <button  className={styles.textPlaceholder} style={style}>{links[i]}</button>
                </motion.li>
                </Link>
            ))}
                </motion.ul>
                <MenuToggle toggle={() => toggleOpen()} />
            </motion.nav>
            <div className={styles.sidebar}>
               <p>JIN CHOI</p>
       
               <div className={styles.navLinks}>
               
               {itemIds.map((i:any) => (
                <button>
                    <Link href={`/${link[i]}`}>
                        <p>
                            {links[i]}
                        </p>
                    </Link>
                </button>
               ))}
                </div>
            </div>
            
            </nav>

            <div className={styles.children}>
                {children}
            </div>
        
        </div>
    )
}

export default Layout