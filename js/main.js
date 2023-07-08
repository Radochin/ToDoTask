$(function () {


    $('.btn-primary').click(function () {
        let inputValue = $('.form-control').val();
        if (inputValue) {
            $('.toDoList').before($('<div class="todoTask">' + inputValue + '' +
                '<div class="setBtn"> <button class="done">+</button> ' +
                ' <button class="remove">X</button></div></div>'));
            $('.form-control').val('');
        }
    });

    $(document).on('click', '.setBtn .done', function () {
        $(this).closest('.todoTask').css('text-decoration', 'line-through');
    });

    $(document).on('click', '.setBtn .remove', function () {
        $(this).closest('.todoTask').remove();
    });
});




