import {Routes, Route} from 'react-router-dom'; 
import Home from '../pages/Home.jsx';
import About from '../pages/About.jsx';
import Contact from '../pages/Contact.jsx';
import { useAuth, logout, login } from '../Context/AuthContext.jsx';
import Profile from '../pages/Profile.jsx';

const Main = () => {
    return (
        <main>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                {user && (
                    <Route path='/profile' element={<Profile />} />
                )}
                <Route path='*' element={<h2>404 - Page Not Found</h2>} />
            </Routes>
        </main>
    );
}

export default Main;