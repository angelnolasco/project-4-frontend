import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Show = (props) => {
    const { id } = useParams()
    const navigate = useNavigate()
    const mountain = props.mountain

    const hike = mountain ? mountain.find((h) => h._id === id) : null

    const [editForm, setEditForm] = useState(hike)

    const [isEditing, setIsEditing] = useState(false)

    useEffect(() =>{
        if (hike) {
            setEditForm(hike)
        }
    }, [hike])

    const handleChange = (e) => {
        setEditForm({
            ...editForm,
            [e.target.name]: e.target.value
        })
    }

    const handleUpdate = (e) => {
        e.preventDefault()
        props.updateMountain(editForm, hike._id)
    }

    const handleEdit = () => {
        setIsEditing(prevState => !prevState)
    }

    const handleDelete = () => {
        props.deleteMountain(hike._id)
        navigate("/")
    }

    const loaded = () => {
        return (
            <>
              <h1>{hike.name}</h1>
              <h1>{hike.Location}</h1>
              <img className="mountain-image" src={hike.image} alt={hike.name} />
              <h1>{hike.Difficulty}</h1>
              <button onClick={handleEdit}>{ isEditing ? " cancel edit" : "edit"}</button>
              <button onClick={handleDelete}> DELETE</button>
            </>
        )
    }

    const loading = () => {
        return <h1> Loading...</h1>
    }
    
    return (
        <div className="hike">
            {hike ? loaded() : loading()}

            { isEditing && 
             <form onSubmit={handleUpdate}>
             <input type="text" value={editForm.name} name="name" placeholder="name" onChange={handleChange} />
             <input type="text" value={editForm.image} name="image" placeholder="image URL" onChange={handleChange} />
             <input type="text" value={editForm.Location} name="Location" placeholder="Location" onChange={handleChange} />
             <input type="text" value={editForm.Difficulty} name="Difficulty" placeholder="Difficulty" onChange={handleChange} />
             <input type="submit" value=" update hike" />
         </form>
            }
        </div>
    )
}

export default Show
