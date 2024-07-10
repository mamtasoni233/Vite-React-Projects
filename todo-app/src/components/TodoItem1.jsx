import React from "react";
// eslint-disable-next-line react/prop-types
export default function TodoItem1({ todoName, todoDate }) {

    return (
        <React.Fragment>
            <div className="row" >
                <div className="col-6">
                    {todoName}
                </div>
                <div className="col-4">
                    {todoDate}
                </div>
                <div className="col-2">
                    <button type="button" className="btn btn-danger">Delete</button>
                </div>
            </div>
        </ React.Fragment>
    )
}
