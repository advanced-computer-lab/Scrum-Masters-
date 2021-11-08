import Button from '@mui/material/Button';

export default function ButtonComp({onClick}){
   return(
    <Button 
    variant="contained" 
    color="success"
    onClick = {onClick}
    type = "submit"
    >
    Search
  </Button>
   )
}