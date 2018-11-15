import React, { Component } from 'react'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hue: 50,
      saturation: 50,
      luminescence: 50
    }
  }
  updateHue = event => {
    this.setState({
      hue: event.target.value
    })
  }
  updateSaturation = event => {
    this.setState({
      saturation: event.target.value
    })
  }
  updateLuminescence = event => {
    this.setState({
      luminescence: event.target.value
    })
  }

  render() {
    const color = `hsl(${this.state.hue}, ${this.state.saturation}%, ${
      this.state.luminescence
    }%)`

    return (
      <div className="body">
        <h1>Color Picker</h1>
        <section className="color-picker">
          <div
            style={{
              backgroundColor: color
            }}
            className="color-swatch"
          >
            {' '}
          </div>
          <ul className="sliders">
            <li>
              <p>Hue</p>
              <input
                type="range"
                min="0"
                max="360"
                value={this.state.hue}
                onChange={this.updateHue}
              />
            </li>
            <li>
              <p>Saturation</p>
              <input
                type="range"
                min="0"
                max="100"
                value={this.state.saturation}
                onChange={this.updateSaturation}
              />
            </li>
            <li>
              <p>Luminescence</p>
              <input
                type="range"
                min="0"
                max="100"
                value={this.state.luminescence}
                onChange={this.updateLuminescence}
              />
            </li>
          </ul>
        </section>
      </div>
    )
  }
}

export default App
