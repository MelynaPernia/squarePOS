import React from 'react';
import {render} from 'react-dom';
import AppCoffe from './components/App'
import data from './data.json'

render( <AppCoffe data={data}/>, document.getElementById('root') )
