import Cell from './Cell';

function Racks(props) {
    if (props.args != undefined) {
        let objectKeys = Object.keys(props.args)
        return (objectKeys.map((soda, index) => {
            if (index % 3 == 0) {
                return (
                    <tr key={index} className="border">
                        <Cell args={props.args[objectKeys[index]]} index={index} cell={objectKeys[index]}/>
                        <Cell args={props.args[objectKeys[index+1]]} index={index+1} cell={objectKeys[index+1]}/>
                        <Cell args={props.args[objectKeys[index+2]]} index={index+2} cell={objectKeys[index+2]}/>
                    </tr>
                )
            }
        }));
    }

    return <tr></tr>
}

export default Racks;