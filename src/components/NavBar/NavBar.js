import './NavBar.css'
import { AppBar } from '@mui/material'
import { Toolbar } from '@mui/material'
import { Button } from '@mui/material'

const NavBar = () => {

    return (
        <>
            <AppBar position="static" color="inherit" className='header-principal'>
                <Toolbar>
                    <div className='container-logo'>
                        <img src="./luxon.png" alt='foto' />
                    </div>
                    <ul className='navbar'>
                        <li>
                            <Button color="inherit" className='btn-principal' >Inicio</Button>
                        </li>
                        <li>
                            <Button color="inherit" >Productos</Button>
                        </li>
                        <li>
                            <Button color="inherit"  >Novedades</Button>
                        </li>
                        <li>
                            <Button color="inherit"  >Contacto</Button>
                        </li>
                    </ul>
                </Toolbar>
            </AppBar>
            <div>
                <h1>LUXON</h1>
            </div>

        </>

    )

}

export default NavBar 