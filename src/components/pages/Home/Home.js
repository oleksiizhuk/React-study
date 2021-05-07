import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import HomeView from './HomeView';
import { getJoke as getJokeAction } from '../../store/joke/actions';

class Home extends Component {
  componentDidMount() {
    this.getJoke();
  }

  getJoke = () => {
    const { actions: { getJoke } } = this.props;
    getJoke();
  };

  render() {
    const { t, joke, isLoadingJoke } = this.props;
    return (
      <HomeView
        isLoadingJoke={isLoadingJoke}
        joke={joke}
        getJoke={this.getJoke}
        title={t('homePage')}
        buttonTitle={t('newJoke')}
      />
    );
  }
}

const mapStateToProps = ({ joke: { joke, isLoadingJoke } }) => ({
  joke, isLoadingJoke
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
    getJoke: getJokeAction,
  }, dispatch)
});

Home.propTypes = {
  isLoadingJoke: PropTypes.bool.isRequired,
  joke: PropTypes.string.isRequired,
  actions: PropTypes.shape({
    getJoke: PropTypes.func.isRequired,
  }).isRequired,
  t: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(Home));
