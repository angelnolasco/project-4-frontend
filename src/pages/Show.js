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
            <div className="hike-2">
              <h1>Mountain: {hike.name}</h1>
              <h1>Location: {hike.location}</h1>
              <img className="mountain-image" src={hike.image} alt={hike.name} />
              <h1>Difficulty: {hike.difficulty}</h1>
              <h1>Elevation: {hike.elevation}</h1>
              <h1>Visited: <input type="checkbox"/></h1>
              <div className="button-container">
              <button onClick={handleEdit}>{ isEditing ? " cancel update" : "update"}</button>
              <button onClick={handleDelete}> check off </button>
              </div>
              </div>
            </>
        )
    }

    const loading = () => {
        return <h1> Loading...</h1>
    }
    
    return (
        <div className="hike-show">
            {hike ? loaded() : loading()}

            { isEditing && 
             <form onSubmit={handleUpdate}>
                <input type="text" value={editForm.name} name="name" placeholder="name" onChange={handleChange} />
                <input type="text" value={editForm.image} name="image" placeholder="image URL" onChange={handleChange} />
                <input type="text" value={editForm.location} name="location" placeholder="location" onChange={handleChange} />
                <input type="text" value={editForm.difficulty} name="difficulty" placeholder="difficulty" onChange={handleChange} />
                <input type="number" value={editForm.elevation} name="elevation" placeholder="elevation" onChange={handleChange} />
                <input type="submit" value=" update hike" />
             </form>
            }
        </div>
    )
}

export default Show