import React from 'react';
import Columns from 'react-bulma-components/lib/components/columns';
import { FaEye } from 'react-icons/fa';

import Overlay from '../Overlay/Overlay';

const Project = ({ items, limit }) => {
    return items.slice(0, limit).map((item, i) => (
        <Columns.Column
            mobile={{
                size: 6,
            }}
            tablet={{
                size: 3,
            }}
            desktop={{
                size: 3,
            }}
            widescreen={{
                size: 3,
            }}
            fullhd={{
                size: 2,
            }}
        >
            <figure className="image is-square">
                <img
                    alt={item.name}
                    src={`https://unsplash.it/600/600/?random&pic=${Math.random()}`}
                />
                <Overlay>
                    <FaEye size={60} />
                </Overlay>
            </figure>
        </Columns.Column>
    ));
};

export default Project;
