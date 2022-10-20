ymaps.ready(init);
function init(){
    var myMap = new ymaps.Map("map", {
      center: [55.76, 37.64],
      zoom: 14,
      controls: ['geolocationControl', 'zoomControl']
    });

    var myPlacemark = new ymaps.Placemark([55.75864762650262, 37.60098226967305], {}, {
      iconLayout: 'default#image',
      iconImageHref: '../img/map_point.svg',
      iconImageSize: [20, 20],
    });

    myMap.geoObjects.add(myPlacemark);
}
