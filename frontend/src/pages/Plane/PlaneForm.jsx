import axios from 'axios';
import {useState} from 'react'

function PlaneForm({ onAction  }) {
    const [showForm, setShowForm] = useState(false);
    const [name, setName] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Perform form submission logic here
      console.log('Submitted:', name);
      axios.post(`/api/playlist`, { name: name })
      .then(response => {
            console.log(response.data.message);
        })
        .catch(error => {
            console.error(error);
        });
      // Reset form fields and hide form panel
      setName('');
      onAction();
    };
  
    return (
          <div>
            <form onSubmit={handleSubmit}>
              <label>
                Name:
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
              </label>
              <br />
              {name &&
              <button type="submit">Submit</button>}
              <button onClick={onAction}>Cancel</button>
            </form>
          </div>
    );
  };

export default PlaneForm