import logo from './logo.svg';
import './App.css';
import Dashboard from './Screens/Analytics_Com/Dashboard';
import { Route, Switch } from 'react-router';
import Products from './Screens/Analytics_Com/Products';
import { BrowserRouter } from 'react-router-dom';
import Login_Signup from './Screens/Login_Signup/Login_Signup';
import LandingScreen from './Screens/LandingScreen'
import Home from './Home/index'

import UploadScreen from './Screens/UploadScreen/UploadScreen';
import Listed from './Screens/Analytics_Com/Listed';
import {createStore,combineReducers,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import authReducer from "./store/reducers/auth"
import manufacturerReducer from "./store/reducers/manufacturer"
import retailerReducer from "./store/reducers/retailer"
import ReduxThunk from "redux-thunk"
const rootReducer=combineReducers({
  auth:authReducer,
  manufacturer:manufacturerReducer,
  retailer:retailerReducer
});
const store=createStore(rootReducer,applyMiddleware(ReduxThunk));

function App() {
  return (
    <Provider store={store}>
    <BrowserRouter >
    <Switch>
      <Route path='/addProd' exact component={UploadScreen} />  
      <Route path='/listed' exact component={Listed} />      
      <Route path='/products/allotStocks' component={Products} />
      <Route path='/products/unitSales' component={Products} />
      <Route path='/products/Stocks' component={Products} />
      <Route path='/Dashboard' exact component={Dashboard} />
      <Route path='/Home' exact component={Home} />
      <Route path='/Login' exact component={Login_Signup} />
      
      <Route path='/' exact component={LandingScreen} />
    </Switch>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
