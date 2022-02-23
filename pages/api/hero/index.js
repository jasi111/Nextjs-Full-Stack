import dbConnect from "../../../db/dbconnect" // for connecting daatabase
import Hero from '../../../models/Hero' //importing models

dbConnect()  //run database connection


//get all records & post all record 

//get request object

export default async (req, res) => {
    const {method} = req  //just give the method in this request
    switch (method) {
          case 'GET': //get request
            try{
//using imported Hero 
               const heros = await Hero.find({}) //{}  means all records of Hero schems/models
               res.status(200).json({success:true, hero: heros})
              

            }catch (error) {
                res.status(400).json({success: false})

            }
        break;
        //to dupicate - alt+shift+down arrow key
        case 'POST': //post request
            try{
 
               const hero = await Hero.create(req.body)
               res.status(200).json({success:true, hero: hero})
              

            }catch (error) {
                res.status(400).json({success: false})

            }
        break;

        default:
            res.status(400).json({success: false})

            break;
    }
}