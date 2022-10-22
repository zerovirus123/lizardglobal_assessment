import { React, useEffect, useState } from 'react/cjs/react.development.js'
import ReactPaginate from 'react-paginate'
import "../Page/page.css"

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
            <img src={splitURL(item.author.avatar)} key={item} alt={""} />
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

export const Page = () => {

  const itemsPerPage = 10;
    const [data, setData] = useState([])
    const [currentItems, setCurrentItems] = useState([])
    const [pageCount, setPageCount] = useState(0)
    const [itemOffset, setItemOffset] = useState(0)

    // gets the items from the API first
    useEffect(() => {
        fetch("/api/posts")
        .then((response) => response.json()
        )
        .then((json) => {
            setData(json.posts)
        })
    }, [])

    // the current data to display and the API data should not be the same array
    // otherwise this hook will constantly change the number of current items and page offsets
    useEffect(() => {
      const endOffset = itemOffset + itemsPerPage
      console.log(`Loading items from ${itemOffset} to ${endOffset}`)
      setCurrentItems(data.slice(itemOffset, endOffset))
      setPageCount(Math.ceil(data.length / itemsPerPage))

    }, [itemOffset, itemsPerPage, data])

    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % currentItems.length;
      console.log(
        `User requested page number ${event.selected}, which is offset ${newOffset}`
      );
      setItemOffset(newOffset);
    }

  return (
    <>
      <Items currentItems={currentItems}/>
      <ReactPaginate
            breakLabel="..."
            onPageChange={handlePageClick}
            pageRangeDisplayed={3} // number of pages to show before the break label
            pageCount={pageCount}
            previousLabel="<- Previous"
            nextLabel="Next ->"
            renderOnZeroPageCount={null}
        />
    </>
  )
}

export default Page;
