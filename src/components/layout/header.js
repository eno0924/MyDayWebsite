import React from 'react';

function Header(){
return (
<header style={headerStyle} >
 <h1>Plan your day</h1>
 </header>
 );
}

const headerStyle = {
background: "#009999",
color: "black",
textAlign: "center",
padding: "10px",
fontSize: "30px"
};


export default Header;