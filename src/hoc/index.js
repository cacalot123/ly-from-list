import React, {Component} from 'react';

const simpleHoc = WrappedComponent => class extends Component {

  componentWillMount() {

  }

  render() {
    console.log(11111);
    return (<div className="rsFormList"><WrappedComponent text={222} {...this.props}/></div>)
  }
};

export default simpleHoc;
