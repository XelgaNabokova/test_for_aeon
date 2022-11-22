import { useAppSelector } from '../../hooks/redux';
import { Download } from '../../images/Download';
import './Header.scss'

const Header = () => {

  const chartTitle = useAppSelector(state => state.chart.chartTitle);

  return (
    <div className="header">
        <h1 className='header__title'>{chartTitle}</h1>
        <button className='header__btn-download'>
            <Download/>
            Export
        </button>
    </div>
  );
}

export default Header;
