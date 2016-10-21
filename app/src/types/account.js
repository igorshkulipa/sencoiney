﻿define(['knockout', 'types/accountType', 'types/accountColor', 'helpers/guid'], (ko, accountType, accountColor, guid) => {
    return (id, type, name, goal, sum, color) => {
        var accType = accountType(type);
        var accColor = accountColor(color);
        var object = {
            id: ko.observable(id || guid()),
            type: ko.observable(accType),
            name: ko.observable(name),
            sum: ko.observable(sum),
            goal: ko.observable(goal),
            color: ko.observable(accColor),
            percent: ko.pureComputed(() => {
                return object.goal() == 0 ? 100 : parseFloat((object.sum() / object.goal()) * 100).toFixed(2);
            }),
            roundIcon: {
                textcss: ko.pureComputed(() => {
                    return 'fa fa-circle fa-stack-2x ' + object.color().textcss();
                })
            },
            toPlainObject: () => {
                return {
                    id: object.id(),
                    type: object.type(),
                    name: object.name(),
                    sum: object.sum(),
                    goal: object.goal(),
                    color: object.color()
                }
            }
        }
        return object;
    }
});