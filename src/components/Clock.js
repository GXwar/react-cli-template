import React from 'react';
import axios from 'axios';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
    this.test.bind(this);
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.tick();
    }, 1000);
    axios.get('/api/todolist')
      .then(res => {
        console.log(res);
      })
      .catch(err => [
        console.log(err)
      ])
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  tick() {
    this.setState({
      date: new Date()
    });
  }

  test() {
    console.log(this.refs.title)
  }

  render() {
    return (
      <div>
        <h1 ref="title" onClick={this.test}>Hello, world</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

export default Clock;
