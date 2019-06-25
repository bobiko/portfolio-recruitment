import React from 'react';
import Icon from 'react-bulma-components/lib/components/icon';
import { FaStar, FaClock, FaHeart, FaBriefcase } from 'react-icons/fa';
export const StatsBoxIcon = ({ icon, size = 32 }) => {
    const props = { size };
    return (
        <Icon style={{ width: '5rem', height: '5rem' }}>
            {
                {
                    work: <FaBriefcase {...props} />,
                    clock: <FaClock {...props} />,
                    star: <FaStar {...props} />,
                    heart: <FaHeart {...props} />,
                }[icon]
            }
        </Icon>
    );
};
