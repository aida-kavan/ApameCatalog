import styles from '../components.style/page.module.scss'

import React from 'react'

const productItem = ({img, title, code }) => {
  return (
    <div className={styles.productItem}>
      <div className={styles.imgCont}>
        <img  src={`/public/catalogPhoto/${img}`} alt="" />
      </div>

      <div className={styles.detail}>
        <h2>{title}</h2>
        <p>کد محصول: {code}</p>
      </div>
    </div>
  )
}

export default productItem