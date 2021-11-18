import { useState, useEffect, FunctionComponent} from 'react'
import styles from '../styles/Content.module.scss'

const Content = () => {

    return (
        <div className={styles.container}>
                <div className={styles.galleryItem}>
                    <div className={styles.image}>
                    <img src='/images/1.jpg' className='img1' alt='san francisco golden gate bridge' ></img>
                    </div>
                    <div className={styles.text}>Example Text</div>
                </div>
                <div className={styles.galleryItem}>
                    <div className={styles.image}>
                    <img src='/images/2.jpeg' className='img3' alt='san francisco golden gate bridge' ></img>
                    </div>
                    <div className={styles.text}>Example Text</div>
                </div>
                <div className={styles.galleryItem}>
                    <div className={styles.image}>
                    <img src='/images/3.jpeg' className='img3' alt='san francisco golden gate bridge' ></img>
                    </div>
                    <div className={styles.text}>Example Text</div>
                </div>
                <div className={styles.galleryItem}>
                    <div className={styles.image}>
                    <img src='/images/4.jpg' className='img5' alt='san francisco golden gate bridge' ></img>
                    </div>
                    <div className={styles.text}>Example Text</div>
                </div>
                <div className={styles.galleryItem}>
                    <div className={styles.image}>
                    <img src='/images/5.jpg' className='img3' alt='san francisco golden gate bridge' ></img>
                    </div>
                    <div className={styles.text}>Example Text</div>
                </div>
                <div className={styles.galleryItem}>
                    <div className={styles.image}>
                    <img src='/images/6.jpg' className='img3' alt='san francisco golden gate bridge' ></img>
                    </div>
                    <div className={styles.text}>Example Text</div>
                </div>
                <div className={styles.galleryItem}>
                    <div className={styles.image}>
                    <img src='/images/7.jpg' className='img3' alt='san francisco golden gate bridge' ></img>
                    </div>
                    <div className={styles.text}>Example Text</div>
                </div>
                <div className={styles.galleryItem}>
                    <div className={styles.image}>
                    <img src='/images/8.jpg' className='img3' alt='san francisco golden gate bridge' ></img>
                    </div>
                    <div className={styles.text}>Example Text</div>
                </div>
                <div className={styles.galleryItem}>
                    <div className={styles.image}>
                    <img src='/images/9.jpg' className='img3' alt='san francisco golden gate bridge' ></img>
                    </div>
                    <div className={styles.text}>Example Text</div>
                </div>
                <div className={styles.galleryItem}>
                    <div className={styles.image}>
                    <img src='/images/10.jpg' className='img3' alt='san francisco golden gate bridge' ></img>
                    </div>
                    <div className={styles.text}>Example Text</div>
                </div>
                {/* <a href='/images/1.jpg' className={styles.imageGallery} ></a>
                <a href='/images/1.jpg' className='img2'></a>
                <a href='/images/1.jpg' className={styles.imageGallery}></a>
                <a href='images/1.jpg' className='img4'></a>
                <img src='/images/1.jpg' className='img1' alt='san francisco golden gate bridge' ></img>
                <img src='/images/1.jpg' className='img2' alt='san francisco golden gate bridge' ></img>
                <img src='/images/1.jpg' className='img1' alt='san francisco golden gate bridge' ></img>
                <img src='/images/1.jpg' className='img2 img3' alt='san francisco golden gate bridge' ></img> */}
 
             
         <h1 className={styles.h1}>
          {/* Welcome to <a href="https://nextjs.org">Jin's Page!</a> */}
        </h1>
        </div>
    )
}

export default Content