export function scroll(href: any, e?: any, offset = 0) {
    if (!!e) {
        e.preventDefault()
    }

    const elHref = document.querySelector(href);
    let i = window.scrollY;
    if (elHref) {
        const top = elHref.offsetTop - offset;
        let int = setInterval(function () {
            window.scrollTo(0, i);
            if (i >= top) {
                i -= 12;
                if (i <= top) clearInterval(int)
            } else {
                i += 12;
                if (i >= top) clearInterval(int)
            }
        }, 0);
    }
}