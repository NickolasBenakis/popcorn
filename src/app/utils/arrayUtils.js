/**  @description Takes an array Model, loops in with a specific given property and returns an array with these unique property values. --no duplicates
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

/**  @description Make nested Arrays inside an Array depending on the valuesModel length.
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
