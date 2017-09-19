import React, { Component } from "react";
import PropTypes from 'prop-types'
import classnames from 'classnames'

import Cloud from './cloud'
import Sound from './sound'

import './helicopter.css'

/**
 * 💀 Zenika helicopter : the next step of the company.
 * And you can control the clouds
 * credits for helicopter design : http://cssaz.tumblr.com/
 */
class Helicopter extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isFlying: false
    }
  }

  toggleFly = () => {
    this.setState(state => ({ isFlying: !state.isFlying }))
  }

  render() {
    const { name, color, sound, nbClouds } = this.props
    const { isFlying } = this.state
    const animationCSS = classnames('anim-container', { animate: isFlying })
    return (
      <div className="main">
        { isFlying && sound && <Sound /> }
        { Array(nbClouds).fill(<Cloud />) }
        <div className={animationCSS}>
          <div className="helicopter" onClick={this.toggleFly}>
            <div className="cockpit" style={{backgroundColor: color}}/>
            <div className="tail" style={{borderLeftColor: color}}><span>{name}</span></div>
            <div className="main" style={{borderBottomColor: color}}/>
            <div className="rotor">
              <div className="rotator">
                <div />
                <div />
              </div>
            </div>
            <div className="smallrotor">
              <div />
              <div />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Helicopter.propTypes = {
  /** Name of the helicopter */
  name: PropTypes.string.isRequired,
  /** Color of the helicopter (you can set colors, hex, rgb...) */
  color: PropTypes.string,
  /** Enable or disable sound FX */
  sound: PropTypes.bool,
  /** Number of clouds in the sky */
  nbClouds: PropTypes.number,
}

Helicopter.defaultProps = {
  name: '💀 Zenika',
  color: 'red',
  sound: true,
  nbClouds: 2,
}

export default Helicopter;
