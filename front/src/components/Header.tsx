

function Header() {
    return (
        
            <header className="header">
                <img className="header-img" src="./src/logo.png" alt="logo orecipes"/>
                <form className="form">
                <input type="text" placeholder="Adresse Email"/>
                <input type="password" placeholder="Mot de passe"/>
                <button className="ui primary button" type="button">OK</button>
                </form>
            </header>
        
    );
}

export default Header;