import { createStackNavigator } from 'react-navigation';
import ContentScreen from '../screens/CandidateDetail/TabBar/WebContent';
import CandidateDetailScreen from '../screens/CandidateDetail';

import styles from './styles';


const CandidateStack = createStackNavigator(
  {
    CandidateDetail: CandidateDetailScreen,
    Content: ContentScreen,

  },
  {
    navigationOptions: {
      title: 'District Match',
      headerStyle: styles.header,
      headerTitleStyle: styles.title,
    },
  },
);


export default CandidateStack;
