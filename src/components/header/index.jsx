
import {ReactComponent as Logo} from '../../assets/curs-css-logo.svg'
import {ReactComponent as Cart}  from '../../assets/cart-icon.svg';
import user from '../../assets/user-image.jpg';
import './index.scss'
import { HeaderButton } from '../header-button';

export const Header = () => <nav className="navbar navbar-expand-lg navbar-dark">
<div className="container">
  <a className="navbar-brand" href="#">
  <Logo/>
  </a>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="#">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" aria-current="page" href="#">Explore</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" aria-current="page" href="#">Marketplace</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" aria-current="page" href="#">Invertor</a>
      </li>
    </ul>
  </div>
  <div className='header-buttons'>
    <HeaderButton>
      <Cart/>
    </HeaderButton>
    <HeaderButton>
      <img src={user}/>
    </HeaderButton>
  </div>
</div>
</nav>