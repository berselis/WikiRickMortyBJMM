
export const getIcon = (typeStatus) => {
    return icons[typeStatus];

}
const icons = {
    'Dead': '/src/assets/img/dead.png',
    'Alive': '/src/assets/img/alive.png',
    'unknown': '/src/assets/img/nan.png',
    'uknow': '/src/assets/img/uknow.png',
    'Unknown': '/src/assets/img/unknown.png'
}
