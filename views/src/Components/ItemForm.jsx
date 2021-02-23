import React, { useState } from "react";

function ItemForm(props) {
    const [name, setName] = useState();
    const [description, setDescription] = useState();
    const [price, setPrice] = useState(0);
    const [qty, setQty] = useState(0);

    return (
        <div>
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content bg-dark">
                        <form onSubmit={(e) => {
                            e.preventDefault(); props.addItem(name, description, price, qty)
                        }}>
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Add New Soda</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body p-3">
                                <div className="form-row">
                                    <div className="form-group col">
                                        <label>Soda Name</label>
                                        <input required className="form-control" onChange={(e) => setName(e.target.value)} />
                                    </div>
                                    <div className="form-group col">
                                        <label>Description</label>
                                        <input required className="form-control" onChange={(e) => setDescription(e.target.value)} />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col">
                                        <label>Price ($)</label>
                                        <input required type="number" min="0" step="0.01" value={price} className="form-control" onChange={(e) => {
                                            if (
                                                isNaN(e.target.value) === false &&
                                                e.target.value != undefined
                                            ) { setPrice((parseFloat(e.target.value).toPrecision(3))) }
                                        }} />
                                    </div>
                                    <div className="form-group col">
                                        <label>Quantity</label>
                                        <input required type="number" value={qty} className="form-control" onChange={(e) => {
                                            if (
                                                isNaN(e.target.value) === false &&
                                                e.target.value != undefined
                                            ) { setQty(parseInt(e.target.value)) }
                                        }} />
                                    </div>
                                </div>

                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="submit" className="btn btn-primary">Save changes</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ItemForm;