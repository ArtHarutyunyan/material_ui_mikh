import { Alert, Snackbar } from "@mui/material";

function Snack({ isOpen, handleClose = Function.prototype }) {
  return (
    <Snackbar open={isOpen} onClose={handleClose} autoHideDuration={3000}>
      <Alert severity="success">Товар добавлен в корзины!</Alert>
    </Snackbar>
  );
}

export default Snack;
