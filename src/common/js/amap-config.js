import AMap from 'AMap'
import iconP from '@/common/image/AMap/icon-P.png'
import iconPosition from '@/common/image/AMap/icon-position.png'
import iconEvent from '@/common/image/AMap/icon-event.png'
import iconMonitor from '@/common/image/AMap/icon-monitor.png'
import iconToilet from '@/common/image/AMap/icon-toilet.png'

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
  }),
  iconEvent: new AMap.Icon({
    size: new AMap.Size(39, 50),
    image: iconEvent,
    imageSize: new AMap.Size(39, 50)
  }),
  iconMonitor: new AMap.Icon({
    size: new AMap.Size(39, 50),
    image: iconMonitor,
    imageSize: new AMap.Size(39, 50)
  }),
  iconToilet: new AMap.Icon({
    size: new AMap.Size(39, 50),
    image: iconToilet,
    imageSize: new AMap.Size(39, 50)
  })
}
