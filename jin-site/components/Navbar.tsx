import { useState, useEffect, FunctionComponent } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import styles from '../styles/Navbar.module.scss'

// const NavItem: FunctionComponent<{
//    active: string
//    setActive: Function
//    name: string
//    route: string
// }> = ({ active, setActive, name, route }) => {
//    return active !== name ? (
//       <Link href={route}>
//          <a>
//             <span
//                className=''
//                onClick={() => setActive(name)}>
//                {name}
//             </span>
//          </a>
//       </Link>
//    ) : null
// }

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
            <Link  href='/'><span>JIN CHOI</span>PHOTOGRAPHY</Link>
         </span>

         <div className={styles.navLinks}>
            <Link href='/portraits' />
         </div>
         {/* <span className={styles.logo}>
        
            <NavItem active={active} setActive={setActive} name='home' route='/'><span>JIN CHOI</span>PHOTOGRAPHY </NavItem>
         </span>

         <div className={styles.navLinks}>
            <NavItem
               active={active}
               setActive={setActive}
               name='portraits'
               route='/portraits'
            />
            <NavItem
               active={active}
               setActive={setActive}
               name='weddings'
               route='/weddings'
            />
            <NavItem
               active={active}
               setActive={setActive}
               name='graduations'
               route='/graduations'
            />
             <NavItem
               active={active}
               setActive={setActive}
               name='events'
               route='/events'
            />
         </div> */}
      </div>
   )
}

export default Navbar