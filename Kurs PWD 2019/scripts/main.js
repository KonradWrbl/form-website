$('button').on('click', () => {
    $('#main').toggleClass('container-form');
})

let IE = () => {
    if (navigator.appName=="Microsoft Internet Explorer") $("#IE").css('display','inline');
}

IE();