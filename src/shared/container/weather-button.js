// @flow

import { connect } from 'react-redux'

import { weather } from '../action/hello'
import Button from '../component/button'

const mapStateToProps = () => ({
  label: 'Say hello asynchronously and send weather',
})

const mapDispatchToProps = dispatch => ({
  handleClick: () => { dispatch(weather()) },
})

export default connect(mapStateToProps, mapDispatchToProps)(Button)
