import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';

import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { createSubscribedElement } from '../UnstatedUtils';
import AppContainer from '../../services/AppContainer';

import HeaderSearchBox from '../HeaderSearchBox';

const SearchModal = (props) => {
  return (
    <Modal>
      <ModalHeader></ModalHeader>
      <ModalBody>
        <HeaderSearchBox />
      </ModalBody>
    </Modal>
  );
};

const SearchModalWrapper = (props) => {
  return createSubscribedElement(SearchModal, props, [AppContainer]);
};

SearchModal.propTypes = {
  t: PropTypes.func.isRequired, // i18next
  appContainer: PropTypes.instanceOf(AppContainer).isRequired,
};

export default withTranslation()(SearchModalWrapper);