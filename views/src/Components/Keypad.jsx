function Keypad(props) {
    return (<div style={{ top: "8px", position: "relative" }}>
        <table className="table" >
            <tbody>
                <tr>
                    <td style={{ border: "5px solid dimgrey" }} onClick={props.onClick}>A</td>
                    <td style={{ border: "5px solid dimgrey" }} onClick={props.onClick}>1</td>
                </tr>
                <tr>
                    <td style={{ border: "5px solid dimgrey" }} onClick={props.onClick}>B</td>
                    <td style={{ border: "5px solid dimgrey" }} onClick={props.onClick}>2</td>
                </tr>
                <tr>
                    <td style={{ border: "5px solid dimgrey" }} onClick={props.onClick}>C</td>
                    <td style={{ border: "5px solid dimgrey" }} onClick={props.onClick}>3</td>
                </tr>
                <tr>
                    <td style={{ border: "5px solid dimgrey" }} onClick={props.onClick}>D</td>
                    <td style={{ border: "5px solid dimgrey" }} onClick={props.onClick}>4</td>
                </tr>
                <tr>
                    <td style={{ border: "5px solid dimgrey" }} onClick={props.onClick}>E</td>
                    <td style={{ border: "5px solid dimgrey" }} onClick={props.onClick}>5</td>
                </tr>
            </tbody>
        </table>
    </div>);
}

export default Keypad;