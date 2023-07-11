import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import AddRoom from './components/AddRoom';
import { useState } from 'react';

function App() {
  const [rooms, setRooms] = useState([
    { id: 101, name: "Maldivner", numberOfRooms: 1, floor: 7, photo: "https://www.gannett-cdn.com/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg", category: "Vip", price: 1000 },
    { id: 102, name: "Ibizza", numberOfRooms: 1, floor: 3, photo: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&w=1000&q=80", category: "Premium", price: 800 },
    { id: 103, name: "Dubai", numberOfRooms: 3, floor: 3, photo: "https://www.ahstatic.com/photos/b8d7_ho_00_p_1024x768.jpg", category: "Premium", price: 1200 },
    { id: 104, name: "Caxkadzor", numberOfRooms: 1, floor: 1, photo: "https://cache.marriott.com/content/dam/marriott-renditions/EVNTK/evntk-guestroom-0030-hor-wide.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1336px:*", category: "Classic", price: 150 },
  ])
  const [currentFilter, setCurrentFilter] = useState("All")
  const [category, setCategory] = useState(["All", "Vip", "Premium", "Classic"])
  const [select, setSelect] = useState(["Vip", "Premium", "Classic"])
  console.log(category);

  const deleteRoom = id => {
    setRooms(rooms.filter(elm => elm.id != id))
  }

  const add = obj => {
    setRooms([...rooms, { ...obj, id: Date.now() }])
  }

  const sortPrice = () => {
    setRooms([...rooms.sort((a, b) => a.price > b.price ? 1 : -1)])
  }

  const sortByNumberOfRooms = () => {
    setRooms([...rooms.sort((a, b) => a.numberOfRooms > b.numberOfRooms ? 1 : -1)])
  }

  return (
    <div className="App">
      <button className='btn btn-warning' onClick={() => sortPrice()}>Sort By Price</button>
      <button className='btn btn-warning' onClick={() => sortByNumberOfRooms()}>Sort By NumberOfRooms</button>

      <select
        onChange={e => setCurrentFilter(e.target.value)}
        value={currentFilter}
      >
        {
          category.map((elm, index) => {
            return <option key={index} value={elm}>{elm}</option>
          })
        }
      </select>
      <div id='main'>

        <Home
          data={rooms}
          onDelete={deleteRoom}
          onChangeFilter={currentFilter}
        />
        <AddRoom
          categories={select}
          onAdd={add}
        />
      </div>
    </div>
  );
}

export default App;
