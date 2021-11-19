import { useState, useEffect, FunctionComponent} from 'react'
// import '../styles/Content.module.css'
import styles from '../styles/Content.module.css'

const Content = () => {

    return (
        <div className={styles.container}>
                <div className={[styles.galleryItem, styles.w_3, styles.h_2].join(' ')}>
                    <div className={styles.image}>
                    <img src='/images/1.jpg' alt='san francisco golden gate bridge' ></img>
                    </div>
                    {/* <div className={styles.text}>Example Text</div> */}
                </div>
                <div className={[styles.galleryItem, styles.w_1, styles.h_2].join(' ')}>
                    <div className={styles.image}>
                    <img src='/images/4.jpg' alt='san francisco golden gate bridge' ></img>
                    </div>
                    {/* <div className={styles.text}>Example Text</div> */}
                </div>
                
                <div className={[styles.galleryItem, styles.w_1, styles.h_5].join(' ')}>
                    <div className={styles.image}>
                    <img src='/images/7.jpg' alt='san francisco golden gate bridge' ></img>
                    </div>
                    {/* <div className={styles.text}>Example Text</div> */}
                </div>
                <div className={[styles.galleryItem, styles.w_3, styles.h_4].join(' ')}>
                    <div className={styles.image}>
                    <img src='/images/2.jpeg' alt='san francisco golden gate bridge' ></img>
                    </div>
                    {/* <div className={styles.text}>Example Text</div> */}
                </div>
              
                <div className={[styles.galleryItem, styles.w_2, styles.h_3].join(' ')}>
                    <div className={styles.image}>
                    <img src='/images/5.jpg' alt='san francisco golden gate bridge' ></img>
                    </div>
                    {/* <div className={styles.text}>Example Text</div> */}
                </div>
                <div className={[styles.galleryItem, styles.w_1, styles.h_3].join(' ')}>
                    <div className={styles.image}>
                    <img src='/images/6.jpg' alt='san francisco golden gate bridge' ></img>
                    </div>
                    {/* <div className={styles.text}>Example Text</div> */}
                </div>
  
                <div className={[styles.galleryItem, styles.w_1, styles.h_2].join(' ')}>
                    <div className={styles.image}>
                    <img src='/images/8.jpg' alt='san francisco golden gate bridge' ></img>
                    </div>
                    {/* <div className={styles.text}>Example Text</div> */}
                </div>
                <div className={[styles.galleryItem, styles.w_1, styles.h_2 ].join(' ')}>
                    <div className={styles.image}>
                    <img src='/images/9.jpg' alt='san francisco golden gate bridge' ></img>
                    </div>
                    {/* <div className={styles.text}>Example Text</div> */}
                </div>
                <div className={[styles.galleryItem, styles.w_1, styles.h_3].join(' ')}>
                    <div className={styles.image}>
                    <img src='/images/10.jpg' alt='san francisco golden gate bridge' ></img>
                    </div>
                    {/* <div className={styles.text}>Example Text</div> */}
                </div>
 
                <div className={[styles.galleryItem, styles.w_1, styles.h_1].join(' ')}>
                    <div className={styles.image}>
                    <img src='/images/3.jpeg' alt='san francisco golden gate bridge' ></img>
                    </div>
                    {/* <div className={styles.text}>Example Text</div> */}
                </div>

             
         
        </div>
    )
}

export default Content