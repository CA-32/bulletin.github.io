var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://a.tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_zonagesbulletinsgers2020_1 = new ol.format.GeoJSON();
var features_zonagesbulletinsgers2020_1 = format_zonagesbulletinsgers2020_1.readFeatures(json_zonagesbulletinsgers2020_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_zonagesbulletinsgers2020_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_zonagesbulletinsgers2020_1.addFeatures(features_zonagesbulletinsgers2020_1);
var lyr_zonagesbulletinsgers2020_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_zonagesbulletinsgers2020_1, 
                style: style_zonagesbulletinsgers2020_1,
                interactive: true,
    title: 'zonages bulletins gers 2020<br />\
    <img src="styles/legend/zonagesbulletinsgers2020_1_0.png" /> Neste Nord Est<br />\
    <img src="styles/legend/zonagesbulletinsgers2020_1_1.png" />  Neste Nord<br />\
    <img src="styles/legend/zonagesbulletinsgers2020_1_2.png" /> Neste Sud<br />\
    <img src="styles/legend/zonagesbulletinsgers2020_1_3.png" /> Midouze<br />\
    <img src="styles/legend/zonagesbulletinsgers2020_1_4.png" /> Adour<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_zonagesbulletinsgers2020_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_zonagesbulletinsgers2020_1];
lyr_zonagesbulletinsgers2020_1.set('fieldAliases', {'nom secteu': 'nom secteu', 'bulletin': 'bulletin', });
lyr_zonagesbulletinsgers2020_1.set('fieldImages', {'nom secteu': 'TextEdit', 'bulletin': 'TextEdit', });
lyr_zonagesbulletinsgers2020_1.set('fieldLabels', {'nom secteu': 'no label', 'bulletin': 'no label', });
lyr_zonagesbulletinsgers2020_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});