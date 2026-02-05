import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useNavigate } from 'react-router-dom';

export default function SideMenu() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const navigate = useNavigate();

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <InboxIcon /> 
              </ListItemIcon>
              <ListItemText primary={"메모"} onClick={()=>{
                navigate("/memo")
              }} />
            </ListItemButton>
          </ListItem>
        
      </List>
      
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)} sx={{position:"fixed" ,top:"0px",left:"0px"}}>open</Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
