import { useState } from 'react'

import { 
    AppBar,
    Box,
    Toolbar,
    Typography,
    Button,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from '@mui/material'

import { useHistory } from 'react-router-dom'

import MenuIcon from '@mui/icons-material/Menu'
import HomeIcon from '@mui/icons-material/Home'
import PersonAddIcon from '@mui/icons-material/PersonAdd'

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const history = useHistory()

    const handleToggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    const handleMenuClick = route => {
        handleToggleMenu()
        history.push(route)
    }

    return ( 
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" color="secondary">
                    <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={() => handleToggleMenu()}
                    >
                        <MenuIcon />

                    </IconButton>
                    <Typography variant="h6" component="div" 
                    sx={{
                        flexGrow: 1,
                    }}>
                        My App
                    </Typography>
                    <Button sx={{ fontSize: "20px", fontWeight: "bold", }} color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
            </Box>

            <Drawer open={menuOpen} onClose={() => handleToggleMenu()}>
                <List>

                    <ListItem button onClick={() => handleMenuClick('/')}> 
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText>Home</ListItemText>
                    </ListItem>

                    <ListItem button onClick={() => handleMenuClick('/customers')}>
                        <ListItemIcon>
                            <PersonAddIcon />
                        </ListItemIcon>
                        <ListItemText>Cadastro de Clientes</ListItemText>
                    </ListItem>

                    <ListItem button onClick={() => handleMenuClick()}>
                        <ListItemIcon></ListItemIcon>
                        <ListItemText>Tipos de Projetos</ListItemText>
                    </ListItem>

                </List>
            </Drawer>
        </>
     )
}
 
export default Header
