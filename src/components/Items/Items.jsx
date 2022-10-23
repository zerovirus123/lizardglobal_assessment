import React from 'react'
import moment from 'moment/moment'
import "../Items/Items.css"

const Items = ({currentItems, selectedOptions}) => {
  let selectedOptionsValue = []
  selectedOptions.map((option) => {
    selectedOptionsValue.push(option.value)
  })

  const foundCategory = (item) => {
    return item.categories.some((category) => selectedOptionsValue.includes(category.name))
  }

  const parseDateString = (date) => {
    return moment(date).utc().format('YYYY-MM-DD hh:mm:ss A')
  }

  const splitURL = url => {
    return url.split("?")[0]
  }

  return (
    <>
      <ul className="list">
      {currentItems && currentItems.map((item, key) => (
          <>
            {selectedOptions.length === 0 ?
              <div className="item-container">
                <img src={splitURL(item.author.avatar)} alt={""} />
                <li className="list-content">
                  <div className="data-header">Title</div>
                  <div className="data-content">{item.title}</div>
                </li>
                <li className="list-content">
                  <div className="data-header">Author</div>
                  <div className="data-content">{item.author.name}</div>
                </li>
                <li className="list-content">
                  <div className="data-header">Published Date</div>
                  <div className="data-content">{parseDateString(item.publishDate)}</div>
                </li>
                <li className="list-content">
                  <div className="data-header">Summary</div>
                  <div className="data-content">{item.summary}</div>
                </li>
              </div> : foundCategory(item) ?
              <div className="item-container">
                <img src={splitURL(item.author.avatar)} alt={""} />
                <li className="list-content">
                  <div className="data-header">Title</div>
                  <div className="data-content">{item.title}</div>
                </li>
                <li className="list-content">
                  <div className="data-header">Author</div>
                  <div className="data-content">{item.author.name}</div>
                </li>
                <li className="list-content">
                  <div className="data-header">Published Date</div>
                  <div className="data-content">{parseDateString(item.publishDate)}</div>
                </li>
                <li className="list-content">
                  <div className="data-header">Summary</div>
                  <div className="data-content">{item.summary}</div>
                </li>
              </div> : null
            }
          </>
      ))}
      </ul>
    </>
  )
}

export default Items