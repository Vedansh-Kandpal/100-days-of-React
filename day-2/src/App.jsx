import { useState } from 'react'
import './App.css';

function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && phone) {
      const url = 'https://jsonplaceholder.typicode.com/users'
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone })
      };
      fetch(url, requestOptions)
        .then(response => {
          alert('Submitted successfully')
          setName('')
          setEmail('')
          setPhone('')
        })
        .catch(error => alert('Form submit error', error))

    } else {
      alert("Please fill all the fields");
    }

  }

  return (
    <>
      <div className="form-container">
        <h1>Contact Form</h1>
        <form action="#">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              value={name}
              onChange={
                (e) => setName(
                  e.target.value
                )
              }
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              value={email}
              onChange={
                (e) => setEmail(
                  e.target.value
                )
              }
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Your Phone Number"
              value={phone}
              onChange={
                (e) => setPhone(e.target.value)
              }
              required
            />
          </div>

          <div className="form-group">
            <button
              type="submit"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </form >
      </div >
    </>
  )
}

export default App
