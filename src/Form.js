import React, { useState } from 'react'

const Form = ({ setDogs, setTitle }) => {
    const [formObject, setFormObject] = useState({
        title: '',
        breed: 'dachshund',
        number: '5'
    })

    const updateForm = (e) => {
        const key = e.target.name;
        const value = e.target.value;
        setFormObject({...formObject, [key]: value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const cleanFormObject = {...formObject, number: parseInt(formObject.number)}
        fetch(`https://dog.ceo/api/breed/${cleanFormObject.breed}/images/random/${cleanFormObject.number}`)
            .then(r => r.json())
            .then(data => setDogs(data.message))
        setTitle(cleanFormObject.title)
    }



    return (
        <form>
            <label>
                Title Them Dogs
                <input 
                    name='title' 
                    value={formObject.title}
                    onChange={e => updateForm(e)}
                />
            </label>
            <br />
            <label>
                Breed:
                <select 
                    name='breed' 
                    value={formObject.breed} 
                    onChange={e => updateForm(e)}
                >
                  <option value="dachshund">Dachshund</option>
                  <option value="beagle">Beagle</option>
                  <option value="brabancon">Brabancon</option>
                  <option value="chow">Chow</option>
                </select>
            </label>
            <br />
            <label>
                How many of these lil guys you want?
                <select 
                    name='number' 
                    value={formObject.number} 
                    onChange={e => updateForm(e)}
                >
                  <option value="5">5</option>
                  <option value="10">10</option>
                  <option value="20">20</option>
                </select>
            </label>
            <button type='submit' onClick={e => handleSubmit(e)}>Submit</button>
        </form>
        
    )
}

export default Form
