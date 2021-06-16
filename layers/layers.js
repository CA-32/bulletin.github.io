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
var format_zonagesbulletinsgers2021_1 = new ol.format.GeoJSON();
var features_zonagesbulletinsgers2021_1 = format_zonagesbulletinsgers2021_1.readFeatures(json_zonagesbulletinsgers2021_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_zonagesbulletinsgers2021_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_zonagesbulletinsgers2021_1.addFeatures(features_zonagesbulletinsgers2021_1);
var lyr_zonagesbulletinsgers2021_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_zonagesbulletinsgers2021_1, 
                style: style_zonagesbulletinsgers2021_1,
                interactive: true,
    title: 'zonages bulletins gers 2021<br />\
    <img src="styles/legend/zonagesbulletinsgers2021_1_0.png" /> Neste Nord Est<br />\
    <img src="styles/legend/zonagesbulletinsgers2021_1_1.png" />  Neste Nord<br />\
    <img src="styles/legend/zonagesbulletinsgers2021_1_2.png" /> Neste Sud<br />\
    <img src="styles/legend/zonagesbulletinsgers2021_1_3.png" /> Midouze<br />\
    <img src="styles/legend/zonagesbulletinsgers2021_1_4.png" /> Adour<br />'
        });
var format_parcellerefrencet2021_2 = new ol.format.GeoJSON();
var features_parcellerefrencet2021_2 = format_parcellerefrencet2021_2.readFeatures(json_parcellerefrencet2021_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_parcellerefrencet2021_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_parcellerefrencet2021_2.addFeatures(features_parcellerefrencet2021_2);
var lyr_parcellerefrencet2021_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_parcellerefrencet2021_2, 
                style: style_parcellerefrencet2021_2,
                interactive: false,
                title: 'parcelle reférence été 2021'
            });
var format_CA32_3 = new ol.format.GeoJSON();
var features_CA32_3 = format_CA32_3.readFeatures(json_CA32_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CA32_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CA32_3.addFeatures(features_CA32_3);
var lyr_CA32_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CA32_3, 
                style: style_CA32_3,
                interactive: true,
                title: '<img src="styles/legend/CA32_3.png" /> CA32'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_zonagesbulletinsgers2021_1.setVisible(true);lyr_parcellerefrencet2021_2.setVisible(true);lyr_CA32_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_zonagesbulletinsgers2021_1,lyr_parcellerefrencet2021_2,lyr_CA32_3];
lyr_zonagesbulletinsgers2021_1.set('fieldAliases', {'nom secteu': 'nom secteu', 'bulletin': 'bulletin', });
lyr_parcellerefrencet2021_2.set('fieldAliases', {'COMMUNE': 'COMMUNE', 'COMMUNE0': 'COMMUNE0', 'culture': 'culture', 'technicien': 'technicien', 'zonage bul': 'zonage bul', });
lyr_CA32_3.set('fieldAliases', {'Retour': 'Retour', });
lyr_zonagesbulletinsgers2021_1.set('fieldImages', {'nom secteu': 'TextEdit', 'bulletin': 'TextEdit', });
lyr_parcellerefrencet2021_2.set('fieldImages', {'COMMUNE': 'TextEdit', 'COMMUNE0': 'TextEdit', 'culture': 'TextEdit', 'technicien': 'TextEdit', 'zonage bul': 'TextEdit', });
lyr_CA32_3.set('fieldImages', {'Retour': '', });
lyr_zonagesbulletinsgers2021_1.set('fieldLabels', {'nom secteu': 'header label', 'bulletin': 'no label', });
lyr_parcellerefrencet2021_2.set('fieldLabels', {'COMMUNE': 'no label', 'COMMUNE0': 'no label', 'culture': 'no label', 'technicien': 'no label', 'zonage bul': 'no label', });
lyr_CA32_3.set('fieldLabels', {'Retour': 'no label', });
lyr_CA32_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});