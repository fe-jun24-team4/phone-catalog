import {
    HashRouter as Router,
    Route,
    Routes,
  } from 'react-router-dom'; 
import { RouteNames } from '../../enums/RouteNames';
import App from '../App';


export const RootPage = () => {
    return (
    <Router>
        <Routes>
            <Route path={RouteNames.home} element={<App/>}>
               <Route index element={<p>HOMEPAGE</p>}/>
               <Route path={RouteNames.phones} element={<p>PHONES</p>}/>
               <Route path={RouteNames.tablets} element={<p>TABLETS</p>}/>
               <Route path={RouteNames.accessories} element={<p>ACCESSORIES</p>}/>
               <Route path={RouteNames.favorites} element={<p>Favorites</p>}/>
               <Route path={RouteNames.cart} element={<p>CART</p>}/>
            </Route>
            <Route path={RouteNames.pageNotFound} element={<p>PAGE NOT FOUND</p>}/>
        </Routes>
    </Router>
    )
};