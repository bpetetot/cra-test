import React from 'react'
import PropTypes from 'prop-types'

class MyComponent extends React.Component {

  constructor(props) {
    super(props)
    this.state = { test: 'yeah' }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState(state => ({ test: `yeah ${state.test}` }))
  }

  render() {
    const { name, age, gender, happy, address, books, color } = this.props
    return (
      <div onClick={this.handleClick}>
        Hello {name}, {age}, {gender}, {happy ? ':)' : ':('}
        <pre>
          {JSON.stringify(address)}
        </pre>
        <pre>
          {JSON.stringify(books)}
        </pre>
        <div style={{ width: '10px', height: '10px', backgroundColor: color }} />
      </div>
    )
  }
}

MyComponent.defaultProps = {
  name: 'World',
  age: 0,
  gender: 'Male',
  happy: false,
  address: { numero: 0, rue: 'rue du cours' },
  books: ['Book1', 'Book2'],
  onBoom: () => alert('test'),
  symbol: Symbol('testSymb'),
  color: '#FFAE23',
  custom: 'matchme',
}

MyComponent.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  gender: PropTypes.oneOf(['Male', 'Female']),
  happy: PropTypes.bool,
  address: PropTypes.object,
  books: PropTypes.array,
  onBoom: PropTypes.func,
  color: PropTypes.string,
  symbol: PropTypes.symbol,
  node: PropTypes.node,
  element: PropTypes.element,
  instanceOf: PropTypes.instanceOf(Object),
  arrayOf: PropTypes.arrayOf(PropTypes.number),
  objectOf: PropTypes.objectOf(PropTypes.number),
  shape: PropTypes.shape({
    color: PropTypes.string,
    fontSize: PropTypes.number,
  }),
  any: PropTypes.any,
  oneOfType: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  custom: (props, propName) => {
    if (!/matchme/.test(props[propName])) {
      return new Error('error')
    }
  },
}

export default MyComponent
