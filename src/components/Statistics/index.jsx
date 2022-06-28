import PropTypes from 'prop-types';
// import css from './Statisticts.module.css';

export default function Statistics(items) {
  return items.map(item => (
    <section className="statistics">
      <h2 className="title"></h2>

      <ul className="stat-list">
        <li className="item">
          <span className="label">.{item.label}</span>
          <span className="percentage">{item.percentage}</span>
        </li>
        <li className="item">
          <span className="label">.{item.label}</span>
          <span className="percentage">{item.percentage}</span>
        </li>
        <li className="item">
          <span className="label">.{item.label}</span>
          <span className="percentage">{item.percentage}</span>
        </li>
        <li className="item">
          <span className="label">.{item.label}</span>
          <span className="percentage">{item.percentage}</span>
        </li>
      </ul>
    </section>
  ));
}

Statistics.propTypes = {
  label: PropTypes.string,
  percent: PropTypes.number,
};
