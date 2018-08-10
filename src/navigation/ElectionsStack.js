import { createStackNavigator } from 'react-navigation';
import ElectionsScreen from '../screens/Elections';
import CandidateDetail from '../screens/CandidateDetail';
import styles from './styles';
import colors from '../styles/colors';

const ElectionsStack = createStackNavigator(
  {
    Elections: ElectionsScreen,
    CandidateDetail: CandidateDetail,
  },
  {
    navigationOptions: {
      headerStyle: styles.header,
      headerTitleStyle: styles.title,
      headerTintColor: colors.white,
      headerBackTitle: null,
    },
  },
);

export default ElectionsStack;
