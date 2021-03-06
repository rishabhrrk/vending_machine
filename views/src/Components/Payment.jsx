function Payment(props){
    return (
    <table className="table-bordered">
        <tbody>
        <tr>
            <td className="padding-7px" onClick={props.onClick}>$ 1.00</td>
            <td className="padding-7px"  onClick={props.onClick}>$ 0.25</td>
        </tr>
        <tr>
            <td className="padding-7px"  onClick={props.onClick}>$ 0.10</td>
            <td className="padding-7px"  onClick={props.onClick}>$ 0.01</td>
        </tr>
        </tbody>
    </table>);
}

export default Payment;