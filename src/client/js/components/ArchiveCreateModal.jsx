import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import {
  Modal, ModalHeader, ModalBody, ModalFooter,
} from 'reactstrap';


const ArchiveCreateModal = (props) => {

  const { t } = props;

  const [isCommentDownload, setIsCommentDownload] = useState(false);
  const [isFileDownload, setIsFileDownload] = useState(false);
  const [isSubordinatedPageDownload, setIsSubordinatedPageDownload] = useState(false);


  function changeIsCommentDownloadHandler() {
    setIsCommentDownload(!isCommentDownload);
  }
  function changeIsFileDownloadHandler() {
    setIsFileDownload(!isFileDownload);
  }

  function changeIsSubordinatedPageDownloadHandler() {
    setIsSubordinatedPageDownload(!isSubordinatedPageDownload);
  }

  function closeModalHandler() {
    if (props.onClose == null) {
      return;
    }

    props.onClose();

  }


  return (
    <Modal size="lg" isOpen={props.isOpen} toggle={closeModalHandler}>
      <ModalHeader tag="h4" toggle={closeModalHandler} className="bg-primary text-white">
        {t('Create Archive Page')}
      </ModalHeader>
      <ModalBody>
        <div className="form-group">
          <div className="custom-control custom-radio custom-control-inline ">
            <label>{t('File type')}: </label>
          </div>
          <div className="custom-control custom-radio custom-control-inline ">
            <input type="radio" className="custom-control-input" />
            <label className="custom-control-label">MarkDown(.md)</label>
          </div>
          <div className="custom-control custom-radio custom-control-inline">
            <input type="radio" className="custom-control-input" />
            <label className="custom-control-label">PDF(.pdf)</label>
          </div>
        </div>

        <div className="custom-control custom-checkbox custom-checkbox-warning">
          <input
            className="custom-control-input"
            name="comment"
            id="commentFile"
            type="checkbox"
            checked={isCommentDownload}
            onChange={changeIsCommentDownloadHandler}
          />
          <label className="custom-control-label" htmlFor="commentFile">
            {t('Include Comment')}
          </label>
        </div>
        <div className="custom-control custom-checkbox custom-checkbox-warning">
          <input
            className="custom-control-input"
            id="downloadFile"
            type="checkbox"
            checked={isFileDownload}
            onChange={changeIsFileDownloadHandler}
          />
          <label className="custom-control-label" htmlFor="downloadFile">{t('Include Attachment File')}</label>
        </div>
        <div className="custom-control custom-checkbox custom-checkbox-warning">
          <input
            className="custom-control-input"
            id="subordinatedFile"
            type="checkbox"
            checked={isSubordinatedPageDownload}
            onChange={changeIsSubordinatedPageDownloadHandler}
          />
          <label className="custom-control-label" htmlFor="subordinatedFile">
            {t('Include Subordinated Page')}
          </label>
        </div>
      </ModalBody>
      <ModalFooter>
        <button type="button">Done</button>
      </ModalFooter>
    </Modal>
  );
};

ArchiveCreateModal.propTypes = {
  t: PropTypes.func.isRequired, //  i18next
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func,
};

export default withTranslation()(ArchiveCreateModal);