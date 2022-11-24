import { useState } from 'react';
import { Arrow } from '../../images/Arrow';
import { IChart } from '../../models';
import './ChartRow.scss';

const ChartRow = ({
    levelRow, 
    chart
} : {levelRow: number, chart: IChart}) => {

    const [visible, setVisible] = useState(false)

    const createCharChildtRow = (chart: IChart) => {
        return (
            <ChartRow 
                key={chart.id} 
                levelRow={levelRow + 1} 
                chart={chart}
            />
        )
    }

    return (
        <>
            <tr className='table__row' id={`${chart.id}`}>
                <td className='table__row_item' style={{paddingLeft: `${levelRow * 10}px`}}>
                    {chart.sub &&          
                        <div className='table__row_arrow' onClick={() => setVisible(!visible)}>
                            <Arrow/>
                        </div>
                    }
                    <span className='table__row_number'>{chart.sub ? chart.sub.length : 0}</span>
                    <p className='table__row_title'>{chart.title}</p>
                </td>
                {/* <td className='table__row_item'>
                    <div className='table__row_timeline'></div>
                </td> */}
            </tr>
            {visible && chart.sub?.map(createCharChildtRow)}
        </>
    )
}

export default ChartRow