import { Category } from './models';

// Selectors

export const getUserFavorites = state => ({
  [Category.Candidates]: Array.from(getFavoritesForCategory(state, Category.Candidates)),
  [Category.Events]: Array.from(getFavoritesForCategory(state, Category.Events)),
});

export const getIsFavorite = (state, id, category) => (
  getFavoritesForCategory(state, category).has(id)
);

const getFavoritesForCategory = (state, category) => (
  state[FAVORITES_NAMESPACE][category]
);

export const FAVORITES_NAMESPACE = 'favorites';

// Action Creators
export const loadFavorites = () => ({ type: FavoritesActionType.Request });

export const favoritesRequestSuccess = favorites => ({
  type: FavoritesActionType.RequestSuccess,
  payload: favorites,
});

export const toggleFavorite = (id, category) => ({
  type: FavoritesActionType.Toggle,
  payload: { id, category },
});

export const addOrRemoveFavorite = (id, category, shouldAdd) => (
  shouldAdd ? addFavorite(id, category) : removeFavorite(id, category)
);

const addFavorite = (id, category) => ({
  type: FavoritesActionType.Add,
  payload: { id, category },
});

const removeFavorite = (id, category) => ({
  type: FavoritesActionType.Remove,
  payload: { id, category },
});

export const FavoritesActionType = {
  Request: 'civicApp/favorites/request',
  RequestSuccess: 'civicApp/favorites/requestSuccess',
  Toggle: 'civicApp/favorites/toggle',
  Add: 'civicApp/favorites/add',
  Remove: 'civicApp/favorites/remove',
};

// Reducer

const reducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case FavoritesActionType.RequestSuccess:
      return {
        [Category.Candidates]: new Set(action.payload[Category.Candidates]),
        [Category.Events]: new Set(action.payload[Category.Events]),
      };
    case FavoritesActionType.Add:
      return {
        ...state,
        [action.payload.category]: (new Set(state[action.payload.category])).add(action.payload.id),
      };
    case FavoritesActionType.Remove:
      newState = new Set(state[action.payload.category]);
      newState.delete(action.payload.id);
      return {
        ...state,
        [action.payload.category]: newState,
      };
    default:
      return state;
  }
};

const initialState = {
  [Category.Candidates]: new Set(),
  [Category.Events]: new Set(),
};

export default reducer;
