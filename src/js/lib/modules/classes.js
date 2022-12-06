import $ from '../core';

$.prototype.addClass = function(...classNames) {
    for(let i = 0; i < this.length; i++) {
        if(!this[i].classList.contains(classNames)){
            this[i].classList.add(...classNames);
        } else {
            continue;
        }        
    }

    return this;
};

$.prototype.removeClass = function (...classNames) {
    for (let i = 0; i < this.length; i++) {
        this[i].classList.remove(...classNames);
    }

    return this;
};

$.prototype.toggleClass = function (selector) {
    for (let i = 0; i < this.length; i++) {
        this[i].classList.toggle(selector);
    }

    return this;
};