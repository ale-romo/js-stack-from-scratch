// @flow

import { connect } from 'react-redux'

import WeatherForecast from '../component/forecast'

const mapStateToProps = state => ({
  message: state.hello.get('weatherMessage'),
})

export default connect(mapStateToProps)(WeatherForecast)
