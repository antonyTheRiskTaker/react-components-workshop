import React from 'react';
import '../assets/BooksellerNavbar.css';

const BooksellerNavbar = () => {
  return (
    <nav>
      <h1 className='nav--logo'>Bookseller</h1>
      <ul className='nav--list'>
        <li>Books</li>
        <li>About Us</li>
        <li>Sign in</li>
        <li>Sign up</li>
        <li>Cart</li>
      </ul>
    </nav>
  );
}

export default BooksellerNavbar;