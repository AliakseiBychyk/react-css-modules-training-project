import React, { Component } from 'react'
import styles from './Rocket.css'

class Rocket extends Component {

  render() {
    return (
      <div className={styles.rocket}>
        <img src="/shuttle.png" className={styles.img} alt="shuttle" />
      </div>
    )
  }
}

export default Rocket