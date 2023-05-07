import propTypes from 'prop-types';
import { Component } from 'react';
import css from './Filter.module.css';

class Filter extends Component {
  updateFilter = e => {
    this.props.onFilter(e.target.value);
  };

  render() {
    return (
      <div className={css.filter}>
        <label className={css.label} htmlFor="filter">
          Find contacts by name
        </label>
        <input
          className={css.filterInput}
          type='text'
          name='filter'
          onChange={this.updateFilter}
          value={this.props.filter}
        />
      </div>
    );
  }
}

Filter.propTypes = {
  filter: propTypes.string.isRequired,
  onFilter: propTypes.func.isRequired,
};

export default Filter;