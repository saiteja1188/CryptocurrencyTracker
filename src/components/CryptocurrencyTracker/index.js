// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import CryptocurrenciesList from '../CryptocurrenciesList'

import './index.css'

class CryptocurrencyTracker extends Component {
  state = {
    cryptocurrencyData: [],
    isLoader: true,
  }

  componentDidMount() {
    this.getCryptocurrencyList()
  }

  getCryptocurrencyList = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const updateData = data.map(eachCurrency => ({
      currencyLogo: eachCurrency.currency_logo,
      currencyName: eachCurrency.currency_name,
      euroValue: eachCurrency.euro_value,
      id: eachCurrency.id,
      usdValue: eachCurrency.usd_value,
    }))
    this.setState({cryptocurrencyData: updateData, isLoader: false})
  }

  renderCryptoList = () => {
    const {cryptocurrencyData} = this.state

    return <CryptocurrenciesList cryptoData={cryptocurrencyData} />
  }

  renderLoader = () => (
    <div data-testid="loader">
      <Loader type="rings" color="#ffffff" height={80} width={80} />
    </div>
  )

  render() {
    const {isLoader} = this.state
    return (
      <div className="crypto-container">
        {isLoader ? this.renderLoader() : this.renderCryptoList()}
      </div>
    )
  }
}

export default CryptocurrencyTracker
