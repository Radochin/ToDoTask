$(function () {
    $('.btn-primary').click(function () {
        let inputValue = $('.form-control').val();
        if (inputValue) {
            $('.toDoList').before($('<div class="todoTask">' +
                '<span>' + inputValue + '</span>' +
                '<div class="setBtn">' +
                ' <button type="button" class="btn btn-outline-success">&#10003 </button> ' +
                ' <button type="button" class="btn btn-outline-danger">&#9747</button></div></div>'));
            $('.form-control').val('');
        }
    });

    $(document).on('click', '.setBtn .btn.btn-outline-success', function () {
        $(this).closest('.todoTask').find('span').css('text-decoration', 'line-through');
    });
    
    $(document).on('click', '.setBtn .btn.btn-outline-danger', function () {
        $(this).closest('.todoTask  ').remove();
    });
});




