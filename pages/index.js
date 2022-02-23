import React from 'react'
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn } from 'mdb-react-ui-kit';
import Link from 'next/link';
const axios = require('axios').default;//requiring axios

function index({heros}) {
  return (
    <div className="container">
      <h1 className="display-2">Superhero Identity</h1>
   {/* {heros.length} */}
   <div>

   {heros.map (hero => {
     return (
      <MDBCard className="border my-2 border-2" style={{ maxWidth: '22rem' }}>
      <MDBCardBody>
        <MDBCardTitle>{hero.superHero}</MDBCardTitle>
        <MDBCardText>
Reveal Identity        </MDBCardText>

<Link href={`/${hero._id}`}><MDBBtn className="mx-2">View Hero</MDBBtn></Link>
<Link href={`/${hero._id}/edit`}><MDBBtn>Edit Hero</MDBBtn></Link>
{/* id and edit file */}
      </MDBCardBody>
    </MDBCard>
     )
   })}
  
   </div>
   
    </div>
  )
}


export async function getServerSideProps(context) {
  const res= await axios("http://localhost:3000/api/hero")
  // console.log(res.data.hero);

  // fetching datase
  const {hero} = res.data
  console.log(hero)
  return {
    props: {heros: hero}, 
    // naming heros which holds data of hero
     // will be passed to the page component as props
  }
}

export default index