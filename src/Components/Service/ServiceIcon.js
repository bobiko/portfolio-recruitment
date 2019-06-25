import React from 'react';
import Icon from 'react-bulma-components/lib/components/icon';
import {
    FaPencilRuler,
    FaMobileAlt,
    FaPaintRoller,
    FaHeart,
    FaGamepad,
    FaHighlighter,
    FaCamera,
    FaSearchDollar,
} from 'react-icons/fa';
const ServiceIcon = ({ icon, size = 32 }) => {
    const props = { size };
    return (
        <Icon style={{ width: '5rem', height: '5rem' }} className="has-text-centered">
            {
                {
                    game: <FaGamepad {...props} />,
                    mobile: <FaMobileAlt {...props} />,
                    development: <FaPencilRuler {...props} />,
                    design: <FaHeart {...props} />,
                    seo: <FaSearchDollar {...props} />,
                    photography: <FaCamera {...props} />,
                    graphic: <FaHighlighter {...props} />,
                    illustrations: <FaPaintRoller {...props} />,
                }[icon]
            }
        </Icon>
    );
};

export default ServiceIcon;
