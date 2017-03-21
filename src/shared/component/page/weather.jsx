// @flow

import React from 'react'
import Helmet from 'react-helmet'

import WeahterMessage from '../../container/weather-message'
import WeatherButton from '../../container/weather-button'

const title = 'Wheather page'

const weatherPage = () =>
  <div className="container mt-4">
    <Helmet
      title={title}
      meta={[
        { name: 'description', content: 'This week\'s forecast' },
        { property: 'og:title', content: title },
      ]}
    />
    <div className="row">
      <div className="col-12">
        <h1>{title}</h1>
        <WeahterMessage />
        <WeatherButton />
      </div>
    </div>
  </div>

export default weatherPage
