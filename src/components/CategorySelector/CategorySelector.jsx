import React from 'react'
import Select from 'react-select'
import { useState } from 'react'
import "../CategorySelector/CategorySelector.css"

const categoryOptions = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

// https://codesandbox.io/s/2v5xw3335p?file=/src/index.js:674-1256

// create the Selector as a DropDown menu component 
const DropDown = props => {

  const options = props.multi
    ? [{ label: "Select All", value: "all" }, ...props.options]
    : props.options;

  return(
    <div className={`react-select-wrapper ${props.multi ? "multi" : ""}`}>
      <Select
        name="example"
        className="selector"
        placeholder="Categories"
        options={options}
        multi={props.multi}
        value={props.value ? props.value : null}
        onChange={selected => {
          props.multi &&
          selected.length &&
          selected.find(option => option.value === "all")
            ? props.onChange(options.slice(1))
            : !props.multi
              ? props.onChange((selected && selected.value) || null)
              : props.onChange(selected);
        }}
      />
    </div>
  );
}

const CategorySelector = () => {

  const [selectedValues, setValues] = useState([])

  // const handleMultiChange = (e, no) => {
  //   setValues(
  //     selectedValues.map((item) => {
  //       return selectedValues.indexOf(item) === no
  //         ? { value: Array.isArray(e) ? e.map((x) => x.value) : [] }
  //         : item;
  //     })
  //   )
  // } 

  const handleChange = value => {
    setValues(value)
  }

  return (
    <>
    <div className="selector-container">
      <h3>Select Category</h3>
      {/* <Select 
        options={options}
        value={selectedValues}
        placeholder="Categories"
        className="selector"
        onChange={handleMultiChange}
        multi
      /> */}
      <DropDown
        value={selectedValues}
        options={categoryOptions}
        onChange={handleChange}
        multi
      />
    </div>
    </>
    
  )
}

export default CategorySelector