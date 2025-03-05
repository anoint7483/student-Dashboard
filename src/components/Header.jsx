// import './Header.css';


const Header = () => {
  return (
    <div className="header">
    <div className="search">
        <input type="text" className="input" />
        <div class="text">
            <p>Search</p>
        </div>
    </div>
    <div className="account">
        <div className="image"></div>
        <div className="profile">
            <div className="name">
                <p>Bob</p>
            </div>
            <div className="year">
                <p>2nd year</p>
            </div>
        </div>
    </div>
</div>
  );
};

export default Header;
