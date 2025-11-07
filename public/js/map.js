var map = L.map("map").setView([23.90, 84.36], 13);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

var marker = L.marker([23.90, 84.36]).addTo(map);

var circle = L.circle([23.90, 84.36], {
  color: "red",
  fillColor: "#f03",
  fillOpacity: 0.5,
  radius: 500,
}).addTo(map);

marker.bindPopup("Exact location provided after booking.").openPopup();
