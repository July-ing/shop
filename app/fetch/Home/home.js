import { get } from "../get.js"


export function getCarouselDate(){
    const result =  get('api/homeCarouse');
    return result;
}