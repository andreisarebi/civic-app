import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import { getMatchPercent } from '../../match/selectors';
import { getIsFavorite } from '../../favorites/redux';
import { Category } from '../../favorites/models';
import { getCandidate, getCandidates, loadCandidates } from '../../candidate/redux/candidates';
import { loadUser } from '../../user/sagas'
import { getIsLoggedIn } from '../../auth/selectors';
import WithAuthentication from '../../util/components/WithAuthentication';
import Elections from './ScreenContainer';

export const getCandidateData = (state, candidateId) => {
  const candidate = getCandidate(state, candidateId);
  const isFavorite = getIsFavorite(state, candidateId, Category.Candidates);
  const matchPercent = getMatchPercent(state, candidateId);
  return (
    candidate && {
      id: candidate.id,
      name: candidate.name,
      image: candidate.image,
      electionIds: candidate.electionIds,
      isFavorite,
      matchPercent,
    }
  );
};

const ScreenWithAuthentication = WithAuthentication('logout')(Elections);

const Container = compose(
  connect(
    state => ({
      candidates: getCandidates(state, toListCandidateMapperPlaceholder),
      isLoggedIn: getIsLoggedIn(state),
    }),
    { loadCandidates, loadUser },
  ),
  lifecycle({
    componentDidMount() {
      this.props.loadCandidates();
      // TODO: only load user if match data has not been loaded yet
      this.props.loadUser();
    },
  }),
)(ScreenWithAuthentication);

export default Container;

const toListCandidateMapperPlaceholder = candidate => ({id: candidate.id, electionIds:candidate.electionIds,});
