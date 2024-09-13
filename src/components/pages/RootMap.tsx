import {
    HashRouter as Router,
    Route,
    Routes,
  } from 'react-router-dom'; 
import { RouteNames } from '../../enums/RouteNames';
import App from '../app/App';


export const RootPage = () => {
    return (
    <Router>
        <Routes>
            <Route path={RouteNames.home} element={<App/>}>
               <Route index element={<p>HOMEPAGE</p>}/>
               <Route path={RouteNames.phones} element={<p>PHONES</p>}/>
               <Route path={RouteNames.tablets} element={<p>TABLETS</p>}/>
               <Route path={RouteNames.accessories} element={<p>ACCESSORIES</p>}/>
            </Route>
            <Route path={RouteNames.pageNotFound} element={<p>PAGE NOT FOUND</p>}/>
        </Routes>
    </Router>
    )
};