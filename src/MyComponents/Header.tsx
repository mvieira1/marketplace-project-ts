
import type { JSX } from "react";

const Header = (): JSX.Element => {
    return (
        <header>
            <h1>BonitoServiço</h1>

            <div className="greeting">
                <img src="src/assets/user-icon.svg" alt="user icon" width={"25px"} />
                <span>Olá, Maria!</span>
            </div>
        </header>
    )
};

export default Header;