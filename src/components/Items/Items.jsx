import React from 'react'
import moment from 'moment/moment'
import "../Items/Items.scss"
import { AnimatePresence, motion } from 'framer-motion/dist/framer-motion'

const Item = ({item, display}) => {

  const parseDateString = (date) => {
    return moment(date).utc().format('YYYY-MM-DD hh:mm:ss A')
  }

  const splitURL = url => {
    return url.split("?")[0]
  }

  return (
    <>
      <motion.div layout className="item-container" style={{display: display}}>
      <img className="avatar-image" src={splitURL(item.author.avatar)} alt={""} />
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
      </motion.div>
    </>
  )
}

const Items = ({currentItems, selectedOptions}) => {
  let selectedOptionsValue = []
  selectedOptions.map((option) => {
    selectedOptionsValue.push(option.value)
  })

  const foundCategory = (item) => {
    return item.categories.some((category) => selectedOptionsValue.includes(category.name))
  }

  // if no categories are selected, render everything
  // else only render items that fall under the selected category
  return (
    <>
      <ul className="list">
       <AnimatePresence>
      {currentItems && currentItems.map((item, key) => (
        
        <motion.div layout animate={{ y: 100, opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }}>
        <>
          {
          selectedOptions.length === 0 ?
          <Item key={key} item={item} /> : foundCategory(item) ?
          <Item key={key} item={item} /> : <Item key={key} item={item} display={"none"}/>
          }     
        </>
        </motion.div>
        
      ))}
     </AnimatePresence>
      </ul>
    </>
  )
}

export default Items