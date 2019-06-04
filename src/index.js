import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Faq from './faq/Faq';
import Steppers from './coach/Steppers';
import CoachInfo from './coacher/CoachInfo';
import FaqManagement from './faq/FaqManagement';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import FRegister from './coacher/Register';
// import Profiles from './coacher/Profiles';
import Index from './index/index';
import Register from './register/Index';
import indexREDUC from './redux/index';
import Profile from './profile/index';


const routing = (
    <Router>
        <Switch>
            <Route path="/index" component={Index} />
            <Route path="/register" component={Register} />
            <Route path="/admin" component={Steppers} />
            <Route path="/faq/seach" component={Faq} />
            <Route path="/faq/admin/management" component={FaqManagement} />
            <Route path="/coacher/coachInfo" component={CoachInfo} />
            <Route path="/coach/register/stepper" component={Steppers} />
            <Route path="/coacher/register" component={FRegister} />
            <Route path="/redux" component={indexREDUC} />
            <Route path="/profile" component={Profile} />
            {/* <Route path="/coacher/profiles" component={Profiles} /> */}
            <Route component={Index} />
        </Switch>

    </Router>
)
ReactDOM.render(routing, document.getElementById('root'));
serviceWorker.unregister();