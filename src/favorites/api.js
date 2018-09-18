import { getByPath, setByPath } from '../firebase';
import { Category } from './models';

export const updateFavorite = (userId, favoriteId, isFavorite, category) =>
  setByPath(`${userId}/favorites/${category}/${favoriteId}`, isFavorite);

export const fetchFavorites = userId => getByPath(`${userId}/favorites`).then(toFavorites);

export const toFavorites = apiFavorites => ({
  [Category.Candidates]: definedToArray(apiFavorites[Category.Candidates]),
  [Category.Events]: definedToArray(apiFavorites[Category.Events]),
});

const definedToArray = (obj = {}) => Object.keys(obj).filter(key => !!key);
