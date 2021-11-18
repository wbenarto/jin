import { useState, useEffect, FunctionComponent } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import styles from '../styles/Navbar.module.scss'

const NavItem: FunctionComponent<{
   active: string
   setActive: Function
   name: string
   route: string
}> = ({ active, setActive, name, route }) => {
   return active !== name ? (
      <Link href={route}>
         <a>
            <span
               className=''
               onClick={() => setActive(name)}>
               {name}
            </span>
         </a>
      </Link>
   ) : null
}

const Navbar = () => {
   const { pathname } = useRouter()

   const [active, setActive] = useState('')

   //later
   useEffect(() => {
      // if (pathname === '/') setActive('About')
      // else if (pathname === '/projects') setActive('Projects')
      // else if (pathname === '/resume') setActive('Resume')
   }, [])

   return (
      <div className={styles.container}>
         <span className={styles.logo}>
            {/* {active} */}
            <span>JIN CHOI</span>PHOTOGRAPHY
         </span>

         <div className={styles.navLinks}>
            <NavItem
               active={active}
               setActive={setActive}
               name='journals'
               route='/'
            />
            <NavItem
               active={active}
               setActive={setActive}
               name='weddings'
               route='/resume'
            />
            <NavItem
               active={active}
               setActive={setActive}
               name='graduations'
               route='/projects'
            />
             <NavItem
               active={active}
               setActive={setActive}
               name='portraits'
               route='/projects'
            />
         </div>
      </div>
   )
}

export default Navbar