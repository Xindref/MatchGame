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
