import React from 'react';
import Image from 'next/image';
import styles from './library.module.scss';
import { Input } from 'antd';

const { Search } = Input;

const Repository = () => {
    const handleSearch = (value) => {
        console.log(value);
    };
    return (
        <div>
            <div className={styles.imagecontainer}>
                <div className={styles.tbox}>
                    <h1 className={styles.inimage}>PERPUSTAKAAN</h1>
                </div>
                <Image src={'/images/library.jpg'} width={500} height={250} layout="responsive" priority="true" />
            </div>
            <Search placeholder="Cari Judul atau Penulis" onSearch={handleSearch} style={{ width: '20%', marginLeft: '40%', marginTop: '2rem' }} />
        </div>
    );
};

export default Repository;
