import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import NewsCard from './NewsCard';

const NewsTab = props => (
  <View>
    {props.newsItems.map(({ id, ...rest }) => (
      <NewsCard key={id} {...rest} />
    ))}
  </View>
);

NewsTab.propTypes = { newsItems: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string })).isRequired };

export default NewsTab;
