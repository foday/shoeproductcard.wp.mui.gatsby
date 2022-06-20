// import React from 'react'
// import {Link} from 'gatsby'
// import '../styles/global.css'
// import '../styles/home.css'

// function Navbar() {
//   return (
//     <nav>
//       <h1>addidas</h1>
//         {/* <Link to="/" style={{ textDecoration: 'none'}}><h1>Illuminatingmedia</h1></Link> */}
//         <div className="links">
//             <Link to="/" ></Link>
//             <Link to="/mens">JUSTIN</Link>
//             <Link to="/women">COLLECTION</Link>
//             <Link to="/kids">LOOKBOOK</Link>
//             <Link to="/customize">ACCOUNT</Link>
//         </div>
//     </nav>
    
//   )
// }

// export default Navbar



import React from 'react'
import {AppBar, Toolbar, Typography} from '@material-ui/core'
import ChangeHistory from '@material-ui/icons/ChangeHistory'
// import {CurrencyYenIcon} from '@material-ui/icons/CurrencyYen';

function Navbar() {
  return (
    <nav>
        <AppBar style={{background: 'transparent', boxShadow: 'none'}}>
            <Toolbar>
                <Typography style={{flexGrow: 1}}><ChangeHistory fontSize="large"/></Typography>
                <Typography style={{margin: "5px"}}>JUST IN</Typography>
                <Typography style={{margin: "5px"}}>COLLECTION</Typography>
                <Typography style={{margin: "5px"}}>LOOKBOOK</Typography>
                <Typography style={{margin: "5px"}}>ACCOUNT</Typography>
                
            </Toolbar>
        </AppBar>
    </nav>
  )
}

export default Navbar