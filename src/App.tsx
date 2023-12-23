import styles from './App.module.scss';
import Dashboard from './components/dashboard/dashboard'
import React from 'react';

function App() {
    return (
        <div className={styles.App}>
            <Dashboard/>
        </div>
    );
}
export default App;