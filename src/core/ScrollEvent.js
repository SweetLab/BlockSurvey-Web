const ClickScroll = () => {
    Scrolling()
}

let i = 2
const Scrolling = () => {
    if( i < 5) {
        i = i + 1
    }
}

export {
    ClickScroll,
    Scrolling
};