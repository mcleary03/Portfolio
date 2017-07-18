import React, { Component } from 'react'

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0,
      input: '',
      operator: ''
    }

    this.setInput = this.setInput.bind(this);
    this.setResult = this.setResult.bind(this);
    this.click = this.click.bind(this);
  }

  setInput(e) {
    this.setState({input: e.target.value})
  }

  setResult(e) {
    this.setState({result: Number(this.state.result) + Number(this.state.input)})
    console.log('result: ' + this.state.result)
    console.log('value: ' + e.target.value)
  }

  click(e) {
    e.preventDefault()
    this.setState({operator: e.target.innerHTML})
    this.setState({result: Number(this.state.result) + Number(this.state.input)})
    this.setState({input: ''})
    console.log(this.state.result, this.state.operator)
  }

  render() {
    return (
      <div className="container text-center">
        <div className="container">
          <h1>{this.state.result}</h1>
        </div>
        <input value={this.state.input} onChange={this.setInput} />
        <div className="container-fluid">
          <button className="btn btn-primary" onClick={this.click}><strong>+</strong></button>
          <button className="btn btn-primary"><strong>-</strong></button>
          <button className="btn btn-primary"><strong>*</strong></button>
          <button className="btn btn-primary"><strong>/</strong></button>
          <button className="btn btn-primary" onClick={this.setResult}><strong>=</strong></button>
        </div>
      </div>
    );
  }
}
