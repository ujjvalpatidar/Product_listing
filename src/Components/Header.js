import React, { useDebugValue } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { setAdminLogIn } from '../Redux/action/Actions';
const Header = () => {
    const dispatch =useDispatch();
    const Login = useSelector((state) => state.adminLogIn.user_info);
const {isLogin}=Login;
  return (
    <>
{
    isLogin===false?<>
    <header className="header-area header-sticky">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <nav className="main-nav">
                        <a href="index.html" className="logo">
                            <img src="assets/images/logo.png"/>
                        </a>
                      
                        <ul className="nav">
                            <li className="scroll-to-section"><a href="#top" className="active">Home</a></li>
                            <li className="scroll-to-section"><a href="#men">Men's</a></li>
                            <li className="scroll-to-section"><a href="#women">Women's</a></li>
                            <li className="scroll-to-section"><a href="#kids">Kid's</a></li>
                            <li className="submenu">
                                <a href="javascript:;">Pages</a>
                                <ul>
                                    <li><a href="about.html">About Us</a></li>
                                    <li><a href="products.html">Products</a></li>
                                    <li><a href="single-product.html">Single Product</a></li>
                                    <li><a href="contact.html">Contact Us</a></li>
                                </ul>
                            </li>
                            <li className="submenu">
                                <a href="javascript:;">Features</a>
                                <ul>
                                    <li><a href="#">Features Page 1</a></li>
                                    <li><a href="#">Features Page 2</a></li>
                                    <li><a href="#">Features Page 3</a></li>
                                    <li><a rel="nofollow" href="https://templatemo.com/page/4" target="_blank">Template Page 4</a></li>
                                </ul>
                            </li>
                            <li className="scroll-to-section">
                                <Link to={'/login'}><button className='btn btn-dark'>LogIn</button></Link>
                            </li>
                        </ul>        
                        <a className='menu-trigger'>
                            <span>Menu</span>
                        </a>
                    </nav>
                </div>
            </div>
        </div>
    </header>
    </>:<>
    <header className="header-area header-sticky">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <nav className="main-nav">
                        <a href="index.html" className="logo">
                            <img src="assets/images/logo.png"/>
                        </a>
                      
                        <ul className="nav">
                        <li className="scroll-to-section"><Link to={'/'} >Home</Link></li>
                            <li className="scroll-to-section"><Link to={'/catagorySave'} >Category Save</Link></li>
                            <li className="scroll-to-section"><Link to={'/brandSave'} >Brand Save</Link></li>
                            <li className="scroll-to-section"><Link to={'/productSave'} >Product Save</Link></li>
                            <li className="submenu">
                                <a href="javascript:;">Pages</a>
                                <ul>
                                    <li><a href="about.html">About Us</a></li>
                                    <li><a href="products.html">Products</a></li>
                                    <li><a href="single-product.html">Single Product</a></li>
                                    <li><a href="contact.html">Contact Us</a></li>
                                </ul>
                            </li>
                           
                            <li className="scroll-to-section">
                       <button className='btn btn-dark' onClick={()=>{dispatch(setAdminLogIn({isLogin:false}))}}>LogOut</button>
                            </li>
                        </ul>        
                        <a className='menu-trigger'>
                            <span>Menu</span>
                        </a>
                    </nav>
                </div>
            </div>
        </div>
    </header>
    </>
}
    
    </>
  )
}

export default Header