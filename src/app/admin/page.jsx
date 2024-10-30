// const admin=()=>
// {
//     return(
//         <div>admin</div>
//     )
// }
// export default admin


"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './AdminLogin.module.css';

const AdminLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
        router.push('/admin/dashboard'); // Example route
    };

    return (
        <div className={styles.container}>
            <div className={styles.loginForm}>
                <h2 className={styles.title}>Admin Login</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email" className={styles.label}>
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={styles.input}
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className={styles.label}>
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className={styles.input}
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    <button type="submit" className={styles.button}>
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AdminLogin;
