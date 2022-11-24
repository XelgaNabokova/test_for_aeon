import ChartRow from '../ChartRow/ChartRow';
import { useAppSelector } from '../../hooks/redux';
import './GanttChart.scss';


const GanttChart = () => {
  const chart = useAppSelector(state => state.chart.chart);

  return (
    <table className='table'>
      <thead className='table__header'>
          <tr className='table__col'>
              <th className='table__col_el'>Work item</th>
              <th className='table__col_el'>01 Sep - 07 Sep</th>
              <th className='table__col_el'>08 Sep - 14 Sep</th>
          </tr>
      </thead>
      <tbody className='table__body'>
        <tr className='table__row'>
          <td className='table__row_item'></td>
        </tr>
        <ChartRow
          levelRow={1} 
          chart={chart}
        />
      </tbody>
    </table>
  );
}

export default GanttChart;