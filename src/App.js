import React from 'react';
import AsyncSelect from 'react-select/async';
import {Options } from './Data';
import "./App.css"

const colors = {
  control: (styles) => ({
    ...styles
  }),

  option: (styles, {data, isFocused}) =>{
    return {...styles, color: data.color, backgroundColor: isFocused ? data.color+'40' : 'default'}
  },

  multiValue: (styles, {data}) => {
    return {
      ...styles,
      backgroundColor: data.color+"40",
      color: data.color
    }
  },

  multiValueLabel: (styles, {data}) => {
    return {
      ...styles,
      color: data.color
    }
  }
}

const loadOptions = (searchValue, callback) => {
    setTimeout(() => {
      const filterOptions = Options.filter((option) =>
        option.label.toLowerCase().includes(searchValue.toLowerCase())
      );

      callback(filterOptions);
    }, 1000);
  }

function App() {
  return (
    <div className="App">
       <AsyncSelect
        isMulti
        defaultOptions
        styles={colors}
        loadOptions={loadOptions}
      />
    </div>
  );
}

export default App;
