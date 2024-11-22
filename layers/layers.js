var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_CorredorVlezSarsfieldnorte_1 = new ol.format.GeoJSON();
var features_CorredorVlezSarsfieldnorte_1 = format_CorredorVlezSarsfieldnorte_1.readFeatures(json_CorredorVlezSarsfieldnorte_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CorredorVlezSarsfieldnorte_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CorredorVlezSarsfieldnorte_1.addFeatures(features_CorredorVlezSarsfieldnorte_1);
var lyr_CorredorVlezSarsfieldnorte_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CorredorVlezSarsfieldnorte_1, 
                style: style_CorredorVlezSarsfieldnorte_1,
                popuplayertitle: "Corredor Vélez Sarsfield (norte)",
                interactive: true,
    title: 'Corredor Vélez Sarsfield (norte)<br />\
    <img src="styles/legend/CorredorVlezSarsfieldnorte_1_0.png" /> Área CLV Av. Vélez Sarsfield - Caseros (norte)<br />\
    <img src="styles/legend/CorredorVlezSarsfieldnorte_1_1.png" /> Área CLV Av. Vélez Sarsfield 1940 (norte)<br />'
        });
var format_EventosWaze_2 = new ol.format.GeoJSON();
var features_EventosWaze_2 = format_EventosWaze_2.readFeatures(json_EventosWaze_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EventosWaze_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EventosWaze_2.addFeatures(features_EventosWaze_2);
var lyr_EventosWaze_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EventosWaze_2, 
                style: style_EventosWaze_2,
                popuplayertitle: "Eventos Waze",
                interactive: true,
                title: '<img src="styles/legend/EventosWaze_2.png" /> Eventos Waze'
            });

lyr_OSMStandard_0.setVisible(true);lyr_CorredorVlezSarsfieldnorte_1.setVisible(true);lyr_EventosWaze_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_CorredorVlezSarsfieldnorte_1,lyr_EventosWaze_2];
lyr_CorredorVlezSarsfieldnorte_1.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_EventosWaze_2.set('fieldAliases', {'id': 'id', 'type': 'type', 'subtype': 'subtype', 'reportrating': 'reportrating', });
lyr_CorredorVlezSarsfieldnorte_1.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_EventosWaze_2.set('fieldImages', {'id': '', 'type': '', 'subtype': '', 'reportrating': '', });
lyr_CorredorVlezSarsfieldnorte_1.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_EventosWaze_2.set('fieldLabels', {'id': 'no label', 'type': 'no label', 'subtype': 'no label', 'reportrating': 'no label', });
lyr_EventosWaze_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});