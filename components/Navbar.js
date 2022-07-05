import React from 'react';
import Link from 'next/link';

const Navbar = () => {
    return (
        <div>
            <Link href="/">
                <a>Home</a>
            </Link>
            <Link href="/blog">
                <a>Blog</a>
            </Link>
            <Link href="/jurnal">
                <a>Junal</a>
            </Link>
            <Link href="/perpus">
                <a>Perpus</a>
            </Link>
        </div>
    );
};

export default Navbar;
