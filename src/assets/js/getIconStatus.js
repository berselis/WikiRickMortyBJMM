import dead from '../../assets/img/dead.png';
import alive from '../../assets/img/alive.png';


export const getIcon = (typeStatus) => {
    return icons[typeStatus];

}
const icons = {
    'Dead': dead,
    'Alive': alive,
    'unknown': '/src/assets/img/nan.png',
    'uknow': '/src/assets/img/uknow.png',
    'Unknown': '/src/assets/img/unknown.png'
}
