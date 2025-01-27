import styles from '../components.style/page.module.scss'

import React from 'react'

const productItem = ({img, title, code, size, desc, type }) => {
  return (
    <div className={styles.productItem}>
      <div className={styles.imgCont}>
        <img  src={`/تصاویر/${img}`} alt="" />
      </div>

      <div className={styles.detail}>
        <h2>{title}</h2>
        <p>کد محصول: {code}</p>
        {size && (
          <p>ابعاد محصول: {size}</p>
        )}
        {type && (
          <p>نوع محصول: <span>{type}</span></p>
        )}
        {desc && (
          <p>توضیحات محصول: <span>{desc}</span></p>
        )}
      </div>
    </div>
  )
}

export default productItem