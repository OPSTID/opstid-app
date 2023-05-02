/**
 * Profile Avatar Generator
 */

import {toSvg} from "jdenticon"

const generateProfileAvatarPath = (seed) => {
    if(!seed){
        seed = Math.random().toString(16).slice(-12) // generate random seed
    }

    return `data:image/svg+xml;charset=utf8,${encodeURIComponent(toSvg(seed, 256))}`
}

export default generateProfileAvatarPath