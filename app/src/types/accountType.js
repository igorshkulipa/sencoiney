﻿define(['lodash'], (_) => {
    return (type) => {
        type = type || 'bank';
        var types = ['bank', 'cash', 'visa', 'mastercard', 'paypal'];
        for (var i = 0; i < types.length; i++) {
            if (types[i] == type) return type;
        }
        return types[0];
    }
});