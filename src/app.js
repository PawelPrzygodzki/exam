import React from 'react';
import ReactDom from 'react-dom';
import {Application} from './containers/Application';
import 'normalize.css/normalize.css';
import './theme/base.scss';

ReactDom.render(<Application />,document.getElementById('app'));