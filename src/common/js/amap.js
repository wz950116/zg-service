import AMap from 'AMap'
import { MAP_STYLE } from './amap-config'
import TrackIconGreen from '@/common/image/AMap/track-icon-green.png'

export class BaseMap {
  craeteGraphicsLayer() {
    return new AMap.OverlayGroup()
  }
}

export class MapContainer extends BaseMap {
  constructor(options) {
    super()
    this.options = Object.assign({}, { pitch: 60, viewMode: '2D', zoom: 12 }, options)
    this.graphicSelect = this.options.graphicSelect
    this._clickHook = this.options.clickHook || null
    this.layersMap = {}
    this.heatmapLayersMap = {}
    this.clusterLayersMap = {}
    this.markers = []
    this.map = null
    this.initMap()
    this.infoWindow = null
  }

  initMap() {
    const map = new AMap.Map(
      this.options.target,
      Object.assign({
        zoom: this.options.zoom, // 级别
        center: this.options.center, // 中心点坐标
        ...this.options
      })
    )
    this.map = map
  }

  /**
   * 删除图层
   * @param {*} name 图层名称
   */
  clearLayer(name) {
    const { graphicLayer } = this.getLayers(name)
    if (graphicLayer) {
      graphicLayer.clearOverlays()
    }
  }

  /**
   * 获取图层
   * @param {any} name 图层名称
   * @param {*} type
   */
  getLayers(name, type = null) {
    if (type === 'heatmap') {
      if (this.heatmapLayersMap[name] === undefined) {
        this.heatmapLayersMap[name] = this.craeteHeatMapLayer(name)
      }
    } else if (type === 'cluster') {
      if (this.clusterLayersMap[name] === undefined) {
        this.clusterLayersMap[name] = this.craeteGraphicsLayer(name)
      }
    } else {
      if (this.layersMap[name] === undefined) {
        this.layersMap[name] = this.craeteGraphicsLayer(name)
      }
    }
    return {
      graphicLayer: this.layersMap[name],
      clusterLayer: this.clusterLayersMap[name],
      heatmapLayer: this.heatmapLayersMap[name]
    }
  }

  /**
   * 添加点
   * @param {any} name 图层名称
   * @param {Array} points 点位数组
   * @param {*} type
   */
  addPoints(name, points, type = null) {
    const { graphicLayer } = this.getLayers(name, type)
    graphicLayer.clearOverlays()
    const markers = []
    points.forEach(item => {
      // 创建点实例
      if (!/\d/.test(item.lon || item.longitude)) {
        return
      }
      if ((item.lon || item.longitude) && (item.lat || item.latitude)) {
        var marker = new AMap.Marker({
          position: new AMap.LngLat(
            item.lon || item.longitude,
            item.lat || item.latitude
          ),
          offset: new AMap.Pixel(-19, -20),
          icon: MAP_STYLE[item.type || name],
          extData: { type: name, ...item }
        })
        marker.on('click', this.markerClick.bind(this))
        markers.push(marker)
        this.markers.push(marker)
      }
    })
    graphicLayer.addOverlays(markers)
    this.map.add(graphicLayer)
    // this.map.setFitView() // 使标记物全部显示在当前视野
  }

  // 清除标记
  removePoints() {
    this.markers && this.map.remove(this.markers)
  }

  // 添加海量点
  addMassMarks(type = 'event', data) {
    data.forEach(item => {
      item.style = 1
      item.type = type
    })
    const style = [{
      url: '',
      anchor: new AMap.Pixel(-19, -20),
      size: new AMap.Size(50, 50)
    }, {
      url: require(`@/common/image/AMap/${type}.png`),
      anchor: new AMap.Pixel(9, 9),
      size: new AMap.Size(15, 15)
    }, {
      url: '',
      anchor: new AMap.Pixel(3, 3),
      size: new AMap.Size(5, 5)
    }]
    this.massMarks = new AMap.MassMarks(data, {
      // zIndex: 5, // 海量点图层叠加的顺序
      // zooms: [3, 19], // 在指定地图缩放级别范围内展示海量点图层
      style
    }) // 多种样式对象的数组
    this.massMarks.on('click', e => {
      this._clickHook && this._clickHook(this, e)
      this.graphicSelect && this.graphicSelect(e.data, vm => {
        vm.$nextTick(() => {
          const c = document.getElementById(this.options.popup)
          this.setPosition(c, new AMap.LngLat(e.data.longitude, e.data.latitude))
        })
      })
    })
    this.massMarks.setMap(this.map) // 添加到地图上
  }

  // 清除海量标记
  removeMassMarks() {
    this.massMarks && this.map.remove(this.massMarks)
  }

  // 添加范围圈
  addCircle(points, options) {
    const circle = new AMap.Circle({
      center: new AMap.LngLat(...points),
      radius: 3000,
      strokeColor: '#ff4f5c',
      strokeOpacity: 1,
      strokeWeight: 1,
      fillColor: 'rgba(255, 79, 92, 0.20)',
      ...options
    })
    this.map.add(circle)
  }

  // 画网格数据
  addGeoJSON(name, geoJSON, type = null, options) {
    const { graphicLayer } = this.getLayers(name, type)
    graphicLayer.clearOverlays()
    const geojson = new AMap.GeoJSON({
      geoJSON,
      ...options
    })
    graphicLayer.addOverlays(geojson)
    this.map.add(graphicLayer)
  }

  /**
   * 点位点击触发
   * @param {Event} e
   */
  markerClick(e) {
    const map = this
    const data = e.target.getExtData()
    this._clickHook && this._clickHook(map, e)
    this.graphicSelect && this.graphicSelect(data, vm => {
      vm.$nextTick(() => {
        const c = document.getElementById(this.options.popup)
        map.setPosition(c, e.target.getPosition())
      })
    })
  }

  /**
   * 手动添加地图弹框
   * @param {Element} dom DM对象
   * @param {Object} posit 经纬度
   */
  setPosition(dom, posit) {
    this.infoWindow = new AMap.InfoWindow({
      offset: new AMap.Pixel(10, -30),
      closeWhenClickMap: this.options.closeWhenClickMap === false ? this.options.closeWhenClickMap : true
    })
    this.infoWindow.setContent(dom)
    this.infoWindow.open(this.map, posit)
    this.infoWindow.on('close', () => {
      this.clickMarker && this.clickMarker.hide()
      this.options.closeInfoWindowCallback && this.options.closeInfoWindowCallback()
    })
  }

  /**
   * 绘制轨迹
   * @param {Array} track 轨迹数组
   * @param {Function} stopCallback 停止播放时的回调函数
   * @param {Object} polylineStyle 基础线的样式
   * @param {Object} passedPolylineStyle 动画线的样式
   */
  drawTrack(track, stopCallback, polylineStyle = {}, passedPolylineStyle = {}) {
    const marker = new AMap.Marker({
      map: this.map,
      position: track[0],
      icon: TrackIconGreen,
      offset: new AMap.Pixel(-10, -10)
    })
    // 绘制轨迹
    const polyline = new AMap.Polyline({
      map: this.map,
      path: track,
      showDir: true,
      strokeColor: '#28F',
      // 线透明度
      // strokeOpacity: 1,
      // 线宽
      strokeWeight: 4,
      // 线样式
      // strokeStyle: "solid"
      ...polylineStyle
    })
    const passedPolyline = new AMap.Polyline({
      map: this.map,
      // path: lineArr,
      // 线颜色
      strokeColor: '#AF5',
      // 线透明度
      // strokeOpacity: 1,
      // 线宽
      strokeWeight: 4,
      // 线样式
      // strokeStyle: "solid"
      ...passedPolylineStyle
    })
    let movingFlag = false
    let stopTimer = null
    marker.on('moving', function (e) {
      passedPolyline.setPath(e.passedPath)
      movingFlag = true
      if (stopTimer) {
        clearTimeout(stopTimer)
      }
    })
    marker.on('moveend', function () {
      movingFlag = false
      stopTimer = setTimeout(() => {
        stopCallback(movingFlag)
      }, 200)
    })
    return {
      startAnimation() {
        console.log(track, 111)
        marker.moveAlong(track, 200)
      },
      pauseAnimation() {
        marker.pauseMove()
      },
      resumeAnimation() {
        marker.resumeMove()
      },
      stopAnimation() {
        marker.stopMove()
      },
      clearTrack() {
        marker.stopMove()
        marker.setMap(null)
        passedPolyline.setMap(null)
        polyline.setMap(null)
        stopCallback && stopCallback(false)
      }
    }
  }
}
