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
var format_zonagesbulletins32et65_1 = new ol.format.GeoJSON();
var features_zonagesbulletins32et65_1 = format_zonagesbulletins32et65_1.readFeatures(json_zonagesbulletins32et65_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_zonagesbulletins32et65_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_zonagesbulletins32et65_1.addFeatures(features_zonagesbulletins32et65_1);
var lyr_zonagesbulletins32et65_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_zonagesbulletins32et65_1, 
                style: style_zonagesbulletins32et65_1,
                interactive: true,
    title: 'zonages bulletins 32 et 65<br />\
    <img src="styles/legend/zonagesbulletins32et65_1_0.png" /> Neste Nord Est<br />\
    <img src="styles/legend/zonagesbulletins32et65_1_1.png" />  Neste Nord<br />\
    <img src="styles/legend/zonagesbulletins32et65_1_2.png" /> Neste Sud<br />\
    <img src="styles/legend/zonagesbulletins32et65_1_3.png" /> Midouze<br />\
    <img src="styles/legend/zonagesbulletins32et65_1_4.png" /> Adour<br />'
        });
var format_Departement_32_2 = new ol.format.GeoJSON();
var features_Departement_32_2 = format_Departement_32_2.readFeatures(json_Departement_32_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Departement_32_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Departement_32_2.addFeatures(features_Departement_32_2);
var lyr_Departement_32_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Departement_32_2, 
                style: style_Departement_32_2,
                interactive: false,
                title: '<img src="styles/legend/Departement_32_2.png" /> Departement_32'
            });
var format_parcelles652022Nestesud_3 = new ol.format.GeoJSON();
var features_parcelles652022Nestesud_3 = format_parcelles652022Nestesud_3.readFeatures(json_parcelles652022Nestesud_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_parcelles652022Nestesud_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_parcelles652022Nestesud_3.addFeatures(features_parcelles652022Nestesud_3);
var lyr_parcelles652022Nestesud_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_parcelles652022Nestesud_3, 
                style: style_parcelles652022Nestesud_3,
                interactive: true,
    title: 'parcelles 65 2022 Neste sud<br />\
    <img src="styles/legend/parcelles652022Nestesud_3_0.png" /> Maïs<br />\
    <img src="styles/legend/parcelles652022Nestesud_3_1.png" /> Maïs Pop Corn<br />\
    <img src="styles/legend/parcelles652022Nestesud_3_2.png" /> Maïs Semence<br />\
    <img src="styles/legend/parcelles652022Nestesud_3_3.png" /> Soja<br />'
        });
var format_Parcellesref2022ETE_4 = new ol.format.GeoJSON();
var features_Parcellesref2022ETE_4 = format_Parcellesref2022ETE_4.readFeatures(json_Parcellesref2022ETE_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Parcellesref2022ETE_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Parcellesref2022ETE_4.addFeatures(features_Parcellesref2022ETE_4);
var lyr_Parcellesref2022ETE_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Parcellesref2022ETE_4, 
                style: style_Parcellesref2022ETE_4,
                interactive: true,
    title: 'Parcelles ref 2022 ETE<br />\
    <img src="styles/legend/Parcellesref2022ETE_4_0.png" /> Maïs<br />\
    <img src="styles/legend/Parcellesref2022ETE_4_1.png" /> Maïs Pop Corn<br />\
    <img src="styles/legend/Parcellesref2022ETE_4_2.png" /> Maïs Semence<br />\
    <img src="styles/legend/Parcellesref2022ETE_4_3.png" /> Soja<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_zonagesbulletins32et65_1.setVisible(true);lyr_Departement_32_2.setVisible(true);lyr_parcelles652022Nestesud_3.setVisible(true);lyr_Parcellesref2022ETE_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_zonagesbulletins32et65_1,lyr_Departement_32_2,lyr_parcelles652022Nestesud_3,lyr_Parcellesref2022ETE_4];
lyr_zonagesbulletins32et65_1.set('fieldAliases', {'nom secteu': 'nom secteu', 'bulletin': 'bulletin', });
lyr_Departement_32_2.set('fieldAliases', {'RégION': 'RégION', 'ID_BDCARTO': 'ID_BDCARTO', 'DépARTEMEN': 'DépARTEMEN', 'DépARTEM0': 'DépARTEM0', 'DépARTEM1': 'DépARTEM1', 'ORDONNée_D': 'ORDONNée_D', });
lyr_parcelles652022Nestesud_3.set('fieldAliases', {'Zone': 'Zone', 'Culture': 'Culture', 'Commune': 'Commune', });
lyr_Parcellesref2022ETE_4.set('fieldAliases', {'Zone': 'Zone', 'Parcelle': 'Parcelle', 'COMMUNE': 'COMMUNE', 'Type de so': 'Type de so', 'Culture': 'Culture', });
lyr_zonagesbulletins32et65_1.set('fieldImages', {'nom secteu': 'TextEdit', 'bulletin': 'TextEdit', });
lyr_Departement_32_2.set('fieldImages', {'RégION': 'TextEdit', 'ID_BDCARTO': 'TextEdit', 'DépARTEMEN': 'TextEdit', 'DépARTEM0': 'TextEdit', 'DépARTEM1': 'TextEdit', 'ORDONNée_D': 'TextEdit', });
lyr_parcelles652022Nestesud_3.set('fieldImages', {'Zone': 'TextEdit', 'Culture': 'TextEdit', 'Commune': 'TextEdit', });
lyr_Parcellesref2022ETE_4.set('fieldImages', {'Zone': 'TextEdit', 'Parcelle': 'Range', 'COMMUNE': 'TextEdit', 'Type de so': '', 'Culture': 'TextEdit', });
lyr_zonagesbulletins32et65_1.set('fieldLabels', {'nom secteu': 'header label', 'bulletin': 'no label', });
lyr_Departement_32_2.set('fieldLabels', {'RégION': 'no label', 'ID_BDCARTO': 'no label', 'DépARTEMEN': 'no label', 'DépARTEM0': 'no label', 'DépARTEM1': 'no label', 'ORDONNée_D': 'no label', });
lyr_parcelles652022Nestesud_3.set('fieldLabels', {'Zone': 'inline label', 'Culture': 'inline label', 'Commune': 'header label', });
lyr_Parcellesref2022ETE_4.set('fieldLabels', {'Zone': 'inline label', 'Parcelle': 'inline label', 'COMMUNE': 'inline label', 'Type de so': 'inline label', 'Culture': 'inline label', });
lyr_Parcellesref2022ETE_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});