import React from 'react';
import './App.css';
import Nav from './nav';
import Homepage from './homepage';
import Tone from './tone';
import Logos from './logos';
import Colours from './colours';
import Images from './images';
import Type from './type';
import Downloads from './downloads';

import { BrowserRouter, Switch, Route} from 'react-router-dom';

function App() {
  return (
<BrowserRouter>
<Nav/>
<Switch>
  <Route exact path="/" component={Homepage} />
  <Route path="/tone" component={Tone} />
  <Route path="/logos" component={Logos} />
  <Route path="/colours" component={Colours} />
  <Route path="/images" component={Images} />
  <Route path="/type" component={Type} />
  <Route path="/downloads" component={Downloads} />



</Switch>
</BrowserRouter>
  );
}

export default App;
