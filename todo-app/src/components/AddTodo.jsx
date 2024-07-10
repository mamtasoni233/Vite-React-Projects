export default function AddTodo() {
    return (
        <>
            <div className="row">
                <div className="col-6">
                    <input type="text" placeholder="enter to do here" />
                </div>
                <div className="col-4">
                    <input type="date" name="date" id="date" />
                </div>
                <div className="col-2">
                    <button type="button" className="btn btn-success">Add</button>
                </div>
            </div>
        </>
    )
}
