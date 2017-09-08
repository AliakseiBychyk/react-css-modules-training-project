import React, { Component } from 'react'
import cx from 'classnames'
import GridItem from './GridItem'

import styles from './Grid.css'
import mediaStyles from './Media.css'


class Grid extends Component {

  updateClicked = id => {
    this.props.updateClicked(id)
  }

  renderFacts = () => {
    return this.props.facts.map(item => 
      <GridItem
        key={item.id}
        factItem={item}
        updateClicked={this.updateClicked}
      />
    )
  }

  render() {
    return (
      <section className={cx(styles.grid, mediaStyles.grid)}>
        {this.renderFacts()}
      </section>
    )
  }
}

export default Grid