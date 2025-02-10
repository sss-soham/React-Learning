import { useState } from "react";

export const ShortCircuit = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [user, setUser] = useState('');

    return (
        <section className="container m-8">
            <h1 className="text-6xl font-bold text-center mb-8">Short Circuit Evaluation</h1>

            {/* conditional rendering short circuit operation */}
            {isLoggedIn && <p className="text-center text-3xl mb-8">You are logged in</p>}

            {/* set user */}
            {user ? `Hello ${user}` : 'Hello Guest'}
            <div className="grid grid-cols-3 gap-8 m-[60px]">
                <button className="bg-cyan-600 border-2 border-black"
                onClick={() => setIsLoggedIn(!isLoggedIn)}
                >Toggle Login</button>

                <button className="bg-cyan-600 border-2 border-black"
                onClick={() => setUser('Soham SSS')}
                >Set User</button>

                <button className="bg-cyan-600 border-2 border-black"
                onClick={() => setUser('')}
                >Clear User</button>
            </div>

        </section>

    )
};