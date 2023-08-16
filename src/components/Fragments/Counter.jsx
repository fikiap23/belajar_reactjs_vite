import React from 'react'

// kalau statefull harus pake class
class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
    }
    console.log('constructor')
  }

  componentDidMount() {
    this.setState({ count: 1 })
    console.log('mounted')
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('updated')
    if (this.state.count === 10) {
      this.setState({ count: 0 })
    }
  }
  render() {
    return (
      <div className="flex items-center">
        <h1 className="mr-5">{this.state.count}</h1>
        <button
          className="bg-blue-600 text-white p-3"
          onClick={() => this.setState({ count: this.state.count + 1 })}
        >
          +
        </button>
        {console.log('render')}
      </div>
    )
  }
}

export default Counter
