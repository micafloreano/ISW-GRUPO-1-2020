const getCardType = (number) => {
    const cards = {
        visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
        mastercard: /^5[1-5][0-9]{14}$/,
        amex: /^3[47][0-9]{13}$/,
        diners: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
        discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
        jcb: /^(?:2131|1800|35\d{3})\d{11}$/
    };

    for (let card in cards) {
        if (cards[card].test(number)) {
            return card;
        }
    }
};

const isVisaCard = ( number ) => {
    const brand = getCardType(number);
    return brand === 'visa'
}

export {isVisaCard, getCardType};