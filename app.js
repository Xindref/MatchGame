function calculateTaxes(income) {
    if (!Number.isFinite(income)) {
        throw new Error('BAD INCOME');
    }
    if (income > 10000) {
        return income * .25;
    }
    else {
        return income * .15;
    }
}

function removeDupes(values) {
    const arr = [...new Set(values)];
    console.log(typeof values);
    if (typeof values === 'string') {
        console.log('string array');
        return arr.join('');
    }
    return arr;
}

function remove(arr, val) {
    return arr.filter((el) => {
        return el !== val
    })
}