import { useState } from "react"
import { useForm } from "react-hook-form"

const AddRoom = ({ categories, onAdd }) => {
    const [form, setForm] = useState({ name: "", numberOfRooms: 0, floor: 0, photo: "", category: "", price: 0 })
    const [error, setError] = useState("")


    const handleSubmit = event => {
        console.log(form);
        event.preventDefault()
        if (!form.name.trim()) {
            setError("Please write Name")
        } else if (!form.numberOfRooms || form.numberOfRooms <= 0 || !form.floor || form.floor <= 0 || !form.price || form.price <= 0) {
            setError("Number mustn't be 0 or negative number")
        } else if (!form.photo.trim() || !form.category) {
            setError("You have't completed photo or category fields")
        }else{
            onAdd(form)
            setForm({ name: "", numberOfRooms: 0, floor: 0, photo: "", category: "", price: 0 })
        }
            
        // const {
        //     register,
        //     handleSubmit,
        //     formState: { errors },
        //   } = useForm()
    }
    return <div>
        <h1 className="add">Add Room</h1>
        <p className="red"> {error}</p>
        <form className="form" onSubmit={handleSubmit}>
            <div>
                <label>Name</label>
                <input
                    type="text"
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                />
            </div>
            <div>
                <label>NumberOfRooms</label>
                <input
                    type="number"
                    value={form.numberOfRooms}
                    onChange={e => setForm({ ...form, numberOfRooms: +e.target.value })}
                />
            </div>
            <div>
                <label>Floor</label>
                <input
                    type="number"
                    value={form.floor}
                    onChange={e => setForm({ ...form, floor: +e.target.value })}
                />
            </div>
            <div>
                <label>Photo</label>
                <input
                    type="text"
                    value={form.photo}
                    onChange={e => setForm({ ...form, photo: e.target.value })}
                />
            </div>
            <div>
                <label>category</label>
                <select
                    value={form.category}
                    onChange={e => setForm({ ...form, category: e.target.value })}
                >
                    {
                        categories.map((elm, index) => {
                            return <option key={index}>{elm}</option>
                        })
                    }
                </select>
            </div>
            <div>
                <label>Price</label>
                <input
                    type="number"
                    value={form.price}
                    onChange={e => setForm({ ...form, price: +e.target.value })}
                />
            </div>
            <button>Save</button>
        </form>
    </div>
}

export default AddRoom