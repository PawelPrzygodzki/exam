import React from 'react';
import ReactDom from 'react-dom';
import {Application} from './containers/Application';
import 'normalize.css/normalize.css';
import './theme/base.scss';
import LoginService from "./service/LoginService/LoginService";

ReactDom.render(<Application
    loginService={new LoginService()}
/>, document.getElementById('app'));