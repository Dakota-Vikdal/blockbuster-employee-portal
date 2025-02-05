import {useState} from 'react'

function NewRental({addRental}) {

    
    const [newMovieId, setMovieId ] = useState('')
    const [newClientId, setClientId] = useState('')

    
    const movieIdChange = (e) => setMovieId(e.target.value)
    const clientIdChange = (e) => setClientId(e.target.value)
    
    const handleSubmit = e => {
        e.preventDefault()
        const newRental = {
            movie_id: newMovieId,
            client_id: newClientId 
        }
        addRental(newRental)

        e.target.reset()
    }

    return (
        <div className='new-rental-form'>
            <form onSubmit ={handleSubmit}>

                {/* <input onChange= {handleRentalId} type='text' name='name' placeholder='Rental Number' /> */}
                <input onChange= {movieIdChange} type='number' name='cost' step='1' placeholder=' Movie Id' />
                <input className='input' onChange= {clientIdChange} type='text' name='rating' placeholder=' Client Id' />
                <button type='submit'>Add Rental</button>
            </form>
        </div>
    )
}

export default NewRental;