const $ = function(selector) {
    return new $.prototype.init(selector);
};

$.prototype.init = function (selector) {
    if(!selector) {
        return this; // {}
    }

    if (selector.tagName) {
        this[0] = selector;
        this.length = 1;
        return this;    
    }

    Object.assign(this, document.querySelectorAll(selector));
    this.length = document.querySelectorAll(selector).length;
    return this;
};

/* Обращаемся к прототипу функции, у нас там есть инит,
 у нее же мы можем тоже обратиться к прототипу,
  он  относится к объекту который возращает этот метод.
  */

$.prototype.init.prototype = $.prototype;

window.$ = $;

export default $;