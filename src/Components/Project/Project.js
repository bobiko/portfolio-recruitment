import React from 'react';
import Columns from 'react-bulma-components/lib/components/columns';
import Media from 'react-bulma-components/lib/components/media';
import Image from 'react-bulma-components/lib/components/image';
import { FaEye } from 'react-icons/fa';

import Overlay from '../Overlay/Overlay';

const Project = ({ items }) => {
    return items.map((item, i) => (
        <Columns.Column size={3}>
            <figure class="image is-square">
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
