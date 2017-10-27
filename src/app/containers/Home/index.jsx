import React from 'react';
import { push } from 'react-router-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Button } from '../../components/Input';
import style from './style.css';

const Home = props => (
  <div className={style.home}>
    <h1 className={style.home_title}>Flow engine</h1>
    <Button
      className={style.add_flow}
      onClick={() => props.addFlow(props.flow.length + 1)}
      text={'+ Flow'}
    />
    <div className={style.flow_list}>
      <h3>List of available flow</h3>
      <ul>
        {
          props.flow.map(item => (
            <li
              key={item.id}
            >
              <Link to={`/flow/${item.id}`}>{item.name}</Link>
            </li>
          ))
        }
      </ul>
    </div>
  </div>
);

Home.propTypes = {
  flow: PropTypes.arrayOf(PropTypes.object),
  addFlow: PropTypes.func.isRequired,
};

Home.defaultProps = {
  flow: [],
};

const mapStateToProps = state => ({
  flow: state.flow.data,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  addFlow: id => push(`/flow/${id}`),
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
