/**
 * @function reduceValuesToSingleOnes
 * @description Takes an array Model, loops in with a specific given property and returns an array with these unique property values. --no duplicates
 * @arrayModel {array} the model that we want to loop in.
 * @myProperty {string} the given property we want to return the array with.
 * @return {array}
 */
export function reduceValuesToSingleOnes(arrayModel, myProperty) {
    const res = arrayModel
        .map(el => el[myProperty])
        .filter((value, index, self) => self.indexOf(value) === index);
    return res;
}

/**
 * @function splitIntoNestedArrays
 * @description Make nested Arrays inside an Array depending on the valuesModel length.
 * @arrayModel {array}
 * @valuesModel {array}
 * @myProperty {string}
 * @return {array}
 */
export function splitIntoNestedArrays(arrayModel, valuesModel, myProperty) {
    return valuesModel.map((el, index) => {
        return arrayModel.filter(el => {
            return el[myProperty] === valuesModel[index];
        });
    });
}

/**
 * @function removeDuplicateElements
 * @description Removes duplicate elements from an Array
 * @arrayModel {array}
 * @return {array}
 */

export function removeDuplicateElements(arrayModel) {
    return arrayModel.filter((item, index) => {
        return arrayModel.indexOf(item) === index;
    });
}

/**
 * @function getOptionSelectedDataKey
 * @description extracts a data-key value from a selected option
 * @elementRef {ref}
 * @return {number} id
 */

export function getOptionSelectedDataKey(ref) {
    const selected = Array.from(ref.options)[ref.selectedIndex];
    const selectedDataKey = parseInt(
        Array.from(selected.attributes[0].value).join('')
    );

    return selectedDataKey;
}
