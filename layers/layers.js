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
var format_parcellesderfrences2020avecculturecopier_2 = new ol.format.GeoJSON();
var features_parcellesderfrences2020avecculturecopier_2 = format_parcellesderfrences2020avecculturecopier_2.readFeatures(json_parcellesderfrences2020avecculturecopier_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_parcellesderfrences2020avecculturecopier_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_parcellesderfrences2020avecculturecopier_2.addFeatures(features_parcellesderfrences2020avecculturecopier_2);
var lyr_parcellesderfrences2020avecculturecopier_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_parcellesderfrences2020avecculturecopier_2, 
                style: style_parcellesderfrences2020avecculturecopier_2,
                interactive: false,
                title: 'parcelles de références 2020 avec culture copier'
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

lyr_OpenStreetMap_0.setVisible(true);lyr_zonagesbulletinsgers2020_1.setVisible(true);lyr_parcellesderfrences2020avecculturecopier_2.setVisible(true);lyr_CA32_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_zonagesbulletinsgers2020_1,lyr_parcellesderfrences2020avecculturecopier_2,lyr_CA32_3];
lyr_zonagesbulletinsgers2020_1.set('fieldAliases', {'nom secteu': 'nom secteu', 'bulletin': 'bulletin', });
lyr_parcellesderfrences2020avecculturecopier_2.set('fieldAliases', {'RégION': 'RégION', 'NOM_RégION': 'NOM_RégION', 'DépARTEMEN': 'DépARTEMEN', 'DépARTEM0': 'DépARTEM0', 'ARRONDISSE': 'ARRONDISSE', 'CANTON': 'CANTON', 'ID_BDCARTO': 'ID_BDCARTO', 'COMMUNE': 'COMMUNE', 'COMMUNE0': 'COMMUNE0', 'STATUT': 'STATUT', 'COMMUNE1': 'COMMUNE1', 'ORDONNée_C': 'ORDONNée_C', 'SUPERFICIE': 'SUPERFICIE', 'POPULATION': 'POPULATION', 'ComCom': 'ComCom', 'Pays': 'Pays', 'Nb_hab': 'Nb_hab', 'Ratio_PAC': 'Ratio_PAC', 'Pourc_bio': 'Pourc_bio', 'SURFACE': 'SURFACE', 'culture': 'culture', 'technicien': 'technicien', 'zonage bul': 'zonage bul', });
lyr_CA32_3.set('fieldAliases', {'retour': 'retour', });
lyr_zonagesbulletinsgers2020_1.set('fieldImages', {'nom secteu': 'TextEdit', 'bulletin': 'TextEdit', });
lyr_parcellesderfrences2020avecculturecopier_2.set('fieldImages', {'RégION': 'TextEdit', 'NOM_RégION': 'TextEdit', 'DépARTEMEN': 'TextEdit', 'DépARTEM0': 'TextEdit', 'ARRONDISSE': 'TextEdit', 'CANTON': 'TextEdit', 'ID_BDCARTO': 'TextEdit', 'COMMUNE': 'TextEdit', 'COMMUNE0': 'TextEdit', 'STATUT': 'TextEdit', 'COMMUNE1': 'TextEdit', 'ORDONNée_C': 'TextEdit', 'SUPERFICIE': 'TextEdit', 'POPULATION': 'TextEdit', 'ComCom': 'TextEdit', 'Pays': 'TextEdit', 'Nb_hab': 'TextEdit', 'Ratio_PAC': 'TextEdit', 'Pourc_bio': 'TextEdit', 'SURFACE': 'TextEdit', 'culture': 'TextEdit', 'technicien': 'TextEdit', 'zonage bul': 'TextEdit', });
lyr_CA32_3.set('fieldImages', {'retour': '', });
lyr_zonagesbulletinsgers2020_1.set('fieldLabels', {'nom secteu': 'no label', 'bulletin': 'no label', });
lyr_parcellesderfrences2020avecculturecopier_2.set('fieldLabels', {'RégION': 'no label', 'NOM_RégION': 'no label', 'DépARTEMEN': 'no label', 'DépARTEM0': 'no label', 'ARRONDISSE': 'no label', 'CANTON': 'no label', 'ID_BDCARTO': 'no label', 'COMMUNE': 'no label', 'COMMUNE0': 'no label', 'STATUT': 'no label', 'COMMUNE1': 'no label', 'ORDONNée_C': 'no label', 'SUPERFICIE': 'no label', 'POPULATION': 'no label', 'ComCom': 'no label', 'Pays': 'no label', 'Nb_hab': 'no label', 'Ratio_PAC': 'no label', 'Pourc_bio': 'no label', 'SURFACE': 'no label', 'culture': 'no label', 'technicien': 'no label', 'zonage bul': 'no label', });
lyr_CA32_3.set('fieldLabels', {'retour': 'header label', });
lyr_CA32_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});