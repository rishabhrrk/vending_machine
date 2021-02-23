function Keypad(props) {
    return (<div className="keyboard-outer-div">
        <table className="table" >
            <tbody>
                <tr>
                    <td className="keyboard-border" onClick={props.onClick}>A</td>
                    <td className="keyboard-border" onClick={props.onClick}>1</td>
                </tr>
                <tr>
                    <td className="keyboard-border" onClick={props.onClick}>B</td>
                    <td className="keyboard-border" onClick={props.onClick}>2</td>
                </tr>
                <tr>
                    <td className="keyboard-border" onClick={props.onClick}>C</td>
                    <td className="keyboard-border" onClick={props.onClick}>3</td>
                </tr>
                <tr>
                    <td className="keyboard-border" onClick={props.onClick}>D</td>
                    <td className="keyboard-border" onClick={props.onClick}>4</td>
                </tr>
                <tr>
                    <td className="keyboard-border" onClick={props.onClick}>E</td>
                    <td className="keyboard-border" onClick={props.onClick}>5</td>
                </tr>
            </tbody>
        </table>
    </div>);
}

export default Keypad;