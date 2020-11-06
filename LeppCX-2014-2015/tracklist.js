$(document).ready(function() {

  // Starting position: Sello
  var startLat = 60.217;
  var startLon = 24.813;
  var zoom = 13;
  var tracks = [
    { url: "5889495.gpx", name: "10.9. Suunta 250: cx-Lepuski-250-Vanttila-Gumböle-42km" },
    { url: "1821316.gpx", name: "17.9. Suunta 270: cx-Lepuski-270-Loojärvi-Gumböle-49km", color: "blue" },
    { url: "6036574.gpx", name: "24.9. Suunta 290: cx-Lepuski-290-Sorlampi-Nupuri-44km", width: 4 },
    { url: "6107222.gpx", name: "1.10. Suunta 310: cx-Lepuski-310-Karhusuo-Pirttimäki-40km", color: "black", width: 3 },
    { url: "6192325.gpx", name: "8.10. Suunta 315: cx-Lepuski-315-Bodom-Sorvalampi-42km" },
    { url: "6187809.gpx", name: "15.10. Suunta 320: cx-Lepuski-320-Velskola-Myllymajalampi-56km" },
    { url: "6317296.gpx", name: "22.10. Suunta 340: cx-Lepuski-340-Kalajärvi-Petikko-41km" },
    { url: "6365655.gpx", name: "27.10. Suunta 0: cx-Lepuski-000-Vestra-Petas-41km" },
    { url: "6379620.gpx", name: "5.11. Suunta 5: cx-Lepuski-005-Petas-Vantaanpuisto-34km" },
    { url: "6454601.gpx", name: "12.11. Suunta 10: cx-Lepuski-010-Kivistö-Silvola-41km" },
    { url: "6492677.gpx", name: "19.11. Suunta 20: cx-Lepuski-020-Seutula-Ylästö-45km" },
    { url: "6516917.gpx", name: "26.11. Suunta 30: cx-Lepuski-030-Myllykylä-Ruskeasanta-46km" },
    { url: "6516767.gpx", name: "3.12. Suunta 45: cx-Lepuski-045-Ylästö-Ruskeasanta-45km" },
    { url: "6565052.gpx", name: "10.12. Suunta 50: cx-Lepuski-050-Pitkäkoski-Tikkurila-40km" },
    { url: "6640415.gpx", name: "17.12. Suunta 60: cx-Lepuski-060-Puistola-Tapanila-40km" },
    { url: "6712981.gpx", name: "31.12. sama (talviversio): cx-Lepuski-060-Puistola-Tapanila-w-40km" },
    { url: "6656573.gpx", name: "7.1. Suunta 75: cx-Lepuski-075-Tapanila-Tattarisuo-39km" },
    { url: "6836455.gpx", name: "14.1. Suunta 85: cx-Lepuski-085-Pukinmäki-Kontula-41km" },
    { url: "6882372.gpx", name: "28.1. Suunta 90: cx-Lepuski-090-Pakila-Puotinharju-42km" },
    { url: "6909251.gpx", name: "4.2. Suunta 100: cx-Lepuski-100-Oulunkylä-Herttoniemi-36km" },
    { url: "6947235.gpx", name: "11.2. Suunta 115: cx-Lepuski-115-Kumpula-Katajanokka-43km" },
    { url: "6996340.gpx", name: "18.2. Suunta 135: cx-Lepuski-135-Lauttasaari-Töölönlahti-38km" },
    { url: "7025150.gpx", name: "25.2. Suunta 150: cx-Lepuski-150-Munkkiniemi-Lauttasaari-36km" },
    { url: "7050996.gpx", name: "4.3. Suunta 210: cx-Lepuski-210-Westend-Hanikka-41km" },
    { url: "7084689.gpx", name: "11.3. Suunta 215: cx-Lepuski-215-Tapiola-Soukka-39km" },
    { url: "7085514.gpx", name: "18.3. Suunta 218: cx-Lepuski-218-Soukka-Suurpelto-38km" },
    { url: "7229611.gpx", name: "25.3. Suunta 228: cx-Lepuski-228-Olari-Espoonlahti-38km" },
    { url: "7240906.gpx", name: "1.4. Suunta 233: cx-Lepuski-233-Eestinkallio-Kivenlahti-38km" },
    { url: "7084517.gpx", name: "8.4. Suunta 245: cx-Lepuski-240-Mankkaa-Kurttila-40km" },
  ];

  showTracks(startLat, startLon, zoom, tracks);

});
