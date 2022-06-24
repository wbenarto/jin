import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import styles from '../styles/Navbar.module.scss'

const variants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
};

export const Navigation = () => (
    <motion.ul className={styles.navUl} variants={variants}>
        {itemIds.map((i: any) => (
            <MenuItem i={i} key={i} />
        ))}
    </motion.ul>
);

const itemIds = [0, 1, 2, 3];
