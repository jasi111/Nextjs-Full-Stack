import React from 'react'
import Link from 'next/link' //check next.js documentation
import { MDBBtn } from 'mdb-react-ui-kit'
// import { useRouter } from "net/router"
// import axios from 'axios'


function Navbar() {

  
return (
  <nav className="navbar container">
    {/* //classname coming from bootstrap */}
    <Link href="/">
      <a className="navbar-brand">Superhero Identity</a>
    </Link>

    <Link href="/add">
      <MDBBtn>New Identity</MDBBtn>
    </Link>
  </nav>
)
}

export default Navbar