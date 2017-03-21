// @flow

import React from 'react'

type Props = {
  message: string,
}

const Forecast = ({ message }: Props) =>
  <p>{message}</p>

export default Forecast
