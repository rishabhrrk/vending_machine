function Cell(props) {
    function minTwoDigits(n) {
        return (n < 10 ? '0' : '') + n;
      }
    return (
        <td className="col-4 border" key={props.index}>
            <div className="text-center">
                <div className="text-truncate admin-panel-table-productname">
                <span className={props.args ? "text-success" : "text-muted"}
                >{props.args != undefined ? props.args.productName : ''}
                </span>
                <br />
                </div>
                <span className={props.args ? props.args.vendingQuantity > 25 ?
                    "text-primary" : "text-danger" : "text-muted"} >Available <br />Units:
                    {props.args != undefined ? minTwoDigits(props.args.vendingQuantity) : minTwoDigits(0)}</span><br />
            </div>
            <div className="row">
                <div className="col-6 text-left">
                    <span className=" bg-white">$ {props.args != undefined ?
                        parseFloat(props.args.price).toPrecision(3) : (parseFloat(0).toPrecision(3))}</span>
                </div>
                <div className="col-6 text-right">
                    <span className=" bg-white">{props.cell}</span>
                </div>
            </div>
        </td>
    )
}

export default Cell;