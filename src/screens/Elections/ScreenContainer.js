import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import Screen from './Screen';
import { getCandidates, loadCandidates } from '../../candidate/redux/candidates';
import { loadFavorites } from '../../favorites/redux';

const Container = compose(
  connect(
    state => ({ candidates: getCandidates(state, toListCandidateMapperPlaceholder) }),
    { loadCandidates, loadFavorites },
  ),
  lifecycle({
    componentDidMount() {
      this.props.loadCandidates();
      this.props.loadFavorites();
    },
  }),
)(Screen);

export default Container;

const toListCandidateMapperPlaceholder = candidate => ({ name: candidate.name, id: candidate.id });
