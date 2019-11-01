/**
 * @function validateChecker
 * @description Checks a value if it is worth using it, super null, undefined, '', isNaN checker
 * @return {boolean}
 */

export function validateChecker(value) {
    return (
        value !== undefined && value !== '' && value !== null && !isNaN(value)
    );
}
