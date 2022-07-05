import React from 'react';
import Link from 'next/link';
import { Menu } from 'antd';

const items = [
    {
        label: (
            <Link href="/">
                <a>Home</a>
            </Link>
        ),
        key: 'home',
    },
    {
        label: (
            <Link href="/blog">
                <a>Blog</a>
            </Link>
        ),
        key: 'blog',
    },
    {
        label: (
            <Link href="/jurnal">
                <a>Jurnal</a>
            </Link>
        ),
        key: 'jurn',
    },
    {
        label: (
            <Link href="/perpus">
                <a>Perpustakaan</a>
            </Link>
        ),
        key: 'perp',
    },
];

const Navbar = () => {
    return <Menu items={items} mode="horizontal" theme="dark" />;
};

export default Navbar;
