import { MDBInput, MDBBtn } from 'mdb-react-ui-kit';
import Link from 'next/link';
const axios = require('axios').default;//requiring axios
import Router, {useRouter} from 'next/router'
import {useState} from "react"

function EditHero({heros}) {

    const router = useRouter();//now the router can access anything 
    const heroId = router.query.id

    const [form, setForm] = useState({ //for form
        superHero: heros.superHero,
        realName: heros.realName, //from models folder > Hero.js
      })
    
      //  Assignment - form validation
    
      //method to handle form
      const handleChange = (e) => {
        setForm({
          ...form, //populating eisting values
          [e.target.name]: e.target.value //so whatever the values come in will go to the appropriate destination
        })
      }
      const handleForm = async(e) => {
          e.preventDefault()
        try {
          const res = await axios(`http://localhost:3000/api/hero/${heroId}`,{

          
          method: "PUT",
            headers: {
            "Content-Type": "application/json"
          },
          data:JSON.stringify(form)
        })
        Router.push('/')
      }
      catch (error) {
        console.log(error)
      }
    }
    
  return (
    <div className="container">
     <h1 className="display-3">Add a new hero identity</h1>   
     <form onSubmit={handleForm}>
         <MDBInput 
         onChange={handleChange}
         label="SuperHero"
         type="text"
         name="superHero"
         value={form.superHero}
         />
            <MDBInput 
         className="my-2"
         onChange={handleChange}
         label="Real Name"
         type="text"
         name="realName"
         value={form.realName}


         />
         <MDBBtn type="submit">Edit hero</MDBBtn>
     
     </form>
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
export default EditHero