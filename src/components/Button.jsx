import React from 'react';
import Image from 'next/image';

const Button = ({
    label,
    iconURL,
    backgroundColor,
    textColor,
    borderColor,
    fullWidth,
    className
}) => {
    return (
        <button
            className={`flex justify-center items-center gap-2 px-7 py-4 font-semibold text-lg leading-none
                ${backgroundColor ? `${backgroundColor} ${borderColor} ${textColor}` : 'text-white bg-red-400 border-corral-red'}
                rounded-full ${fullWidth ? 'w-full' : ''} ${className || ''}`}
        >
            {label}
            {iconURL && (
                <Image
                    src={iconURL}
                    alt="arrow right icon"
                    className="ml-2 rounded-full w-5 h-5"
                />
            )}
        </button>
    );
};

export default Button;