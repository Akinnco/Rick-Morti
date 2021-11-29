/**
 * @format
 */

import {AppRegistry} from 'react-native';
import StoreProvider from './StoreProvider';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => StoreProvider);
