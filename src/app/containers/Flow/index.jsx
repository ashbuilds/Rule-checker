import React, { Component } from 'react';
// import {} from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Button, ShortText, LongText } from '../../components/Input';
import style from './style.css';
import {
  createNewFlow,
} from '../../../shared/reducer/flow';

class Flow extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.id = this.props.match.params.id;
  }
  handleChange(event) {
    this.props.createNewFlow(event.target.value);
  }

  render() {
    return (
      <div className={['container', style.flow].join(' ')}>
        <h3>Create flow</h3>
        <ShortText
          placeholder="Enter flow name"
          onBlur={event => this.props.createNewFlow({
            id: this.id,
            name: event.target.value,
          })}
        />
        <div className={['box', style.rule_block].join(' ')} >
          <div className="row">
            <div className="col-6">
              <span>Rule title</span>
            </div>
            <div className="col-6">
              <ShortText className={style.rule_input} placeholder="Rule 1" />
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <span>Rule id</span>
            </div>
            <div className="col-6">
              <ShortText className={style.rule_input} placeholder="1" />
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <span>Rule body</span>
            </div>
            <div className="col-6">
              <LongText
                className={[style.rule_input, style.long_input].join(' ')}
                placeholder="//example of rule body&#x0a;function(){&#x0a;return bool&#x0a;}"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <span>If rule passed</span>
            </div>
            <div className="col-6">
              <LongText className={style.rule_input} placeholder="//next rule id &#x0a;4" />
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <span>If rule failed</span>
            </div>
            <div className="col-6">
              <LongText className={style.rule_input} placeholder="//next rule id &#x0a;3" />
            </div>
          </div>
          <div className="row">
            <div className="col-6" />
            <div className={['col-6', style.add_rule].join(' ')}>
              <Button className={style.add_rule_button} text="Add new rule" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Flow.propTypes = {
  createNewFlow: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

const mapStateToProps = (props, state) => ({
  flow: state.data,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  createNewFlow,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Flow);
