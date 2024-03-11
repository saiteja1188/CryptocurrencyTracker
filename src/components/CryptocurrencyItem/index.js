// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {cryptoDetails} = props
  const {currencyLogo, currencyName, euroValue, usdValue} = cryptoDetails

  return (
    <li className="crypto-item-container">
      <div className="crypto-title-container">
        <img
          src={currencyLogo}
          alt={currencyName}
          className="crypto-list-img"
        />
        <p className="crypto-title">{currencyName}</p>
        <div className="usd-euro-container">
          <p className="crypto-usd">{usdValue}</p>
          <p className="crypto-euro">{euroValue}</p>
        </div>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
