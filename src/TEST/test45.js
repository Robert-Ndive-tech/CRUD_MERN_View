import React, { useEffect } from 'react';

import M from 'materialize-css';

const MyInputField= () => {
  useEffect(() => {
    M.AutoInit();
  }, []);

  return (
    <div className="input-field">
      <input id="input_text" type="text" className="validate" />
      <label htmlFor="input_text">Your Name</label>
    </div>
  );
};

export default MyInputField;
