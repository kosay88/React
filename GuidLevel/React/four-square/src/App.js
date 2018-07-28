import React, { Component } from 'react';
import axios from 'axios';
import Search from './components/Search';
import { Venue } from './components/Venue';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      venues: []
    };
  }


  getLocation(callback){
    navigator.geolocation.getCurrentPosition(location => {
      callback(location.coords.latitude + "," + location.coords.longitude);
    });
  }

  addQuery(query) {
    this.getVenues(query);
  }

  getVenues(query) {
    this.getLocation(latlong => {
      const params = {
        client_id: "YYE45HWJTI0UWAJGDCMRZCSIDHDAATH0WITD1G0D1A530HP2",
        client_secret: "FYIO2HY4NSPCW0ETIZK11PL2QZ1YEFG4HKM14EG2ETD20Q42",
        limit: 30,
        query: query,
        v: "20180323",
        ll: latlong
      };

      axios
        .get("https://api.foursquare.com/v2/venues/explore?" + new
         URLSearchParams(params))
        .then(res => {
          this.setState({
            venues: res.data.response.groups[0].items
          });
        })
        .catch(error => {
          alert(error);
        });
      })
  }

  render() {
     var venueList = this.state.venues.map(
         (item, i) => <Venue key = {i} name = {item.venue.name} />
     );
     return (
       <div className="App">
      <Search addQuery ={value => this.addQuery(value)} />
      <ul>{venueList}</ul>

       </div>
     );
   }}
export default App;
