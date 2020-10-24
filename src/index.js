
// You should implement your task here.

module.exports = function towelSort (matrix=[]) {
    return matrix.reduce( (result, curArr, index) => {
        if (index%2 === 0) {
            result = result.concat(curArr);
        } else {
            result = result.concat(curArr.reverse());
        }
        return result;
      }, []
    )
}
