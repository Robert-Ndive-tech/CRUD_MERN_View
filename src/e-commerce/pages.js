import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function CommerceDa() {
  return (
    <div className="container">
      <h1 className="text-center">React with Bootstrap and Material-UI</h1>

      <div className="mb-3">
        <TextField label="Material-UI Input" id="number" type="number"  variant="outlined" fullWidth />
      </div>

      <Button variant="contained" color="primary" className="mb-3">
        Material-UI Button
      </Button>

      <button className="btn btn-danger">
        Bootstrap Button
      </button>
    </div>
  );
}

export default CommerceDa;
