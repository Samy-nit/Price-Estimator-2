import styles from './App.module.scss';
import React from 'react';
import { Dashboard } from './components/dashboard/dashboard';

function App() {
    return (
        <div className={styles.App}>
            <Dashboard/>
        </div>
    );
}
export default App;