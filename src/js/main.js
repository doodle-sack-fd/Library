import './lib/lib';


$('button').on('click', function () {
    $('div').getElement(2).toggleClass('active');
});

// $('div').click(function() {
//     console.log($(this).getElementIndex()) 
// });

// console.log($('div').getElement(2).find('.more'));
// console.log($('button').html('hello'));
console.log($('.some').closest('.fin2dme'));
console.log($('.some').getElement(0).siblings());

/* Сборка */