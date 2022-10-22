import { React, useState, useMemo } from 'react'
import ReactPaginate from 'react-paginate'
import "../Page/page.css"
import { useAPI } from '../../API/APIContext'

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
            <li>Title: {item.title}</li>
            <li>Published Date: {item.publishDate}</li>
            <li>Summary: {item.summary}</li>
            <li>Author: {item.author.name}</li>
            
            {item.categories && item.categories.map((category, _) => (
              <>
              <li>Category: {category.name}</li>
              </>
            ))}

            {/* <li>Avatar: {splitURL(item.author.avatar)}</li> */}
            <br></br>
          </>
      ))}
      </ul>
    </>
  )
} 

export const Page = () => {

    const itemsPerPage = 10;
    const [currentItems, setCurrentItems] = useState([])
    const [pageCount, setPageCount] = useState(0)
    const [itemOffset, setItemOffset] = useState(0)

    const data = useAPI()

    // the current data to display and the API data should not be the same array
    // otherwise this hook will constantly change the number of current items and page offsets
    useMemo(() => {
      const endOffset = itemOffset + itemsPerPage
      console.log(`Loading items from ${itemOffset} to ${endOffset}`)
      setCurrentItems(data.slice(itemOffset, endOffset))
      setPageCount(Math.ceil(data.length / itemsPerPage))

    }, [itemOffset, itemsPerPage, data])

    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % data.length;
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
            containerClassName="pagination"
            pageLinkClassName="page-num"
            previousLinkClassName="page-num"
            nextLinkClassName="page-num"
            activateLinkClassName="active"
        />
    </>
  )
}

export default Page;
