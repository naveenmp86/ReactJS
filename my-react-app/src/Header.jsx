function Header() {
  return (
    //react components are only capable of returning a single element
    //but we can place children elments within it
    <header>
      <h1>My Website</h1>
      <nav>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
      </nav>
      <hr></hr>
    </header>
  );
}

export default Header;
