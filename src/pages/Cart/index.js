import { Button, Snackbar, InputLabel } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import { useState } from 'react';
import { Container, BackButton, TotalContainer, PaymentContainer } from './styles';  
import { useHistory } from 'react-router-dom';

function Cart() {

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const history = useHistory();

  return (
    <Container>
      <BackButton onClick={() => history.push('/market')} />

      <h2>Cart</h2>

      <PaymentContainer>
        <InputLabel> Payment Method </InputLabel>
      </PaymentContainer>

      <TotalContainer>
        <div>
          <h2>Total in Cart: </h2>
          <span>$ </span>
        </div>
        
        <div>
          <h2> Balance: </h2>
          <span> $ </span> 
        </div>

        <div>
          <h2> Total Balance: </h2>
          <span> $ </span>
        </div>
      </TotalContainer>

      <Button 
        onClick={() => {
          setOpenSnackbar(true);
        }}
        color="primary"
        variant="contained"
      >
        Buy
      </Button>

      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        open={openSnackbar}
        onClose={() => setOpenSnackbar(false)} 
      >
        <MuiAlert 
          onClose={() => setOpenSnackbar(false)}
          severity="success"
        >
          Purchase made successfully!
        </MuiAlert>
      </Snackbar>
    </Container>
  )
}

export default Cart;