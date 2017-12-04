({
	doInit : function(component, event, helper) {
        component.set('v.popupStore', {});
        helper.loadStationData(component, event, helper);
        helper.loadPositionData(component, event, helper);
	},
    
    onScriptsLoaded : function(component, event, helper) {
        var m = L.map(component.find('map').getElement(), {zoomControl: true,zoom:1,zoomAnimation:false,fadeAnimation:true,markerZoomAnimation:true}).setView([39.9537069, -75.1649369], 11);
        L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
    		attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>'
        }).addTo(m);
        component.set('v.map', m);
        helper.checkLoadingProgress(component, event, helper);
    },
    
    doSelectEntity : function(component, event, helper) {
        var store = component.get('popupStore');
        var popup = store.get(event.getParam('entity'));
        
        if (popup) {
            popup.openPopup();
        }
    }
})