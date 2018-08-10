import React from 'react';
import PropTypes from 'prop-types';

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

class TemperatureInput extends React.Component {
  constructor(props) {
    // Once the states or the props in Component change, the Render function will execute
    // When a Component's Render function executes, all its children components will execute
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onTemperatureChange(e.target.value);
  }

  render() {
    const { temperature, scale} = this.props;
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}</legend>
        <input value={temperature} onChange={this.handleChange}/>
      </fieldset>
    )
  }
}

TemperatureInput.propTypes = {
  temperature: PropTypes.string.isRequired,
  onTemperatureChange: PropTypes.func.isRequired,
}

TemperatureInput.defaultProps = {
  temperature: '100',
  onTemperatureChange: () => {}
}

export default TemperatureInput;