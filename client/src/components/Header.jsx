// import { Link } from "react-router-dom"
// import { FaBars } from "react-icons/fa6";
// import { IoMdClose } from "react-icons/io";
// import { FiEdit } from "react-icons/fi";
// import { LuUsers } from "react-icons/lu";
// import { RiLogoutBoxRLine } from "react-icons/ri";

// import { LuUser2 } from "react-icons/lu";
// import { IoIosLogOut } from "react-icons/io";
// import { useContext, useEffect, useState } from "react";
// import { UserContext } from '../context/UserContext'
// import axios from "axios";

// function Header() {
//     const [isnavopen, setisnavopen] = useState(window.innerWidth > 800 ? true : false)
//     const [avatar, setavatar] = useState()
//     const [submenuOpen, setsubmenuOpen] = useState(false)

//     const closeNav = () => {
//         if (window.innerWidth < 800) {
//             setisnavopen(false)
//         }
//         else {
//             setisnavopen(true)
//         }
//     }

//     const handleSubmenuopen = () => {
//         setsubmenuOpen(!submenuOpen)
//     }


//     const { currentuser } = useContext(UserContext)


//     const apiURL = import.meta.env.VITE_REACT_APP_BASE_URL;

//     useEffect(() => {
//         const getUser = async () => {
//             try {
//                 const res = await axios.get(`${apiURL}/users/${currentuser?.id}`);
//                 console.log(res.data)
//                 setavatar(res.data.avatar)
//             } catch (error) {
//                 console.log(error)
//             }
//         }

//         getUser();

//     }, [])

//     return (
//         <nav>
//             <div className="container nav__container">
//                 <Link to='/' className="nav__logo" onClick={closeNav}>
//                     {/* <img src="" alt="Navbar Logo" /> */}
//                     <p>ᑌᑎᗷOᑌᑎᗪ..</p>
//                 </Link>
//                 {currentuser?.id && isnavopen &&
//                     <ul className="nav__menu">
//                         <li><Link className="nav__menu-link" to='/create' onClick={closeNav}><FiEdit size={18} /> Write</Link></li>
//                         <li><Link className="nav__menu-link" to='/authors' onClick={closeNav}><LuUsers size={18} /></Link></li>
//                         {/* <li className="nav__menu-link" id="nav__menu-profile"><LuUser2 size={22} /></li> */}
//                         <li className="nav__menu-link" id="nav__menu-profile" onClick={handleSubmenuopen}><img src={`${import.meta.env.VITE_REACT_APP_ASSETS_URL}/uploads/${avatar}`} alt="" /></li>
//                     </ul>
//                 }

//                 <div className="sub-menu-wrap">
//                     <div className={`sub-menu ${submenuOpen ? 'active' : ''}`}>
//                         <p className="name">{currentuser.name}</p>
//                         <hr />
//                         <Link className="nav__menu-link" to={`/profile/${currentuser.id}`} id="name" onClick={closeNav}>Dashboard</Link>
//                         <hr />
//                         <Link className="nav__menu-link" to={`/myposts/${currentuser.id}`} id="name" onClick={closeNav}>My Posts</Link>
//                         <hr />
//                         <Link className="nav__menu-link" to='/logout' onClick={closeNav}>Logout</Link>
//                     </div>
//                 </div>
//                 {!currentuser?.id && isnavopen && <ul className="nav__menu">
//                     <li><Link className="nav__menu-link" to='/authors' onClick={closeNav}>Authors</Link></li>
//                     <li><Link className="nav__menu-link" to='/login' onClick={closeNav}>Login</Link></li>
//                     <li><Link className="nav__menu-link" to='/register' id="login-btn" onClick={closeNav}>Register</Link></li>
//                 </ul>
//                 }
//                 <button className="nav__toggle-btn" onClick={() => setisnavopen(!isnavopen)}>
//                     {isnavopen ? <IoMdClose /> : <FaBars />}
//                 </button>
//             </div>

//         </nav>
//     )
// }

// export default Header



import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { FiEdit } from "react-icons/fi";
import { LuUsers } from "react-icons/lu";
import { MdOutlineDashboard } from "react-icons/md";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { RiPagesLine } from "react-icons/ri";
import { LuUser2 } from "react-icons/lu";
import { IoIosLogOut } from "react-icons/io";
import { FiPlusCircle } from "react-icons/fi";
import { TbLogin } from "react-icons/tb";
import { useContext, useEffect, useState } from "react";
import { UserContext } from '../context/UserContext';
import axios from "axios";

function Header() {
    const [isNavOpen, setIsNavOpen] = useState(window.innerWidth > 800);
    const [avatar, setAvatar] = useState(null);
    const [submenuOpen, setSubmenuOpen] = useState(false);

    const { currentuser } = useContext(UserContext);

    const apiURL = import.meta.env.VITE_REACT_APP_BASE_URL;

    useEffect(() => {
        const getUser = async () => {
            if (!currentuser?.id) return;
            try {
                const res = await axios.get(`${apiURL}/users/${currentuser.id}`);
                setAvatar(res.data.avatar);
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        getUser();
    }, [currentuser, apiURL]);

    useEffect(() => {
        const handleResize = () => {
            setIsNavOpen(window.innerWidth > 800);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const closeNav = () => {
        if (window.innerWidth < 800) {
            setIsNavOpen(false);
        }
    };

    const handleSubmenuOpen = () => {
        setSubmenuOpen(!submenuOpen);
    };

    return (
        <nav>
            <div className="container nav__container">
                <Link to='/' className="nav__logo" onClick={closeNav}>
                    <p>ᑌᑎᗷOᑌᑎᗪ..</p>
                </Link>
                {currentuser?.id && isNavOpen &&
                    <ul className="nav__menu">
                        <li><Link className="nav__menu-link" to='/create' onClick={closeNav}><FiEdit size={18} /> Write</Link></li>
                        <li><Link className="nav__menu-link" to='/authors' onClick={closeNav}><LuUsers size={18} /></Link></li>
                        <li className="nav__menu-link" id="nav__menu-profile" onClick={handleSubmenuOpen}>
                            {avatar ? (
                                <img src={`${import.meta.env.VITE_REACT_APP_ASSETS_URL}/uploads/${avatar}`} alt="User Avatar" />
                            ) : (
                                <LuUser2 size={22} />
                            )}
                        </li>
                    </ul>
                }
                {currentuser?.id &&
                    <ul className="mobile-nav__menu">
                        <li><Link className="nav__menu-link pb-2" to={`/profile/${currentuser?.id}`} onClick={closeNav}><MdOutlineDashboard /></Link></li>
                        <li><Link className="nav__menu-link pb-2" to={`/myposts/${currentuser?.id}`} onClick={closeNav}><RiPagesLine /></Link></li>
                        <li><Link className="nav__menu-link" to='/create' onClick={closeNav}><FiPlusCircle size={20} /></Link></li>
                        <li><Link className="nav__menu-link" to='/authors' onClick={closeNav}><LuUsers size={16} /></Link></li>
                        <li><Link className="nav__menu-link" to='/logout' onClick={closeNav}><IoIosLogOut size={16} /></Link></li>
                    </ul>
                }
                {currentuser?.id && isNavOpen && <div className="sub-menu-wrap">
                    <div className={`sub-menu ${submenuOpen ? 'active' : ''}`}>
                        <p className="name">{currentuser?.name}</p>
                        <hr />
                        <ul>
                            <Link className="nav__menu-link pb-2" to={`/profile/${currentuser?.id}`} onClick={closeNav}>Dashboard</Link>
                            <Link className="nav__menu-link pb-2" to={`/myposts/${currentuser?.id}`} onClick={closeNav}>My Posts</Link>
                            <Link className="nav__menu-link" to='/logout' onClick={closeNav}>Logout</Link>
                        </ul>
                    </div>
                </div>
                }
                {!currentuser?.id && isNavOpen &&
                    <ul className="nav__menu">
                        <li><Link className="nav__menu-link" to='/authors' onClick={closeNav}>Authors</Link></li>
                        <li><Link className="nav__menu-link" to='/login' onClick={closeNav}>Login</Link></li>
                    </ul>
                }

                {!currentuser?.id &&
                    <ul className="mobile-nav__menu">
                        <li><Link className="nav__menu-link" title="Authors" to='/authors' onClick={closeNav}><LuUsers size={16} /></Link></li>
                        <li><Link className="nav__menu-link" title="Login" to='/login' onClick={closeNav}><TbLogin size={16} /></Link></li>
                    </ul>
                }
            </div>
        </nav>
    );
}

export default Header;


// import { Link } from "react-router-dom";
// import { FaBars } from "react-icons/fa6";
// import { IoMdClose } from "react-icons/io";
// import { FiEdit } from "react-icons/fi";
// import { LuUsers } from "react-icons/lu";
// import { LuUser2 } from "react-icons/lu";
// import { useContext, useEffect, useState } from "react";
// import { UserContext } from '../context/UserContext';
// import axios from "axios";

// function Header() {
//     const [isNavOpen, setIsNavOpen] = useState(window.innerWidth > 800);
//     const [avatar, setAvatar] = useState(null);
//     const [submenuOpen, setSubmenuOpen] = useState(false);

//     const { currentuser } = useContext(UserContext);

//     const apiURL = import.meta.env.VITE_REACT_APP_BASE_URL;

//     useEffect(() => {
//         const getUser = async () => {
//             if (!currentuser?.id) return;
//             try {
//                 const res = await axios.get(`${apiURL}/users/${currentuser.id}`);
//                 setAvatar(res.data.avatar);
//             } catch (error) {
//                 console.error("Error fetching user data:", error);
//             }
//         };

//         getUser();
//     }, [currentuser, apiURL]);

//     useEffect(() => {
//         const handleResize = () => {
//             setIsNavOpen(window.innerWidth > 800);
//         };
//         window.addEventListener('resize', handleResize);
//         return () => {
//             window.removeEventListener('resize', handleResize);
//         };
//     }, []);

//     const closeNav = () => {
//         if (window.innerWidth < 800) {
//             setIsNavOpen(false);
//         }
//     };

//     const handleSubmenuOpen = () => {
//         setSubmenuOpen(!submenuOpen);
//     };

//     return (
//         <nav>
//             <div className="container nav__container">
//                 <Link to='/' className="nav__logo" onClick={closeNav}>
//                     <p>ᑌᑎᗷOᑌᑎᗪ..</p>
//                 </Link>

//                 <div className="nav__toggle">
//                     {currentuser?.id && (
//                         <>
//                             <div className="nav__menu-link" id="nav__menu-profile" onClick={handleSubmenuOpen}>
//                                 {avatar ? (
//                                     <img src={`${import.meta.env.VITE_REACT_APP_ASSETS_URL}/uploads/${avatar}`} alt="User Avatar" />
//                                 ) : (
//                                     <LuUser2 size={22} />
//                                 )}
//                             </div>
//                         </>
//                     )}
//                     <button className="nav__toggle-btn" onClick={() => setIsNavOpen(!isNavOpen)}>
//                         {isNavOpen ? <IoMdClose /> : <FaBars />}
//                     </button>
//                 </div>

//                 {currentuser?.id && isNavOpen && (
//                     <ul className="nav__menu">
//                         <li><Link className="nav__menu-link" to='/create' onClick={closeNav}><FiEdit size={18} /> Write</Link></li>
//                         <li><Link className="nav__menu-link" to='/authors' onClick={closeNav}><LuUsers size={18} /></Link></li>
//                     </ul>
//                 )}

//                 {currentuser?.id && isNavOpen && (
//                     <div className="sub-menu-wrap">
//                         <div className={`sub-menu ${submenuOpen ? 'active' : ''}`}>
//                             <p className="name">{currentuser?.name}</p>
//                             <hr />
//                             <Link className="nav__menu-link pb-2" to={`/profile/${currentuser?.id}`} onClick={closeNav}>Dashboard</Link>
//                             <Link className="nav__menu-link pb-2" to={`/myposts/${currentuser?.id}`} onClick={closeNav}>My Posts</Link>
//                             <Link className="nav__menu-link" to='/logout' onClick={closeNav}>Logout</Link>
//                         </div>
//                     </div>
//                 )}

//                 {!currentuser?.id && isNavOpen && (
//                     <ul className="nav__menu">
//                         <li><Link className="nav__menu-link" to='/authors' onClick={closeNav}>Authors</Link></li>
//                         <li><Link className="nav__menu-link" to='/login' onClick={closeNav}>Login</Link></li>
//                     </ul>
//                 )}
//             </div>
//         </nav>
//     );
// }

// export default Header;



