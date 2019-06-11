import React from 'react';
import './App.scss';
import Header from './partials/Header';
import OfficesPage from './office/officesPage';
import DataService from './services/dataService';
import Animation from './partials/Animation';
import MapPage from './office/MapPage';
import { Switch, Route} from 'react-router-dom';

class App extends React.Component{
  state = {
      offices: [],
      loading: true,
  }

  loadOffices() {
     DataService().then(data => 
        this.setState({
          offices: data,
          loading: false,
        })
     );
  }

  componentDidMount() {
    this.loadOffices();
  }

  render() {
      return (
        <div className="App">
          <Header />
          {(this.state.loading) ? <Animation/> : (
              <Switch> 
                  <Route exact path='/list' render={(props) => 
                      <OfficesPage {...props} isListView={true} officesData={this.state.offices}/>}/>
                  <Route exact path='/grid' render={(props) => 
                      <OfficesPage {...props} isListView={false} officesData={this.state.offices}/>}/>
                  <Route  exact path='/map' render={(props) => 
                      <MapPage {...props} officesData={this.state.offices}/>}/>
              </Switch>
          )}
        </div>
      );
  }
}

export default App;
