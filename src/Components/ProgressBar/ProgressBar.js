import React, { Fragment } from 'react';
import Progress from 'react-bulma-components/lib/components/progress';

const ProgressBar = ({ name, value, ...props }) => {
    return (
        <Fragment>
            <p>{`${name} ${value}%`}</p>
            <Progress value={value} {...props} />
        </Fragment>
    );
};

export default ProgressBar;
