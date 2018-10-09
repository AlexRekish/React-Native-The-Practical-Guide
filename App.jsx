import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import AuthScreen from './src/screens/Auth/AuthScreen';
import FindPlaceScreen from './src/screens/FindPlaceScreen/FindPlaceScreen';
import SharePlaceScreen from './src/screens/SharePlaceScreen/SharePlaceScreen';
import PlaceDetailsScreen from './src/screens/PlaceDetails/PlaceDetails';
import SideDrawer from './src/screens/SideDrawer/SideDrawer';

import store from './src/store/store';

Navigation.registerComponent('awesome-places.AuthScreen', () => AuthScreen, store, Provider);
Navigation.registerComponent(
  'awesome-places.FindPlaceScreen',
  () => FindPlaceScreen,
  store,
  Provider
);
Navigation.registerComponent(
  'awesome-places.SharePlaceScreen',
  () => SharePlaceScreen,
  store,
  Provider
);
Navigation.registerComponent('awesome-places.PlaceDetailsScreen', () => PlaceDetailsScreen);
Navigation.registerComponent('awesome-places.SideDrawer', () => SideDrawer);

Navigation.startSingleScreenApp({
  screen: {
    screen: 'awesome-places.AuthScreen', // unique ID registered with Navigation.registerScreen
    title: 'Auth', // title of the screen as appears in the nav bar (optional)
    navigatorStyle: {}, // override the navigator style for the screen, see "Styling the navigator" below (optional)
    navigatorButtons: {} // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
  }
});
