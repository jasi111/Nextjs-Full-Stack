// giving file name in [] square bracket because in
// in next js to if a file want to communicate to database we use [] brackets for file name
// here passing id for doing some action

import dbConnect from "../../../db/dbconnect" // for connecting daatabase
import Hero from '../../../models/Hero' //importing models

dbConnect()  //run database connection


//to get a uniques record based on id ,edit, delete

//createing a method
export default async (req, res) => {
    const {
        query: { id }, //see documentation - giving access to id from file [id]
        method //query give access to the id
    } = req

    switch (method){//just evaluate based on this method
    case 'GET'://if the method is get
        try {
            const hero = await Hero.findById(id) 
            //using await becos its on datatbas
            //finding by id

            if (!hero){//if no hero
                res.status(400).json({ success: false, hero:hero })
            }
            //if hero yes
            res.status(200).json({ success: true, hero:hero })

        } catch (error) {
            res.status(400).json({ success: false })

        }

        break;

   
    
    case 'PUT'://if the method is get
        try {
            const hero = await Hero.findByIdAndUpdate(id, req.body,{
                new:true,
                runValidators:true
            } )
            //fing by id to update

            if (!hero){
                res.status(400).json({ success: false, hero:hero })

            }
            res.status(200).json({ success: true, hero:hero })

        } catch (error) {
            res.status(400).json({ success: false })

        }

        break;


        case 'DELETE'://if the method is get
        try {
            const hero = await Hero.deleteOne({_id: id})//delete by id

            if (!hero){
                res.status(400).json({ success: false, hero:hero })

            }
            res.status(200).json({ success: true, hero:hero })

        } catch (error) {
            res.status(400).json({ success: false })

        }

        break;

    default:
        res.status(400).json({ success: false })

        break;
    }
}
