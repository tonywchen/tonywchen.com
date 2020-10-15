import React, { useState, useRef } from 'react';

import Sidekick from '../Sidekick/Sidekick';
import { useEffect } from 'react';

const CopyButton = ({ children, value }) => {

  const [toRespond, setToRespond] = useState(false);
  const valueRef = useRef();

  const onClick = (e) => {
    e.preventDefault();

    _populateValue();
    _copyValue();
    _showResponse();
    _clearValue();
  };

  const _populateValue = () => {
    valueRef.current.value = value;
  };

  const _copyValue = () => {
    valueRef.current.select();
    valueRef.current.setSelectionRange(0, 99999);

    document.execCommand('copy');
  };

  const _showResponse = () => {
    setToRespond(true);

    setTimeout(() => {
      setToRespond(false);
    }, 600);
  };

  const _clearValue = () => {
    valueRef.current.value = '';
  };

  const actionClassNames = (toRespond)? 'copy-action copy-action--hidden' : 'copy-action';
  const responseClassNames = (toRespond)? 'copy-response' : 'copy-response copy-response--hidden';

  const renderContent = () => {
    return (
      <>
        <div className={actionClassNames}>Copy</div>
        <div className={responseClassNames}>
          {toRespond && (
            <Sidekick tags={['design', 'frontend', 'backend', 'database']} times={1} force={true} delay={0.05} />
          )}
        </div>
      </>
    );
  };

  const copyButtonClassNames = (toRespond)? 'copy-button copy-button--show-response' : 'copy-button';

  return (
    <form>
      {children}
      <input type="text" className="copy-button-value" ref={valueRef} readOnly/>
      <button className={copyButtonClassNames} onClick={onClick}>
        <div className="copy-button-inner">
          { renderContent() }
        </div>
      </button>
    </form>
  );

};

export default CopyButton;