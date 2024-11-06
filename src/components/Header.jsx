import React from 'react'
import Nav from 'react-bootstrap/Nav';

const Header = () => {
  return (
<>
<Nav className='d-flex justify-content-end align-iyems-center mt-3 bg-dark'
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item >
        <Nav.Link href="/home" className='text-light' >Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link  href="/home" className="text-light">Watch</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/home"  className="text-light"> 
          More
        </Nav.Link>
      </Nav.Item>
    </Nav>
</> 
 )
}

export default Header