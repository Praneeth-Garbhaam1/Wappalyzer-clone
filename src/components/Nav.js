import React from 'react'
import { Link} from 'react-router-dom'
import Logo from '../svg_folder/wappalyzer-white-1.svg'
import Button from '@material-ui/core/Button';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormGroup from '@material-ui/core/FormGroup';
import DialogActions from '@material-ui/core/DialogActions'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import './Nav.css'

function Nav() {
    const [open, setOpen] = React.useState(false);

    const openDialog= () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
      };
    return (
        <div>
            <nav>
                <div className="logo">
                    <img src={Logo} alt="wap-alt"/><span><Link to="/">Wappalyzer</Link></span>
                </div>
                <ul className="nav-links">
                    <li><Button>Products<ExpandMoreIcon/></Button></li>
                    <li><Button><Link to="/pricing">Pricing</Link></Button></li>
                    <li><Button>Resources<ExpandMoreIcon/></Button></li>
                    <li><Button><Link to="/about">About</Link></Button></li>
                    <li><Button onClick={openDialog}>Sign Up free</Button></li>
                </ul>
            </nav>
            <Dialog open={open} 
        onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title"><span>Sign Up</span></DialogTitle>
        <DialogContent>
          <DialogContentText>
          Sign up for free to receive 50 credits every month to spend on any product.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
          />
           <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Password"
            type="email"
            fullWidth
          /><FormGroup row>
            <FormControlLabel
        control={
          <Checkbox
            name="checkedB"
            color="Primary"
          />
        }
        label="Receive occasional product updates"
      /></FormGroup>
      <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Sign Up
          </Button>
        </DialogActions>
        </DialogContent>
      </Dialog>
        </div>
    )
}

export default Nav;
