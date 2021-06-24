import React from 'react';
import Tea1 from './Tea1';
import Tea2 from './Tea2';
import Tea3 from './Tea3';
import Tea4 from './Tea4';
import Tea5 from './Tea5';
import Tea6 from './Tea6';
import { Container, Typography } from '@material-ui/core';

const Teas = () => {

  return (
    <>
    <Typography style={{textAlign: 'center', marginBottom: '20px'}} variant='h2'>Unlabeled Teas in the Box...</Typography>
    <Container style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', maxWidth: '800px', height: '100vh'}}>
      {/* <Container style={{display: 'flex'}}> */}
      <Tea1 />
      <Tea2 />
      <Tea3 />
      <Tea4 />
      <Tea5 />
      <Tea6 />
      {/* </Container> */}

    </Container>
    </>
    
  );
}

export default Teas;
