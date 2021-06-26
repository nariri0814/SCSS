import React from 'react';
import './Button.scss';
import classNames from 'classnames'

function Button({children, size, color}) {
    // return <button className={["Button", size].join(' ')}>{children}</button>;
    // return <button className={`Button ${size}`}>{children}</button>;

    //yarn classnames 설치 후
    return <button className={classNames('Button', size, color)}>{children}</button>;
}
Button.defaultProps = {
    size: 'medium',
    color: 'blue'
};

export default Button;