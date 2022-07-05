import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Navbar from '../components/navbar';

export default function Home() {
    return (
        <div>
            <Head>
                <title>Create Next App</title>
            </Head>
            <Navbar />
        </div>
    );
}
