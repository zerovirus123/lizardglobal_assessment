import React from 'react'
import Select from 'react-select'
import { useState } from 'react'
import "../CategorySelector/CategorySelector.scss"

// hard-coded the categories. in a real production code, categoryOptions
// can be obtained from a dedicated table in the backend.
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

const CategorySelector = ({setSelectedCategories}) => {

  const [selectedCategories, setOptions] = useState([])

  const handleChange = (value) => {
    setOptions()
    setSelectedCategories(value)
  }

  return (
    
    <div className="selector-container" data-testid="selector-container">
      <h3 data-testid="selector-title">Select Category</h3>

      <Select
        data-testid="selector"
        defaultValue={selectedCategories}
        onChange={handleChange}
        options={categoryOptions}
        className="selector"
        placeholder="Categories"
        isMulti
      />
    </div>
    
  )
}

export default CategorySelector