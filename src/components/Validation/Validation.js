import React from 'react'

export const emailIsValid = (e) => {
    if (e && e.target) setloginText(e.target.value);
    return setIsEmailFieldValid(
        /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(
            e.target.value
        )
    );
};
export const passwordIsValid = (e) => {
    if (e && e.target) setpasswordText(e.target.value);
    return setIsPasswordFieldValid(
        /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{6,}$/.test(
            e.target.value
        )
    );
};