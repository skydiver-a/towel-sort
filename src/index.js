
// You should implement your task here.

module.exports = function towelSort (matrix) {
    return matrix == null ? [] : matrix.reduce((acc, item, index) => {
        item.sort((a, b) => index%2 ? b - a : a - b)
            .map(element => acc.push(element));
        return acc;
    }, []);
}
