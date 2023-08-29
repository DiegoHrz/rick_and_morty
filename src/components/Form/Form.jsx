import { useState } from 'react'
import './Form.css'
import validation from './validation'

function Form({login}) {

    const [errors, setErrors] = useState({
        email: '',
        password: '',
    })


    const [user, setUser] = useState({
        email: '',
        password: '',
    })

    const handleChange = (e) =>{
        setUser({
            ...user,
            [e.target.name] : e.target.value,
        })
        setErrors(validation({ 
                ...user,
                [e.target.name] : e.target.value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault(user)
    

        if(!errors.email && !errors.password){
            login(user)
        } else{
            alert('Incorrect Data');
        }
    }


  return (
    <div className='form-div'>
        <form onSubmit={handleSubmit} >
            <div className='form-containers' >
                <label htmlFor="Email">Email</label>
                <input type="email" name="email" value={user.email} id="email" onChange={handleChange}/>
                {errors.email && <span>{errors.email}</span>}
            </div>
            <div>
                <label htmlFor="email">Password</label>
                <input type="password" name="password" value={user.password} id="password" onChange={handleChange}/>
                {errors.password && <span>{errors.password}</span>}
            </div>
            <button className='form-button' type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Form