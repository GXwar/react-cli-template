import React from 'react';

class BoilingVerdict extends React.Component {
  constructor(props) {
    super(props);
  }
  ComponentWillMount() {
    console.log('Will mounting');
  }
  ComponentWillUpdate() {
    console.log('test');
  }

  render() {
    const element = this.props.celsius >= 100 ? <p>The water would boil</p> : <p>The water would not boil</p>
    return (
      element
    )
  }
}

export default BoilingVerdict;