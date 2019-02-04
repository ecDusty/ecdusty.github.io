"use strict";var _createClass=function(){function o(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,r){return t&&o(e.prototype,t),r&&o(e,r),e}}();function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var model={},octo={},view={},gMap={},G_Model=function(){function r(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"AIzaSyAaYL795gcBKEjS2Ud2Rb12A7hebgrT-Fc",t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:document.getElementById("map");_classCallCheck(this,r),this.API=e,this.testMarker={lat:22.2485,lng:114.1542},this.map={},this.mStyles=[[{elementType:"geometry",stylers:[{color:"#ebe3cd"}]},{elementType:"labels",stylers:[{weight:4}]},{elementType:"labels.text.fill",stylers:[{color:"#523735"}]},{elementType:"labels.text.stroke",stylers:[{color:"#f5f1e6"}]},{featureType:"administrative",elementType:"geometry.stroke",stylers:[{color:"#c9b2a6"}]},{featureType:"administrative.land_parcel",elementType:"geometry.stroke",stylers:[{color:"#dcd2be"}]},{featureType:"administrative.land_parcel",elementType:"labels.text.fill",stylers:[{color:"#ae9e90"}]},{featureType:"landscape.natural",elementType:"geometry",stylers:[{color:"#dfd2ae"}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#dfd2ae"}]},{featureType:"poi",elementType:"labels",stylers:[{weight:2}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{color:"#93817c"}]},{featureType:"poi.park",elementType:"geometry.fill",stylers:[{color:"#a5b076"}]},{featureType:"poi.park",elementType:"labels.text.fill",stylers:[{color:"#447530"}]},{featureType:"road",elementType:"geometry",stylers:[{color:"#f5f1e6"}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#fdfcf8"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#f8c967"}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#e9bc62"}]},{featureType:"road.highway.controlled_access",elementType:"geometry",stylers:[{color:"#e98d58"}]},{featureType:"road.highway.controlled_access",elementType:"geometry.stroke",stylers:[{color:"#db8555"}]},{featureType:"road.local",elementType:"labels.text.fill",stylers:[{color:"#806b63"}]},{featureType:"transit.line",elementType:"geometry",stylers:[{color:"#dfd2ae"}]},{featureType:"transit.line",elementType:"labels.text.fill",stylers:[{color:"#8f7d77"}]},{featureType:"transit.line",elementType:"labels.text.stroke",stylers:[{color:"#ebe3cd"}]},{featureType:"transit.station",elementType:"geometry",stylers:[{color:"#dfd2ae"}]},{featureType:"water",elementType:"geometry.fill",stylers:[{color:"#b9d3c2"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#92998d"}]}],[{featureType:"all",elementType:"all",stylers:[{visibility:"on"}]},{featureType:"all",elementType:"labels",stylers:[{visibility:"off"},{saturation:"-100"}]},{featureType:"all",elementType:"labels.text.fill",stylers:[{saturation:36},{color:"#000000"},{lightness:40},{visibility:"off"}]},{featureType:"all",elementType:"labels.text.stroke",stylers:[{visibility:"off"},{color:"#000000"},{lightness:16}]},{featureType:"all",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"administrative",elementType:"geometry.fill",stylers:[{color:"#000000"},{lightness:20}]},{featureType:"administrative",elementType:"geometry.stroke",stylers:[{color:"#000000"},{lightness:17},{weight:1.2}]},{featureType:"landscape",elementType:"geometry",stylers:[{color:"#000000"},{lightness:20}]},{featureType:"landscape",elementType:"geometry.fill",stylers:[{color:"#4d6059"}]},{featureType:"landscape",elementType:"geometry.stroke",stylers:[{color:"#4d6059"}]},{featureType:"landscape.natural",elementType:"geometry.fill",stylers:[{color:"#4d6059"}]},{featureType:"poi",elementType:"geometry",stylers:[{lightness:21}]},{featureType:"poi",elementType:"geometry.fill",stylers:[{color:"#4d6059"}]},{featureType:"poi",elementType:"geometry.stroke",stylers:[{color:"#4d6059"}]},{featureType:"road",elementType:"geometry",stylers:[{visibility:"on"},{color:"#7f8d89"}]},{featureType:"road",elementType:"geometry.fill",stylers:[{color:"#7f8d89"}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{color:"#7f8d89"},{lightness:17}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#7f8d89"},{lightness:29},{weight:.2}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#000000"},{lightness:18}]},{featureType:"road.arterial",elementType:"geometry.fill",stylers:[{color:"#7f8d89"}]},{featureType:"road.arterial",elementType:"geometry.stroke",stylers:[{color:"#7f8d89"}]},{featureType:"road.local",elementType:"geometry",stylers:[{color:"#000000"},{lightness:16}]},{featureType:"road.local",elementType:"geometry.fill",stylers:[{color:"#7f8d89"}]},{featureType:"road.local",elementType:"geometry.stroke",stylers:[{color:"#7f8d89"}]},{featureType:"transit",elementType:"geometry",stylers:[{color:"#000000"},{lightness:19}]},{featureType:"water",elementType:"all",stylers:[{color:"#2b3638"},{visibility:"on"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#2b3638"},{lightness:17}]},{featureType:"water",elementType:"geometry.fill",stylers:[{color:"#24282b"}]},{featureType:"water",elementType:"geometry.stroke",stylers:[{color:"#24282b"}]},{featureType:"water",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"labels.text",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"labels.text.stroke",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"labels.icon",stylers:[{visibility:"off"}]}]],this.mapEl=t,this.libraries=["places","geometry"],this.Places=null}return _createClass(r,[{key:"createMarker",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{position:{},title:"",icon:"",ani:""},t={map:null};return e.position?t.position=e.position:e.position,e.title?t.title=e.title:e.position,e.icon?t.icon=e.icon:e.icon,e.ani?t.animation=e.ani:t.animation=google.maps.Animation.DROP,new google.maps.Marker(t)}},{key:"textFindPlace",value:function(e,t){var r=this;return null==r.Places&&(r.Places=new google.maps.places.PlacesService(r.map)),r.Places.textSearch(e,t)}},{key:"newBounds",value:function(){return new google.maps.LatLngBounds}},{key:"loadMap",value:function(o){var l=["places","geometry"];return new Promise(function(e,t){var r=document.createElement("script");r.src="https://maps.googleapis.com/maps/api/js?libraries="+l.join()+"&key="+o,r.onload=function(){return e()},r.onerror=function(){return t(r.src)},document.head.appendChild(r)})}}]),r}();function FynViewModel(){var c=this;c.G=new G_Model;var m=c.G;c.intView=ko.observable(!1),c.title=ko.observable("FYN - Find your Neighborhood"),c.activeInterface=ko.observable(),c.error=ko.observable(!1),c.MenuVM=function(e,t){this.name=e,this.icon=t,this.alt=e+" icon",this.active=ko.observable(!1)},c.activeMenu=ko.observable("start"),c.menuRemoveActive=function(e){if(e.active())e.active(!1),c.activeMenu("start"),c.intView(!1);else{var t=!0,r=!1,o=void 0;try{for(var l,a=c.menuItems[Symbol.iterator]();!(t=(l=a.next()).done);t=!0){l.value.active(!1)}}catch(e){r=!0,o=e}finally{try{!t&&a.return&&a.return()}finally{if(r)throw o}}e.active(!0),c.intView(!0),c.activeMenu(e.name)}},c.menuItems=[new c.MenuVM("Homes","images/home.svg"),new c.MenuVM("Places","images/map.svg"),new c.MenuVM("Filters","images/shuffle.svg"),new c.MenuVM("Settings","images/cog.svg")],c.intViewClass=ko.pureComputed({read:function(){return c.activeMenu()+" "+(c.intView()?"active":"")}}),c.searchBounds=ko.observable("Hong Kong"),c.User={},c.User.location={lat:null,lng:null},c.getUserLocation=function(){navigator.geolocation&&navigator.geolocation.getCurrentPosition(c.geoSetUserLocation)},c.geoSetUserLocation=function(e){c.User.location.lat=e.coords.latitude,c.User.location.lat=e.coords.lattitude},c.googleSetUserLocation=function(e){c.User.location.lat=e.geometry.location.lat(),c.User.location.lng=e.geometry.location.lng()},c.clearMarkers=function(e){var t=!0,r=!1,o=void 0;try{for(var l,a=e()[Symbol.iterator]();!(t=(l=a.next()).done);t=!0){l.value.marker.setMap(null)}}catch(e){r=!0,o=e}finally{try{!t&&a.return&&a.return()}finally{if(r)throw o}}e.removeAll()},c.hideMarkers=function(e){var t=!0,r=!1,o=void 0;try{for(var l,a=e()[Symbol.iterator]();!(t=(l=a.next()).done);t=!0){l.value.marker.setMap(null)}}catch(e){r=!0,o=e}finally{try{!t&&a.return&&a.return()}finally{if(r)throw o}}},c.showMarkers=function(e){var t=m.newBounds(),r=!0,o=!1,l=void 0;try{for(var a,s=e()[Symbol.iterator]();!(r=(a=s.next()).done);r=!0){var n=a.value;n.marker.setMap(c.G.map),t.extend(n.position)}}catch(e){o=!0,l=e}finally{try{!r&&s.return&&s.return()}finally{if(o)throw l}}1==e().length?(m.map.setCenter(e()[0]?e()[0].position:m.testMarker),m.map.setZoom(e()[0]?15:12)):1<e().length&&m.map.fitBounds(t)},c.homeSavedItems=ko.observableArray([]),c.homeActiveItems=ko.observableArray([]),c.HomeItem=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{position:{},title:"",icon:"",iconActiveHover:"",search:"",address:"",ani:google.maps.Animation.DROP},t=this;this.search=e.search,this.saved=ko.observable(!1),this.position=e.position,this.address=ko.observable(e.address),this.title=e.title,this.defIcon="/images/home-point.png",this.iconActiveHover="/images/home-active.png",e.icon={url:t.defIcon,size:new google.maps.Size(35,45),origin:new google.maps.Point(0,0),anchor:new google.maps.Point(0,43)},this.activeIcon=ko.observable(t.defIcon),this.icon=e.icon,this.marker=c.G.createMarker(e),this.marker.addListener("mouseover",function(){t.icon.url=t.iconActiveHover,t.activeIcon(t.icon.url),this.setIcon(t.icon)}),this.marker.addListener("mouseout",function(){t.icon.url=t.defIcon,t.activeIcon(t.icon.url),this.setIcon(t.icon)}),this.marker.addListener("click",function(){}),this.setHome=function(){t.saved()?(t.defIcon="/images/home-point.png",c.homeSavedItems.remove(t),"show-list"==c.hSearch.subMenu()?t.marker.setMap(null):t.marker):(t.defIcon="/images/home-saved.png",c.homeSavedItems.push(t)),t.activeIcon(t.defIcon),t.saved(!t.saved()),t.icon.url=t.icon.url==t.activeIcon?t.icon.url:t.defIcon,t.marker.setIcon(t.icon)}},c.hSearch={name:ko.observable(""),search:ko.observable(""),subMenu:ko.observable("add-place"),setAdd:function(){c.hideMarkers(c.homeSavedItems),c.showMarkers(c.homeActiveItems),c.hSearch.subMenu("add-place")},setList:function(){c.hideMarkers(c.homeActiveItems),c.showMarkers(c.homeSavedItems),c.hSearch.subMenu("show-list")},searchMark:function(){c.clearMarkers(c.homeActiveItems),c.G.textFindPlace({query:""+c.hSearch.search(),fields:["photos","formatted_address","name","rating","opening_hours","geometry"]},c.hSearch.addMark)},addMark:function(e,t){if(t==google.maps.places.PlacesServiceStatus.OK){var r=0,o=m.newBounds(),l=function(t){o.extend(t.geometry.location),setTimeout(function(){var e=new c.HomeItem({position:t.geometry.location,title:t.name,address:t.formatted_address,search:c.hSearch.search()});"add-place"==c.hSearch.subMenu()?e.marker.setMap(c.G.map):e.marker.setMap(null),c.homeActiveItems.push(e)},150*r),r++},a=!0,s=!1,n=void 0;try{for(var i,y=e[Symbol.iterator]();!(a=(i=y.next()).done);a=!0){l(i.value)}}catch(e){s=!0,n=e}finally{try{!a&&y.return&&y.return()}finally{if(s)throw n}}e.length<=1?(m.map.setCenter(e[0].geometry.location),m.map.setZoom(15)):m.map.fitBounds(o)}else c.error(t)},clearSearch:function(){c.clearMarkers(c.homeActiveItems),c.hSearch.search("")}},c.initApp=function(){m.map=new google.maps.Map(m.mapEl,{center:m.testMarker,zoom:12,styles:m.mStyles[0],disableDefaultUI:!0}),gMap=m.map},c.G.loadMap(c.G.API).then(c.initApp).catch(function(e){alert("Looks like the first URL failed. Time to slowly walk away.\n"+e)})}var test=new FynViewModel;ko.applyBindings(test);