import React from 'react'
import { Box } from '@mui/system'
import img from '../images/banner.jpg'
import * as styles from '../styles/hero-banner.module.css'

export default function HeroBanner() {
    return (

        <Box className={styles.hero_image}
            sx={{
                height: 500,
                backgroundColor: 'orangered',
                '&:hover': {
                    backgroundColor: 'primary.main',
                    opacity: [0.9, 0.8, 0.7],
                },
            }}

        >
            <div className={styles.hero_text}>
                <h1>I am John Doe</h1>
                <p>And I'm a Photographer</p>
                <button>Hire me</button>
            </div>
        </Box>
        // <div className={styles.hero_image}>
        //     <div className={styles.hero_text}>
        //         <h1>I am John Doe</h1>
        //         <p>And I'm a Photographer</p>
        //         <button>Hire me</button>
        //     </div>
        // </div>
    )
}
