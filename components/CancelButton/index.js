import React, { PropTypes, Component } from 'react'

class CancelButton extends Component {

  state = {
    secondLeft : 4
  }

  componentDidMount = () => {
    this.timerID = setInterval(() => this.tick(), 1000)
  }

  componentWillUnmount = () => {
    clearInterval(this.timerID)
  }

  tick = () => {
    this.setState({
      secondLeft: this.state.secondLeft - 1
    })
  }

  render(){
    const { id, onClick } = this.props

    return (
      <button onClick={() => onClick(id)}>
        Cancel in {this.state.secondLeft} second(s)
      </button>
    )
  }
}

CancelButton.propTypes = {
  id: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
}

export default CancelButton
