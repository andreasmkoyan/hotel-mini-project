const Home = ({ data, onDelete, onChangeFilter }) => {
    console.log(data);
    console.log(onChangeFilter);
    let temp = data
    if (onChangeFilter != "All") {
        temp = data.filter(a => a.category == onChangeFilter)
    }
    return <div className="col-md-8">
        <div id="home" className="row">
            {
                temp.map((elm, index) => {
                    return <div key={elm.id} id="hotels" className="col-md-4">
                        <img src={elm.photo} />
                        <h6>id:     {elm.id}</h6>
                        <h3>{elm.name}</h3>
                        <h5>Room Count:{elm.numberOfRooms}</h5>
                        <h5>Floor: {elm.floor}</h5>
                        <p>Class: <strong>{elm.category}</strong> </p>
                        <p>Price:<strong> {elm.price}$</strong> </p>
                        <button onClick={() => onDelete(elm.id)} className="btn btn-danger">Delete</button>
                    </div>
                })
            }
        </div>
    </div>
}

export default Home