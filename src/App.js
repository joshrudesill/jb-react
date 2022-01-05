import React from 'react';
import './App.css';
import { getSiteData } from './firebase/firebase.utils';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      p: {
        data: '',
        lang: ''
      },
      
  };
  }
  componentDidMount() {
    let sd = getSiteData().then((value) => this.setState({p: value}, () => console.log(this.state)), (err) => console.log(err));
    
  }

  render() {
    return (
      <div className='display-1 text-center m-5'>
        {this.state.p.data}
        
      </div>
    )
  }
}
  


export default App;
