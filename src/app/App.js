import React from 'react';
import './App.scss';
import Header from './partials/Header';
import OfficesPage from './office/officesPage';
import DataService from './services/dataService';
import Animation from './partials/Animation';
import MapPage from './office/MapPage';
import { Switch, Route} from 'react-router-dom';

class App extends React.Component{

  constructor(props){

    super(props);
    this.state = {
        offices: [],
        isListView: JSON.stringify(localStorage.getItem('isListView')),
        loading: true
    }
  }

  loadOffices(){

     DataService().then(data => {
        this.setState({
          offices: data,
          loading: false,
        })
     });
  }

  listViewHandler = (isList) => {
    isList 
    ? this.setState(() => 
        ({ isListView: true }),
        () => localStorage.setItem('isListView', true)
      )
    : 
    

  }

  gridViewHandler = () => {
    
    this.setState({
      isListView: false,
    })
    localStorage.setItem('isListView', false)

  }

  

  componentDidMount(){
    
    this.loadOffices();
    this.setState({
      isListView: JSON.parse(localStorage.getItem('isListView'))
    })
    
  }

  render(){

      return (

        <div className="App">

          <Header isListView={this.state.isListView} handleClick={this.listViewHandler} handleClick1={this.gridViewHandler} />
          <Switch> 
              {(this.state.loading) ? 
                  <Animation/> : <Route exact path='/' render={(props) => 
                  <OfficesPage {...props} isListView={this.state.isListView} officesData={this.state.offices} />}/>
              }
              <Route  exact path='/map' render={(props) => <MapPage {...props} officesData={this.state.offices} /> }/>
          </Switch>
        </div>

      );
  }
}

export default App;
