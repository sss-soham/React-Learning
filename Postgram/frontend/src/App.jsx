import {Header} from './components/Header'
import Footer from './components/Footer';
import { Registration } from './components/Registration';
import { useState } from 'react';

const  App = () => {

    const [isLogged, setLogg] = useState(0);



    return(
        <div className='bg-slate-300 flex justify-center h-[100vh] w-[40%]'>
            <Header></Header>
            <Registration></Registration>
            <Footer></Footer>
        </div>
    )
};

export default App;
