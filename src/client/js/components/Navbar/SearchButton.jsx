import React from 'react';
import PropTypes from 'prop-types';

import { withTranslation } from 'react-i18next';

import { createSubscribedElement } from '../UnstatedUtils';
import AppContainer from '../../services/AppContainer';

const SearchButton = (props) => {
  const { appContainer } = props;

  return (
    <button className="btn btn-lg rounded-circle" type="button" onClick={appContainer.openSearchModal}>
      search
    </button>
  );
};

/**
 * Wrapper component for using unstated
 */
const SearchButtonWrapper = (props) => {
  return createSubscribedElement(SearchButton, props, [AppContainer]);
};


SearchButton.propTypes = {
  t: PropTypes.func.isRequired, //  i18next
  appContainer: PropTypes.instanceOf(AppContainer).isRequired,

  isIcon: PropTypes.bool,
};

export default withTranslation()(SearchButtonWrapper);
