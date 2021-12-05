import * as React from 'react';
import Button from '@mui/material/Button';

const Answer = (props) => {
  return (
    <>
      <Button variant="contained" color="primary" onClick={() => props.select(props.content ,props.nextId)}>
        {props.content}
      </Button>
    </>
  );
}

export default Answer;