import React, { useState } from 'react';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import "./SearchBar.css"

const SearchBar = (props) => {
    return ( 
        <div>
            <div className="search-container">
            <h3>gAME dATA</h3>
 <Form>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Control type="search" placeholder="Search..." />
  </Form.Group>
        </Form>
        </div>
        </div>
     );
}
 
export default SearchBar;