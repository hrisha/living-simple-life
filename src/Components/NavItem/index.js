import React from 'react'

const NavItem = (props) => {
    const className = props.className ??'' ;
    const link= props.link ?? '#';
    const text = props.text;
  return (
    <div>
      <li><a className={className} href={link} >{text}</a></li>
    </div>
  )
}

export default NavItem
