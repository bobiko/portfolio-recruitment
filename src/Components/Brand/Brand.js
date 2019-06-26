import React from 'react';
import Image from 'react-bulma-components/lib/components/image';

const Brand = ({ ...item }) => {
    return <Image src={`${process.env.PUBLIC_URL}/assets/brands/${item.src}`} alt="item.title" />;
};

export default Brand;
