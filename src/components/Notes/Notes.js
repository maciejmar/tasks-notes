import React, { useState } from "react";
import './Notes.css'
import data from "../../data/data.js";
import Note from "./../Note/Note"
export default function Notes () {
const [note, setNote] = useState();

return (
    <> 
        <p> All notes </p>
        
        {data.map( (jsdata) => (
            <Note key ={jsdata.id}
                id = {jsdata.id}
                title = {jsdata.title}
                body = {jsdata.body}
            />
            
         ) )}
    </>
)
}