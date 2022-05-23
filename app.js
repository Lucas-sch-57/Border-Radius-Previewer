let border = document.querySelectorAll('.input-border');
let box = document.querySelector('.box');
let btnCopy = document.querySelector('#btn-copy');
let css = {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
}

let borderPreview = function(border) {

    switch (border.getAttribute('data-border')) {
        case 'topLeft':
            console.log('fonction')
            box.style.borderTopLeftRadius = border.value + 'px'
            css.borderTopLeftRadius = border.value + 'px'
            break;
        case 'topRight':
            box.style.borderTopRightRadius = border.value + 'px'
            css.borderTopRightRadius = border.value + 'px'
            break;
        case 'bottomLeft':
            box.style.borderBottomLeftRadius = border.value + 'px'
            css.borderBottomLeftRadius = border.value + 'px'
            break;
        case 'bottomRight':
            box.style.borderBottomRightRadius = border.value + 'px'
            css.borderBottomRightRadius = border.value + 'px'
            break;
        default:
            console.log('rien')
    }

}

let cssGenerator = function(css) {
    return '.box{border-radius:' + css.borderTopLeftRadius + ' ' + css.borderTopRightRadius + ' ' + css.borderBottomLeftRadius + ' ' + css.borderBottomRightRadius + '}'
}

let copyCss = function() {
    const copyText = document.querySelector('#css');

    copyText.select();
    copyText.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(copyText.value);
}

btnCopy.addEventListener('click', () => {
    copyCss();
})
for (let i = 0; i < border.length; i++) {

    border[i].addEventListener('keyup', () => {
        borderPreview(border[i])
        document.querySelector('#css').value = cssGenerator(css)

    })
}