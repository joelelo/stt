import React from 'react';
import Navbar from '../../components/navbar';
import Image from 'next/image';
import styles from './library.module.scss';

const Repository = () => {
    return (
        <div>
            <Navbar />
            <div className={styles.imagecontainer}>
                <div className={styles.tbox}>
                    <h1 className={styles.inimage}>Perpustakaan</h1>
                </div>

                <Image src={'/images/library.jpg'} width={500} height={250} layout="responsive" />
            </div>
            Repository
        </div>
    );
};

export default Repository;
