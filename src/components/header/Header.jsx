const Header = () => {
  return(
    <header className="flex items-center gap-10">
        <h1 className="text-black text-3xl font-bold">snap</h1>
        <div className="flex justify-between items-center">
            <nav>
                <a href="" className="text-almostGray">Features</a>
                <a href="" className="text-almostGray">Company</a>
                <a href="" className="text-almostGray">Careers</a>
                <a href="" className="text-almostGray">About</a>
            </nav>
            <div>
                <button className="">Login</button>
                <button className="">Register</button>
            </div>
        </div>
    </header>
  );
};

export default Header;
