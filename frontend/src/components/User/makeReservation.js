import Button from '@mui/material/Button';

export default function ButtonComp({onClick}){
   return(
    <Button 
    variant="contained" 
    color="white"
    backgroundColor=""
    onClick = {onClick}
    type = "submit"
    >
    Book Ticket
  </Button>
   )
}
