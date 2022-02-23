import React from 'react'
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn } from 'mdb-react-ui-kit';
import Link from 'next/link';
const axios = require('axios').default;//requiring axios
import { useRouter } from "next/router"

function EachHero({ heros }) {
    const router = useRouter();//now the router can access anything 
    const heroId = router.query.id
    // console.log("heroId", heroId);

    const deleteHero = async() => {
        try {
            const deleteHero = await axios(`http://localhost:3000/api/hero/${heroId}`, {
                method: "DELETE"


            })
            router.push("/")
        } catch (error) {
            console.log(error);


        }

    }


    return (
        <div className="container">
            <h1 className="display-3">Identity of hero</h1>
            <MDBCard className="border my-2 border-2" style={{ maxWidth: '22rem' }}>
                <MDBCardBody>
                    <MDBCardTitle>{heros.superHero}</MDBCardTitle>
                    <MDBCardText>

                        {heros.realName}
                    </MDBCardText>

                    {/* <MDBBtn >Edit Hero</MDBBtn> */}
                    <MDBBtn onClick={deleteHero} className="btn btn-danger">Delete Hero</MDBBtn>


                </MDBCardBody>
            </MDBCard>
        </div>
    )
}

export async function getServerSideProps({ params }) {
    const id = params.id //check nextjs documentation - section data fetching
    const res = await axios(`http://localhost:3000/api/hero/${id}`)
    // console.log(res.data.hero);

    // fetching datase
    const { hero } = res.data
    console.log(hero)
    return {
        props: { heros: hero },
        // naming heros which holds data of hero
        // will be passed to the page component as props
    }
}

export default EachHero