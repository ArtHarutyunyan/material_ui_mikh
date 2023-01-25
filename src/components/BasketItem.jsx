import { Close } from "@mui/icons-material";
import { IconButton, ListItem, Typography } from "@mui/material";

const BasketItem = (props) => {
  const { rempveFromOrder, id, name, price, quantity } = props;
  console.log(rempveFromOrder);

  return (
    <ListItem>
      <Typography variant="body1">
        {name} {price}руб x{quantity}
      </Typography>
      <IconButton onClick={() => rempveFromOrder(id)}>
        <Close />
      </IconButton>
    </ListItem>
  );
};

export default BasketItem;
