import React from 'react';

import { withTranslation } from 'react-i18next';

import { CopyToClipboard } from 'react-copy-to-clipboard';
import { createSubscribedElement } from './UnstatedUtils';

import AppContainer from '../services/AppContainer';


const ShareLinkList = (props) => {

  function getShareLinkList() {
    return ['Replace with API'];
  }

  const showCopyed = () => {
    console.log('Copied');
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
                    <CopyToClipboard text={shareLink} onCopy={showCopyed}>
                      <span type="button">{ shareLink }</span>
                    </CopyToClipboard>
                  </td>
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
