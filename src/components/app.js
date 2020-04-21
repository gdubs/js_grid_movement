import React, {useState, useEffect } from 'react';
import Grid from './grid';

const App = props => {

    console.log('it reloaded!');
    const [curPos, setCurPos] = useState({'row' : 1, 'cell' : 1});
    const minCell = 1, maxCell = 4, minRow = 1, maxRow = 4;

    useEffect(() => {

        var currCell = curPos.cell;
        var currRow = curPos.row;

        // TODO: make it more elegant
        // did the following to avoid using useCallback, there might be a better way??
        const keyPressed = ({keyCode}) => {

            var newCell = 0;
            var newRow = 0;

            switch(keyCode){
                case 37:
                    newCell = (currCell == minCell || currCell < 0) ? minCell : currCell - 1;
                    setCurPos({...curPos, cell: newCell});
                    break;
                case 38:
                    newRow = (currRow == minRow || currRow < 0)? minRow : currRow - 1;
                    setCurPos({...curPos, row: newRow});
                    break;
                case 39:
                    newCell = (currCell == maxCell || currCell > maxCell) ? maxCell : currCell + 1;
                    setCurPos({...curPos, cell: newCell});
                    break;
                case 40:
                    newRow = (currRow == maxRow || currRow > maxRow) ? maxRow : currRow + 1;
                    setCurPos({...curPos, row: newRow});
                    break;
                default:
                    break;
            }
        }


        document.addEventListener("keydown", keyPressed);

        return () => {
            document.removeEventListener('keydown', keyPressed);
        }
    },[curPos]);

    return <div>
            <Grid cursor={curPos}/>
        </div>
}

export default App;