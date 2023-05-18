import React, {useState} from "react";
import { Link } from "react-router-dom/dist";

const Index = (props) => {
    const [newForm, setNewForm] = useState({
      name: "",
      image: "",
      location: "",
      difficulty: "",
      elevation: "",
      visited: false,

    })

    const handleChange = (event) => {
      setNewForm({...newForm, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
      event.preventDefault()
      props.createMountain(newForm)
      setNewForm({
         name: "",
         image: "",
         location: "",
         difficulty: "",
         elevation: "",
         visited: false,
         
        })
    }

    const loaded = () => {
       return props.mountain.map((hike) =>(
        <div key={hike._id} className="hike">
            <Link to={`/mountain/${hike._id}`}><h1>{hike.name}</h1>
            </Link>
            <img src={hike.image} alt={hike.name}/>
        </div>
        ))
    }

    const loading = () => {
        return <h1> loading...</h1>
    }

    return (
        <section className="index">
            <form onSubmit={handleSubmit}>
                <input type="text" value={newForm.name} name="name" placeholder="name" onChange={handleChange} />
                <input type="text" value={newForm.image} name="image" placeholder="image URL" onChange={handleChange} />
                <input type="text" value={newForm.location} name="location" placeholder="location" onChange={handleChange} />
                <input type="text" value={newForm.difficulty} name="difficulty" placeholder="difficulty" onChange={handleChange} />
                <input type="number" value={newForm.elevation} name="elevation" placeholder="elevation" onChange={handleChange} />
               <input type="submit" value=" create hike" />
            </form>
            {props.mountain ? loaded() : loading()}
        </section>
    )
}

export default Index