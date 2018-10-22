import { createStackNavigator } from 'react-navigation';
import FavoritesScreen from '../screens/Favorites';
import ContentScreen from '../screens/CandidateDetail/TabBar/WebContent';

import styles from './styles';

const FavoritesStack = createStackNavigator(
  {
    Favorites: FavoritesScreen,
    Content: ContentScreen,
  },
  {
    navigationOptions: {
      headerStyle: styles.header,
      headerTitleStyle: styles.title,
    },
  },
);

export default FavoritesStack;
