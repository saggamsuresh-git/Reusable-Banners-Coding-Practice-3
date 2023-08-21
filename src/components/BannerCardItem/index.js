// Write your code here.
import './index.css'

const BannerCard = props => {
  const {cardDetails} = props
  const {headerText, description, className} = cardDetails
  return (
    <li id="card-container" className={className}>
      <h1>{headerText}</h1>
      <p>{description}</p>
      <button type="submit">Show More</button>
    </li>
  )
}
export default BannerCard
