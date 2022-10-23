import React from 'react'
import Select from 'react-select'
import { useState } from 'react'
import "../CategorySelector/CategorySelector.css"

const categoryOptions = [
    { value: 'Surveys and Forms', label: 'Surveys and Forms' },
    { value: 'Digital Marketing', label: 'Digital Marketing' },
    { value: 'Platform News and Updates', label: 'Platform News and Updates' },
    { value: 'Tips and Best Practise', label: 'Tips and Best Practise' },
    { value: 'Data Management', label: 'Data Management' },
    { value: 'Marketing Analytics', label: 'Marketing Analytics' },
    { value: 'Landing Pages', label: 'Landing Pages' },
    { value: 'Ecommerce', label: 'Ecommerce' },
    { value: 'Email Marketing', label: 'Email Marketing' },
    { value: 'Tips and Best Practise', label: 'Tips and Best Practise' },
    { value: 'Digital Marketing', label: 'Digital Marketing' },
    { value: 'Marketing Automation', label: 'Marketing Automation' },
    { value: 'Platform News and Updates', label: 'Platform News and Updates' },
  ]

const CategorySelector = () => {

  const [selectedOptions, setOptions] = useState([])

  return (
    <>
    <div className="selector-container">
      <h3>Select Category</h3>

      <Select
        defaultValue={selectedOptions}
        onChange={setOptions}
        options={categoryOptions}
        className="selector"
        placeholder="Categories"
        isMulti
      />
    </div>
    </>
  )
}

export default CategorySelector