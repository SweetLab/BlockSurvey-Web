const Scroll = () => {
    onclick()
}


let i = 1
const onclick = () => {
    i = i + 1
    window.location.href = `#page${i}`
}

export {
    Scroll,
    onclick
};