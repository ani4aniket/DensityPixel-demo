/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import SFCApp from './SFCApp';

AppRegistry.registerComponent(appName, () => SFCApp);
