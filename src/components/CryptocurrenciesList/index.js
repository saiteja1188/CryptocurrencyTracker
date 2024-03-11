// Write your JS code here
import {Component} from 'react'

import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

class CryptocurrenciesList extends Component {
  renderCryptoHeaders = () => (
    <div className="crypto-header-container">
      <p className="crypto-type">Coin Type</p>
      <div className="usd-euro-value-container">
        <p className="crypto-value">USD</p>
        <p className="crypto-value">EURO</p>
      </div>
    </div>
  )

  renderCryptoview = () => {
    const {cryptoData} = this.props

    return (
      <div className="crypto-list-view">
        {this.renderCryptoHeaders()}
        <ul className="ul-container">
          {cryptoData.map(eachItem => (
            <CryptocurrencyItem cryptoDetails={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    return (
      <div className="crypto-container">
        <div className="crypto-list-container">
          <h1 className="crypto-heading">Cryptocurrency Tracker</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
            alt="cryptocurrency"
            className="crypto-img"
          />
          {this.renderCryptoview()}
        </div>
      </div>
    )
  }
}

export default CryptocurrenciesList
