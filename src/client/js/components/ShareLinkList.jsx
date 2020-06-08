import React, { useState } from 'react';

import { withTranslation } from 'react-i18next';

import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Tooltip } from 'reactstrap';
import { createSubscribedElement } from './UnstatedUtils';

import AppContainer from '../services/AppContainer';


const ShareLinkList = (props) => {
  const [tooltipOpen, setToolTipOpen] = useState(false);

  function getShareLinkList() {
    return ['Replace with API'];
  }

  const showCopyedToolTip = () => {
    setToolTipOpen(true);
    setTimeout(() => {
      setToolTipOpen(false);
    }, 1000);
  };

  return (
    <div className="table-responsive">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Link</th>
            <th>Expiration</th>
            <th>Description</th>
            <th>Order</th>
          </tr>
        </thead>
        <tbody>
          {
            getShareLinkList().map((shareLink) => {
              return (
                <>
                  <td>
                    <CopyToClipboard text={shareLink} onCopy={showCopyedToolTip} id="copyShareLink">
                      <span type="button">{ shareLink }</span>
                    </CopyToClipboard>
                  </td>
                  <Tooltip placement="bottom" isOpen={tooltipOpen} target="copyShareLink" fade={false}>
                    copied!
                  </Tooltip>
                  <td>{ shareLink }</td>
                  <td>{ shareLink }</td>
                  <td>{ shareLink }</td>
                </>
              );
            })
          }
        </tbody>
      </table>
    </div>
  );
};

const ShareLinkListWrapper = (props) => {
  return createSubscribedElement(ShareLinkList, props, [AppContainer]);
};

export default withTranslation()(ShareLinkListWrapper);
