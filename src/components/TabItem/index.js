import './index.css'

const TabItem = props => {
  const {item, onClickTabItem, isActive} = props
  const {tabId, displayText} = item

  const classList = isActive ? `active button` : `button`
  const onClickTab = () => {
    onClickTabItem(tabId)
  }

  return (
    <li className="tab-name">
      <button type="button" className={classList} onClick={onClickTab}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
