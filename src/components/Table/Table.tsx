import './Table.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setVisible } from '../../store/slices/chart';
import { IChart } from '../../models';
import { useState } from 'react';
import { useEffect } from 'react';

interface INewChart extends IChart {
  hide: boolean,
  level: number
}

const Table = () => {
  const chart = useAppSelector(state => state.chart.chart);
  const dispatch = useAppDispatch();

  const [newChart, setNewChart] = useState<INewChart[]>([]);

  useEffect(() => {
    setNewChart(chart)
  }, [chart])

  const handleHide = (id: number) => {
    console.log(id)
    dispatch(setVisible(4))
  }

  const createTree = (chart: INewChart[], level = 1) => {
    console.log(chart)
    return chart.map(item => {
      return (
          <tr className='table__row'>
            <ul className={`table__row_list ${item.hide && item.level >= 2 ? 'hide': ''} ${item.level}`} id={`${item.id}`}>
              <li className='table__row_item' key={item.id}>
                  <div className='table__row_arrow' onClick={() => handleHide(item.id)}>+</div>
                  <span className='table__row_number'>{item.sub ? item.sub.length : 0}</span>
                  <p className='table__row_title'>{item.title}</p>
              </li>
              {/* {item.sub ? createTree(item.sub, level + 1) : null} */}
            </ul>
          </tr>
      )
    })
  }

  return (
    <table className='table'>
      <thead>
          <tr className='table__headers'>
              <th>Work item</th>
              <th>01 Sep - 07 Sep</th>
              <th>08 Sep - 14 Sep</th>
          </tr>
      </thead>
      <tbody className='table__body'>

        <tr className='table__row'>
          <td className='table__row_el'></td>
        </tr>
       
        {createTree(chart)}

      </tbody>
    </table>
  );
}

export default Table;