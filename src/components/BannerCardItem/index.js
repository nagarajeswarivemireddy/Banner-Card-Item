// Write your code here.
import './index.css'

const BannerCardItem = props => {
  const {userDetails} = props
  const {headerText, description, className} = userDetails
  return (
    <li className={className}>
      <li className="text-container">
        <h1 className="heading"> {headerText} </h1>
        <p className="paragraph"> {description} </p>
        <button className="button" type="button">
          Show More
        </button>
      </li>
    </li>
  )
}
export default BannerCardItem
