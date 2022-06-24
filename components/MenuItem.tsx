import * as React from "react";
import { motion } from "framer-motion";
import styles from '../styles/Navbar.module.scss'
import Link from 'next/link'

const variants = {
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

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

export const MenuItem = ({ i }: any) => {
    const style = { border: `2px solid ${colors[i]}` };
    const links = ['HOME', "MUSIC", "PHOTOGRAPHY", 'ABOUT']
    const link = ['', "music", "photography", 'about']
    const handleClick = () => {

    }
    return (
        <Link href={`/${link[i]}`}>
            <motion.li
                className={styles.navLi}
                variants={variants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}

            >

                <button onClick={handleClick} className={styles.textPlaceholder} style={style}>{links[i]}</button>
            </motion.li>
        </Link>
    );
};
