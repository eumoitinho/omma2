import React from 'react';
import Image from 'next/image';

const Logo = () => {
    return (
        <div style={{ margin: '20px 0' }}>
            <Image src="/path/to/logo.png" alt="Logo" width={200} height={50} style={{ maxWidth: '100%', height: 'auto' }} unoptimized />
        </div>
    );
};

export default Logo;