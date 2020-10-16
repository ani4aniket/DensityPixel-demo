/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Home from './Home';
import SFCApp from './SFCApp';
import Profile from './Profile';

AppRegistry.registerComponent(appName, () => Profile);
