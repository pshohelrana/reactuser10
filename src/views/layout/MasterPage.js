import * as React from 'react';
import { Outlet, Link } from "react-router-dom";
import PropTypes from 'prop-types';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const drawerWidth = 300;

function MasterPage(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar>
          <img src="Rana.jpg" style={{position:"absolute",height:"100%"}} />
          <span style={{marginLeft:"70px"}}>ACS</span>
      </Toolbar>
      <Divider />

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}  aria-controls="panel1a-content" id="panel1a-header">
          <Typography>Dashboard</Typography>
        </AccordionSummary>
        <AccordionDetails>
         
            <List>
              <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Home" />
                  </ListItemButton>
                </ListItem>
              </Link>

              <Link to="/blogs" style={{ textDecoration: "none", color: "black" }}>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Blogs" />
                  </ListItemButton>
                </ListItem>
              </Link>

              <Link to="/contact" style={{ textDecoration: "none", color: "black" }}>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Contact" />
                  </ListItemButton>
                </ListItem>
              </Link>
            </List>
          
        </AccordionDetails>
      </Accordion>

      {/* <Accordion>
      <AccordionSummary
          expandIcon={<ExpandMoreIcon />}  aria-controls="panel1a-content" id="panel1a-header">
          <Typography>Inventory</Typography>
        </AccordionSummary>
        <AccordionDetails>
        
            <List>
              <Link to="/products/create-product" style={{ textDecoration: "none", color: "black" }}>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Create Product" />
                  </ListItemButton>
                </ListItem>


              </Link>

              <Link to="/products" style={{ textDecoration: "none", color: "black" }}>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Manage Product" />
                  </ListItemButton>
                </ListItem>
              </Link>

              <Link to="/categories" style={{ textDecoration: "none", color: "black" }}>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Manage Category" />
                  </ListItemButton>
                </ListItem>
              </Link>
            </List>
         
        </AccordionDetails>
      </Accordion>


      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}  aria-controls="panel1a-content" id="panel1a-header">
          <Typography>Sales</Typography>
        </AccordionSummary>
        <AccordionDetails>
        
            <List>
              <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Home" />
                  </ListItemButton>
                </ListItem>


              </Link>

              <Link to="/blogs" style={{ textDecoration: "none", color: "black" }}>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Blogs" />
                  </ListItemButton>
                </ListItem>
              </Link>

              <Link to="/contact" style={{ textDecoration: "none", color: "black" }}>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Contact" />
                  </ListItemButton>
                </ListItem>
              </Link>
            </List>
         
        </AccordionDetails>


      </Accordion> */}
        
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}  aria-controls="panel1a-content" id="panel1a-header">
          <Typography>Loanactive</Typography>
        </AccordionSummary>
        <AccordionDetails>
         
            <List>
              <Link to="/loanactive/create" style={{ textDecoration: "none", color: "black" }}>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Loanactive Invoice" />
                  </ListItemButton>
                </ListItem>


              </Link>

            </List>
         
        </AccordionDetails>


      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}  aria-controls="panel1a-content" id="panel1a-header">
          <Typography>Deposit</Typography>
        </AccordionSummary>
        <AccordionDetails>
         
            <List>
              <Link to="/diposit/create" style={{ textDecoration: "none", color: "black" }}>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Deposit Invoice" />
                  </ListItemButton>
                </ListItem>


              </Link>

            </List>
         
        </AccordionDetails>


      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}  aria-controls="panel1a-content" id="panel1a-header">
          <Typography>Withdraw</Typography>
        </AccordionSummary>
        <AccordionDetails>
         
            <List>
              <Link to="/withdraw/create" style={{ textDecoration: "none", color: "black" }}>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Withdraw Invoice" />
                  </ListItemButton>
                </ListItem>


              </Link>

            </List>
         
        </AccordionDetails>


      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}  aria-controls="panel1a-content" id="panel1a-header">
          <Typography>System</Typography>
        </AccordionSummary>
        <AccordionDetails>
        
            <List>             

              <Link to="/system/user/create" style={{ textDecoration: "none", color: "black" }}>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Create User" />
                  </ListItemButton>
                </ListItem>
              </Link>

              <Link to="/system/user" style={{ textDecoration: "none", color: "black" }}>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Manage User" />
                  </ListItemButton>
                </ListItem>
              </Link>             

             
              <Link to="/signout" style={{ textDecoration: "none", color: "black" }}>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Signout" />
                  </ListItemButton>
                </ListItem>
              </Link>
            </List>
         
        </AccordionDetails>


      </Accordion>


      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}  aria-controls="panel1a-content" id="panel1a-header">
          <Typography>Loanapplicant</Typography>
        </AccordionSummary>
        <AccordionDetails>
        
            <List>             

              <Link to="/system/loanapplicant/create" style={{ textDecoration: "none", color: "black" }}>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Create Loanapplicant" />
                  </ListItemButton>
                </ListItem>
              </Link>

              <Link to="/system/loanapplicant" style={{ textDecoration: "none", color: "black" }}>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Manage Loanapplicant" />
                  </ListItemButton>
                </ListItem>
              </Link>             

             
              
            </List>
         
        </AccordionDetails>


      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}  aria-controls="panel1a-content" id="panel1a-header">
          <Typography>Member</Typography>
        </AccordionSummary>
        <AccordionDetails>
        
            <List>             

              <Link to="/system/member/create" style={{ textDecoration: "none", color: "black" }}>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Create Member" />
                  </ListItemButton>
                </ListItem>
              </Link>

              <Link to="/system/member" style={{ textDecoration: "none", color: "black" }}>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Manage Member" />
                  </ListItemButton>
                </ListItem>
              </Link>             

             
              
            </List>
         
        </AccordionDetails>


      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}  aria-controls="panel1a-content" id="panel1a-header">
          <Typography>Diposit</Typography>
        </AccordionSummary>
        <AccordionDetails>
        
            <List>             

              <Link to="/system/diposit/create" style={{ textDecoration: "none", color: "black" }}>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Create Diposit" />
                  </ListItemButton>
                </ListItem>
              </Link>

              <Link to="/system/diposit" style={{ textDecoration: "none", color: "black" }}>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Manage Diposit" />
                  </ListItemButton>
                </ListItem>
              </Link>             

             
              
            </List>
         
        </AccordionDetails>


      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}  aria-controls="panel1a-content" id="panel1a-header">
          <Typography>Withdraw</Typography>
        </AccordionSummary>
        <AccordionDetails>
        
            <List>             

              <Link to="/system/withdraw/create" style={{ textDecoration: "none", color: "black" }}>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Create Withdraw" />
                  </ListItemButton>
                </ListItem>
              </Link>

              <Link to="/system/withdraw" style={{ textDecoration: "none", color: "black" }}>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Manage Withdraw" />
                  </ListItemButton>
                </ListItem>
              </Link>             

             
              
            </List>
         
        </AccordionDetails>


      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}  aria-controls="panel1a-content" id="panel1a-header">
          <Typography>Loanactive</Typography>
        </AccordionSummary>
        <AccordionDetails>
        
            <List>             

              <Link to="/system/loanactive/create" style={{ textDecoration: "none", color: "black" }}>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Create Loanactive" />
                  </ListItemButton>
                </ListItem>
              </Link>

              <Link to="/system/loanactive" style={{ textDecoration: "none", color: "black" }}>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Manage Loanactive" />
                  </ListItemButton>
                </ListItem>
              </Link>             

             
              
            </List>
         
        </AccordionDetails>


      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}  aria-controls="panel1a-content" id="panel1a-header">
          <Typography>Income</Typography>
        </AccordionSummary>
        <AccordionDetails>
        
            <List>             

              <Link to="/system/income/create" style={{ textDecoration: "none", color: "black" }}>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Create Income" />
                  </ListItemButton>
                </ListItem>
              </Link>

              <Link to="/system/income" style={{ textDecoration: "none", color: "black" }}>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Manage Income" />
                  </ListItemButton>
                </ListItem>
              </Link>             

             
              
            </List>
         
        </AccordionDetails>


      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}  aria-controls="panel1a-content" id="panel1a-header">
          <Typography>Expense</Typography>
        </AccordionSummary>
        <AccordionDetails>
        
            <List>             

              <Link to="/system/expense/create" style={{ textDecoration: "none", color: "black" }}>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Create Expense" />
                  </ListItemButton>
                </ListItem>
              </Link>

              <Link to="/system/expense" style={{ textDecoration: "none", color: "black" }}>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Manage Expense" />
                  </ListItemButton>
                </ListItem>
              </Link>             

             
              
            </List>
         
        </AccordionDetails>


      </Accordion>

     
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Agrogoti Cooperative Societies
          </Typography>
        </Toolbar>
      </AppBar>

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}

MasterPage.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default MasterPage;