const ClickScroll = () => {
    Scrolling();
}

let i = 1
const Scrolling = () => {
    i = i + 1
    window.location.href = `#page${i}`
}

export {
    ClickScroll,
    Scrolling
};