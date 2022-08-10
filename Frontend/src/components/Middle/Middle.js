import React from 'react'
import styles from './Middle.module.css'
import Frame from './assets/Frame.png'
import Group from './assets/Group.png'

function Middle() {
  return (
    <div className={styles.mainMiddle}>
    <div className={styles.leftMiddle}>
      <h1>GAMBITOR</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ex dolor quo, minus ad delectus quia illo vel nostrum quaerat corporis. Quibusdam explicabo ex odit temporibus reprehenderit? Nobis, quidem inventore.</p>
     
      </div>
    <div className={styles.rightMiddle}>
      <img className={styles.laptopImage} src={Frame} alt="" />
      <div className={styles.imgContainer}>
      <img className={styles.sideImage} src={Group} alt="" />
      </div>
      
      
    </div>
    </div>
   
  )
}

export default Middle
