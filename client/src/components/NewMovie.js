import {useState} from 'react'

function NewMovie({addMovie}) {

    const [newName, setName ] = useState('')
    const [newCost, setCost] = useState('')
    const [newRating, setRating] = useState('')

    const nameChange = e => setName(e.target.value)
    const costChange = e => setCost(e.target.value)
    const ratingChange = e => setRating(e.target.value)

    const handleSubmit = e => {
        e.preventDefault()
        const newMovie = {
            name: newName,
            cost: newCost,
            rating: newRating
        }
        addMovie(newMovie)
        e.target.reset()
    }

    return (
        <div className='new-movie-form'> 
            <form onSubmit ={handleSubmit}>
                <input onChange= {nameChange} type='text' name='name' placeholder=' Movie name' />
                <input className='input' onChange= {costChange} type='number' name='cost' step='0.01' placeholder=' Movie cost' />
                <input className='input' onChange= {ratingChange} type='text' name='rating' placeholder=' Movie rating' />
                <button type='submit'>Add Movie</button>
            </form>
        </div>
    )
}

export default NewMovie