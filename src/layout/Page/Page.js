import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { I18nextProvider } from 'react-i18next';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as actions from '../../store/locale/actions';
import PageView from './PageView';
import i18n from '../../i18n';

class Page extends Component {
  render() {
    const { children } = this.props;
    return (
      <I18nextProvider i18n={i18n}>
        <PageView>
          {children}
        </PageView>
      </I18nextProvider>
    );
  }
}

Page.propTypes = {
  children: PropTypes.element.isRequired,
};

const mapStateToProps = ({ locale: { locale, messages } }) => ({
  locale,
  messages,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch)
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Page));
