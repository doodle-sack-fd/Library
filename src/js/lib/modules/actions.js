import $ from '../core';

$.prototype.on = function (eventName, callback) {
    if (!eventName || !callback) {
        return this;
    }

    for (let i = 0; i < this.length; i++) {
        this[i].addEventListener(eventName, callback);
    }
    return this;
};

$.prototype.off = function (eventName, callback) {
    if (!eventName || !callback) {
        return this;
    }

    for (let i = 0; i < this.length; i++) {
        this[i].removeEventlistener(eventName, callback);
    }
    return this;
};

$.prototype.click = function (handler) {
    for (let i = 0; i < this.length; i++) {
        if (handler) {
            this[i].addEventlistener('click', handler);
        } else {
            this[i].click();
        }

    }
    return this;
};