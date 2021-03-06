import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import { mainDark, contextYellow, contextOrange } from '../../../colors';

const startMainTabs = async () => {
  const [findPlaceIcon, sharePlaceIcon, menuIcon] = await Promise.all([
    Icon.getImageSource('md-map', 30),
    Icon.getImageSource('md-share-alt', 30),
    Icon.getImageSource('md-menu', 30)
  ]);
  Navigation.startTabBasedApp({
    tabs: [
      {
        label: 'Find Place',
        screen: 'awesome-places.FindPlaceScreen',
        title: 'Find Place',
        icon: findPlaceIcon,
        navigatorStyle: {
          navBarBackgroundColor: mainDark,
          navBarTextColor: contextYellow,
          navBarButtonColor: contextYellow
        },
        navigatorButtons: {
          leftButtons: [
            {
              icon: menuIcon,
              title: 'Menu',
              id: 'sideDrawerToggle'
            }
          ]
        }
      },
      {
        label: 'Share Place',
        screen: 'awesome-places.SharePlaceScreen',
        title: 'Share Place',
        icon: sharePlaceIcon,
        navigatorStyle: {
          navBarBackgroundColor: mainDark,
          navBarTextColor: contextYellow,
          navBarButtonColor: contextYellow
        },
        navigatorButtons: {
          leftButtons: [
            {
              icon: menuIcon,
              title: 'Menu',
              id: 'sideDrawerToggle'
            }
          ]
        }
      }
    ],
    tabsStyle: {
      tabBarButtonColor: contextYellow,
      tabBarSelectedButtonColor: contextOrange,
      tabBarBackgroundColor: mainDark
    },
    appStyle: {
      tabBarButtonColor: contextYellow,
      tabBarSelectedButtonColor: contextOrange,
      tabBarBackgroundColor: mainDark
    },
    drawer: {
      left: {
        screen: 'awesome-places.SideDrawer'
      }
    }
  });
};

export default startMainTabs;
