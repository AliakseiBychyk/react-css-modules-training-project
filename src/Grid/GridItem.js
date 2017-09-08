import React from 'react'
import styles from './GridItem.css'
import Badge from './Badge'
import Explorer from './Explorer'

const GridItem = ({ factItem, updateClicked }) => {
  const {title, fact, id, clicked} = factItem
  
  return (
    <div
      className={styles.card}
      onClick={()=> updateClicked(id)}
    >
      {clicked ? <Explorer /> : <Badge />}
      
      <h2 className={styles.title}>{title}</h2>
      <article className={styles.fact}>{fact}</article>
    </div>
  )
}

export default GridItem