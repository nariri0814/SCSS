import React from 'react';
import classNames from 'classnames'
import './Button.scss';

function Button({children, size, color, outline, fullwidth, ...rest}) {
    // return <button className={["Button", size].join(' ')}>{children}</button>;
    // return <button className={`Button ${size}`}>{children}</button>;

    //yarn classnames 설치 후
    return <button
                className={classNames('Button', size, color, {
                    outline,
                    fullwidth 
                })}
                {...rest}
            >
                {children}
            </button>;
}
Button.defaultProps = {
    size: 'medium',
    color: 'blue'
};

export default Button;