import React, {useState, useEffect} from 'react';
import Dot from './dot';

const Grid = props => {
    
    const gridCellsCount = [1, 2, 3,4];

    const [imgPos, setImagePos] = useState(props.cursor);
    const [rows, setRows] = useState([]);

    useEffect(() => {
        console.log(`grid props updated -- + ${props.cursor.row} - ${props.cursor.cell}`)
        setImagePos(props.cursor);
    }, [props.cursor]);

    useEffect(() => {
        console.log(`img position updated`)
        var updRows = gridCellsCount.map(r => {

            var cells = gridCellsCount.map(a => {
                if(imgPos.cell == a && imgPos.row ==  r)
                {
                    return <td key={'cell-' + a}><Dot /></td>
                }
                else
                    return <td key={'cell-' + a}>{a}</td>
            })
    
            return <tr key={'row-' + r}>{cells}</tr>
        });

        setRows(updRows);
    }, [imgPos])

    return <div>
        <h2>Grid!</h2>
        <table className="grid">
            <tbody>
                {rows}
            </tbody>
        </table>
    </div>
}


export default Grid;