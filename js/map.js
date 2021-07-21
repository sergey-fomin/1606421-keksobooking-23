import { mapFilter } from './filters.js';
import { setPinAddress } from './forms-control.js';
import { placeTypeChangeHandler } from './ad-form-validation.js';
import { generateOfferPopup } from './generate-offer.js';

let allOffersData = [];
const MapOptions = {
  ZOOM: 11,
  DEFAULT_COORDS: {
    lat: 35.6895,
    lng: 139.692,
  },
  TILE: {
    URL: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    ATTR: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
  MARKER: {
    ICON_PATH: './img/',
    MAIN: {
      ICON_NAME: 'main-pin.svg',
      ICON_SIZE: [52, 52],
      ICON_ANCHOR: [26, 52],
    },
    DEFAULT: {
      ICON_NAME: 'pin.svg',
      ICON_SIZE: [40, 40],
      ICON_ANCHOR: [20, 40],
    },
  },
};

const refreshOffersData = (newData) => {
  allOffersData = newData.slice();
};

const map = L.map('map-canvas');

const loadMap = async () => {
  map
    .on('load', () => {
      placeTypeChangeHandler();
      setPinAddress(MapOptions.DEFAULT_COORDS);
    })
    .setView(
      {
        lat: MapOptions.DEFAULT_COORDS.lat,
        lng: MapOptions.DEFAULT_COORDS.lng,
      },
      MapOptions.ZOOM,
    );
};

L.tileLayer(MapOptions.TILE.URL, {
  attribution: MapOptions.TILE.ATTR,
}).addTo(map);

const mainMarkerIcon = L.icon({
  iconUrl: `${MapOptions.MARKER.ICON_PATH}${MapOptions.MARKER.MAIN.ICON_NAME}`,
  iconSize: MapOptions.MARKER.MAIN.ICON_SIZE,
  iconAnchor: MapOptions.MARKER.MAIN.ICON_ANCHOR,
});
const mainMarker = L.marker(
  {
    lat: MapOptions.DEFAULT_COORDS.lat,
    lng: MapOptions.DEFAULT_COORDS.lng,
  },
  {
    icon: mainMarkerIcon,
    draggable: true,
  },
);

mainMarker.addTo(map);
mainMarker.on('move', (evt) => {
  setPinAddress(evt.target.getLatLng());
});

const markerGroup = L.layerGroup().addTo(map);

const createMarker = (currentOffer) => {
  const { lat, lng } = currentOffer.location;
  const icon = L.icon({
    iconUrl: `${MapOptions.MARKER.ICON_PATH}${MapOptions.MARKER.DEFAULT.ICON_NAME}`,
    iconSize: MapOptions.MARKER.DEFAULT.ICON_SIZE,
    iconAnchor: MapOptions.MARKER.DEFAULT.ICON_ANCHOR,
  });

  const marker = L.marker(
    {
      lat,
      lng,
    },
    {
      icon,
    },
  );
  marker.addTo(markerGroup).bindPopup(generateOfferPopup(currentOffer));
};

const createMarkersGroup = (similarOffers) => {
  markerGroup.clearLayers();
  const filteredOffers = mapFilter(similarOffers);
  filteredOffers.forEach((currentOffer) => {
    createMarker(currentOffer);
  });
};

const resetMap = () => {
  map.setView(
    {
      lat: MapOptions.DEFAULT_COORDS.lat,
      lng: MapOptions.DEFAULT_COORDS.lng,
    },
    MapOptions.ZOOM,
  );
  mainMarker.setLatLng([
    MapOptions.DEFAULT_COORDS.lat,
    MapOptions.DEFAULT_COORDS.lng,
  ]);
  setPinAddress(MapOptions.DEFAULT_COORDS);
  createMarkersGroup(allOffersData);
};

export { refreshOffersData, resetMap, loadMap, createMarkersGroup };
