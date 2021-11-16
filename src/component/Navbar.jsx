import { AppBar, Toolbar,  makeStyles } from "@material-ui/core";
import './Navbar.css';
import { NavLink } from "react-router-dom";

const useStyles = makeStyles({
    header : {
        background : '#b7b1b1'
    },
    tabs : {
        color : '#ffffff',
        textDecoration : 'none',
        marginRight : 50,
        padding: '21px 25px',
        
        "&:hover": {
            background: "black",
            border: 'none',
            color: 'white',
            padding: '21px 25px',
            textAlign: 'center',
            textDecoration: 'none',
            fontSize: 16 ,
            
          },
         
    
}

})
const Navbar = () =>{
    const classes = useStyles();
    return(
        <AppBar className={classes.header} position='static'>
            <Toolbar>
                <h2 className='logo' >LOGO</h2>
                <NavLink className={classes.tabs}to='./'> Home</NavLink>
                <NavLink className={classes.tabs} to='Task'> Task</NavLink>
                <NavLink className={classes.tabs} to='User'> User</NavLink>
                 
            </Toolbar>
        </AppBar>    )
}
export default Navbar;