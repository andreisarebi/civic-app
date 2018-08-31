import { createStackNavigator } from 'react-navigation';
import SurveyMainScreen from '../screens/Survey';
import DistrictSuccessScreen from '../screens/Survey/DistrictSuccess';

import styles from './styles';

const SurveyStack = createStackNavigator(
  {
    Main: SurveyMainScreen,
    DistrictSuccess: DistrictSuccessScreen
  },
  {
    navigationOptions: {
      title: 'Candidate Match Survey',
      headerStyle: styles.header,
      headerTitleStyle: styles.title,
    },
  },
);

export default SurveyStack;
