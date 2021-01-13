import * as React from 'react';
import { Component } from 'react';
type Props = {
  label:string
}
type State = {
  count :number,
}
class Deno extends React.Component<Props,State> {

  constructor(props:any) {
    super(props)
    this.state = {
      count:0
    }
  }
   handleIncrement = () => {
    this.setState({
      count:this.state.count + 1
    })
  }
  render(){
    return(
      <div>
        <span>{this.state.count}</span>
        <button onClick={this.handleIncrement}>增加</button>
      </div>
    )
  }

}
export default Deno
