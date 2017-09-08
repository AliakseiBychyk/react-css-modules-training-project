import React, { Component } from 'react'
import styles from './Background.css'

class Background extends Component {

  render() {
    return (
      <div>
        <div className={styles.stars}></div>
        <div className={styles.alpha}></div>
        <div className={styles.nebula}></div>
      </div>
    )
  }
}

export default Background