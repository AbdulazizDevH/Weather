import { Component } from 'react';
import Header from './components/components/Header';
import Loader from './components/components/Loader';
import Main from './components/components/Main';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    }
  }

  // componentDidMount() {
  //   const timer = setTimeout(() => {
  //     this.setState({loading: true})
  //   }, 5000);
  // }

  render() {
    return(
      <div className='wrapper'>
        {this.state.loading ? <Main /> : <Loader />}
      </div>
    )
  }
}