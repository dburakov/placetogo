google.charts.load('upcoming', {'packages':['geochart']});
google.charts.setOnLoadCallback(drawPlacesMap);

function drawPlacesMap() {
    var data = google.visualization.arrayToDataTable([
        ["Country", "Region", "Rating"], 
        ["India", "Jodhpur (Blue City): Rajasthan, India", 51],
        ["Tasmania", "Painted Cliffs: Maria Island, Tasmania", 52],
        ["Vietnam", "Halong Bay: Vietnam", 53],
        ["Hawaii", "Na'Pali Coast: Kauai, Hawaii", 54],
        ["California", "Redwood National Park: California", 55],
        ["Cambodia", "Angkor Wat: Siem Reap, Cambodia", 56],
        ["China", "Wulingyuan Scenic Area: Zhangjiajie, China", 57],
        ["Chile", "Torres del Paine National Park: Patagonia, Chile", 58],
        ["Turkey", "Pamukkale: Denizli, Turkey", 59],
        ["Colombia", "Valle de Cocora: Quindío, Colombia", 60],
        ["Canada", "Lake Louise: Alberta, Canada", 61],
        ["New Zealand", "Slope Point: South Island, New Zealand", 62],
        ["Greece", "Oia: Santorini, Greece", 63],
        ["France", "Lavender fields: Provence, France", 64],
        ["Myanmar", "Bagan (formerly Pagan): Myanmar", 65],
        ["Yemen", "Socotra, Yemen", 66],
        ["Czech Republic", "Moravian Fields: Czech Republic", 67],
        ["Australia", "The Great Barrier Reef: Queensland, Australia", 68],
        ["Peru", "Machu Picchu: Peru", 69],
        ["Holland: The Netherlands", "Keukenhof Park, Holland: The Netherlands", 70],
        ["Jordan", "Petra, Jordan", 71],
        ["Ecuador", "Galápagos Islands: Ecuador", 72],
        ["Uzbekistan", "Samarkand, Uzbekistan", 73],
        ["Indonesia", "Bromo Volcano: East Java, Indonesia", 74],
        ["Scotland", "Isle of Skye: Scotland", 75],
        ["Alaska", "Denali (formerly Mt. McKinley): Alaska", 76],
        ["China", "Great Wall of China: Beijing, China", 77],
        ["Arctic", "The Arctic Circle", 78],
        ["USA", "Grand Canyon National Park: Arizona, USA", 79],
        ["Tanzania", "Serengeti National Park: Tanzania", 80],
        ["Wyoming", "Grand Prismatic Spring: ... National Park, Wyoming", 81],
        ["Japan", "Arashiyama: Kyoto, Japan", 82],
        ["Brazil", "Rio de Janeiro, Brazil", 83],
        ["Botswana", "Okavango Delta: Botswana", 84],
        ["Egypt", "Pyramids of Giza: El Giza, Egypt", 85],
        ["Ireland", "Cliffs of Moher, Ireland", 86],
        ["Utah", "Bryce Canyon: Bryce, Utah", 87],
        ["UAE", "Sheikh Zayed Grand Mosque: Abu Dhabi, UAE", 88],
        ["India", "Kolukkumalai Tea Estate: Munnar, India", 89],
        ["New Zealand", "Milford Sound: New Zealand", 90],
        ["Namibia", "Namib Desert: Namibia", 91],
        ["Wales", "Brecon Beacons National Park: Wales", 92],
        ["Japan", "Ashikaga Flower Park: Ashikaga, Japan", 93],
        ["Italy", "Venice, Italy", 94],
        ["Philippines", "Palawan Island: The Philippines", 95],
        ["Iceland", "Snæfellsjökull: Iceland", 96],
        ["Portugal", "Benagil Sea Cave: Algarve, Portugal", 97],
        ["Vietnam", "Mù Cang Chải: Vietnam", 98],
        ["Bolivia", "Salar de Uyuni: Daniel Campos, Bolivia", 99],
        ["Turkey", "Cappadocia, Turkey", 100]
    ]);

    var options = {};
    var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));
    chart.draw(data, options);
}

function drawCitiesMap() {
    var data = google.visualization.arrayToDataTable([
         ["Country", "City", "Rating"], 
         ["Germany", "Cologne, Germany", 61],
         ["Canada", "Montreal, Canada", 62],
         ["Germany", "Munich, Germany", 63],
         ["Canada", "Toronto, Canada", 64],
         ["South Africa", "Cape Town, South Africa", 65],
         ["South Korea", "Seoul, South Korea", 66],
         ["Ireland", "Dublin, Ireland", 67],
         ["Portugal", "Lisbon, Portugal", 68],
         ["Czech Republic", "Prague, Czech Republic", 69],
         ["Denmark", "Copenhagen, Denmark", 70],
         ["Scotland", "Edinburgh, Scotland", 71],
         ["Switzerland", "Zurich, Switzerland", 72],
         ["Israel", "Jerusalem, Israel", 73],
         ["Spain", "Madrid, Spain", 74],
         ["Belgium", "Bruges, Belgium", 75],
         ["Netherlands", "Amsterdam, Netherlands", 76],
         ["Turkey", "Istanbul, Turkey", 77],
         ["China", "Hong Kong, China", 78],
         ["Hungary", "Budapest, Hungary", 79],
         ["Sweden", "Stockholm, Sweden", 80],
         ["Italy", "Venice, Italy", 81],
         ["Germany", "Nuremberg, Germany", 82],
         ["Canada", "Quebec City, Canada", 83],
         ["Israel", "Tel Aviv, Israel", 84],
         ["Singapore", "Singapore, Singapore", 85],
         ["Italy", "Rome, Italy", 86],
         ["Australia", "Melbourne, Australia", 87],
         ["England", "London, England", 88],
         ["Australia", "Sydney, Australia", 89],
         ["France", "Paris, France", 90],
         ["Austria", "Vienna, Austria", 91],
         ["Spain", "Barcelona, Spain", 92],
         ["Austria", "Salzburg, Austria", 93],
         ["Canada", "Victoria, Canada", 94],
         ["Canada", "Vancouver, Canada", 95],
         ["Mexico", "San Miguel de Allende, Mexico", 96],
         ["Switzerland", "Lucerne, Switzerland", 97],
         ["Italy", "Florence, Italy", 98],
         ["Japan", "Kyoto, Japan", 99],
         ["Japan", "Tokyo, Japan", 100]
    ]);

    var options = {};
    var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));
    chart.draw(data, options);
}