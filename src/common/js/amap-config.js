import AMap from 'AMap'
import iconP from '@/common/image/AMap/icon-P.png'
import iconPosition from '@/common/image/AMap/icon-position.png'

export const MAP_STYLE = {
  iconP: new AMap.Icon({
    size: new AMap.Size(36, 49),
    image: iconP,
    imageSize: new AMap.Size(36, 49)
  }),
  iconPosition: new AMap.Icon({
    size: new AMap.Size(20, 50),
    image: iconPosition,
    imageSize: new AMap.Size(20, 50)
  })
}
