import { React, useState, useMemo } from 'react'
import ReactPaginate from 'react-paginate'
import "../Page/Page.scss"
import { useAPI } from '../../API/APIContext'
import Items from '../Items/Items'

export const Page = ({selectedOptions}) => {

    const itemsPerPage = 10;
    const [currentItems, setCurrentItems] = useState([])
    const [pageCount, setPageCount] = useState(0)
    const [itemOffset, setItemOffset] = useState(0)

    const data = useAPI()

    // the current data to display and the API data should not be the same array
    // otherwise this hook will constantly change the number of current items and page offsets
    useMemo(() => {
      const endOffset = itemOffset + itemsPerPage
      setCurrentItems(data.slice(itemOffset, endOffset))
      setPageCount(Math.ceil(data.length / itemsPerPage))

    }, [itemOffset, itemsPerPage, data])

    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % data.length;
      setItemOffset(newOffset);
    }

  return (
    <>
      <Items currentItems={currentItems} selectedOptions={selectedOptions} />
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
