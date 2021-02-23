function Cell(props) {
    return (
        <td className="col-4 border" key={props.index}>
            <div className="text-center">
                <span className= {props.args ? "text-success" : "text-muted"} style={{ fontWeight: "bold", fontSize: "x-large" }}>{props.args != undefined ? props.args.productName : ''}</span><br />
                <span className= {props.args ? props.args.vendingQuantity>25 ? "text-primary": "text-danger" : "text-muted"} >Available Units: {props.args != undefined ? props.args.vendingQuantity : parseInt(0)}</span><br />
            </div>
            <div className="row">
                <div className="col-6 text-left">
                    <span className="padding-2px bg-white">$ {props.args != undefined ? parseFloat(props.args.price).toPrecision(3) : (parseFloat(0).toPrecision(3))}</span>
                </div>
                <div className="col-6 text-right">
                    <span className="padding-2px bg-white">{props.cell}</span>
                </div>
            </div>
        </td>
    )
}

export default Cell;