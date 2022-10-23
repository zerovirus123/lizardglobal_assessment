import { React, useState, useMemo } from 'react'
import ReactPaginate from 'react-paginate'
import "../Page/page.css"
import { useAPI } from '../../API/APIContext'
import moment from 'moment/moment'

function splitURL(url)
{
  return url.split("?")[0]
}

function Items({currentItems, selectedOptions}) {

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
