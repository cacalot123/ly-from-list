import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import wrapWithUsername from './hoc';

@wrapWithUsername
class Welcome extends Component {
  render() {
    console.log(this)
    return (
      <div>welcome{this.props.text}</div>
    )
  }
}



ReactDOM.render((<Welcome />), document.getElementById('root'));
