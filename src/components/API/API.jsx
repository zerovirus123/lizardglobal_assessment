import React from 'react'
import { useEffect, useState } from 'react/cjs/react.development.js'
import "../API/API.css"
import ReactPaginate from 'react-paginate'

function splitURL(url)
{
    return url.split("?")[0]
}

function Items({currentItems}) {
  return (
    <>
      <ul>
      {currentItems && currentItems.map((item, key) => (
          <>
            <img src={splitURL(item.author.avatar)} alt={""} />
            <li key={item.id}>Title: {item.title}</li>
            <li key={item.id}>Published Date: {item.publishDate}</li>
            <li key={item.id}>Summary: {item.summary}</li>
            <li key={item.id}>Author: {item.author.name}</li>

            {/* <li key={item.id}>Avatar: {splitURL(item.author.avatar)}</li> */}
            <br></br>
          </>
      ))}
      </ul>
    </>
  )
} 


const API = () => {

    let itemsPerPage = 10;

    const [currentItems, setCurrentItems] = useState(null)
    const [pageCount, setPageCount] = useState(0)
    const [itemOffset, setItemOffset] = useState(0)

    useEffect(() => {
        fetch("/api/posts")
        .then((response) => response.json()
        )
        .then((json) => {
            setCurrentItems(json.posts)
        })
        .then(() => {
          const endOffset = itemOffset + itemsPerPage
          console.log(`Loading items from ${itemOffset} to ${endOffset}`)
          setCurrentItems(currentItems.slice(itemOffset, endOffset))
          setPageCount(Math.ceil(currentItems.length / itemsPerPage))
        })
    }, [itemOffset, itemsPerPage])

    // called when users click another page
    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % currentItems.length;
      console.log(
        `User requested page number ${event.selected}, which is offset ${newOffset}`
      );
      setItemOffset(newOffset);
    }

    console.log("currentItems: ", currentItems)

  return (
    <>
      <Items currentItems={currentItems}/>
      <ReactPaginate
              breakLabel="..."
              nextLabel="next"
              onPageChange={handlePageClick}
              pageRangeDisplayed={5}
              pageCount={pageCount}
              previousLabel="< previous"
              renderOnZeroPageCount={null}
        />
    </>
  )
}

export default API