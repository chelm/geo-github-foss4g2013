deck=bespoke.horizontal.from('article', {
  bullets: 'li, .bullet',
  hash: true,
  state: true
});

slideConfig = [
  { img: 'images/chelm_github.jpeg', credit: '', css:false},
  { img: 'images/octoglobe.png', credit: 'http://octodex.github.com/images/benevocats.png', css:false},
  { img: 'http://t1.gstatic.com/images?q=tbn:ANd9GcQMUBG3I_aUKvEWZ3msVn9Ppiuf69OIIUplx2XvYVWAMUxqiV29', credit: '', css: false},
  { img: 'images/dork.jpg', credit: 'http://www.flickr.com/photos/aaronvandike/3221087856', css: false},
  { img: 'images/messy.jpg', credit: 'http://www.flickr.com/photos/aaronvandike/3229879512', css: {background:'none', textShadow: '2px 0px #555'}},
  { img: 'images/jack.jpg', credit: '', css: {background:'none', color:'#fff', textShadow: '2px 0px #554'}},
  { img: 'images/ideas.jpg', credit: 'http://www.flickr.com/photos/jdhancock/3434824859', css: {background:'none', textShadow: '2px 2px 10px #555', color: '#eee'}},
  { img: '', credit: '', css: {background:'none'}},
  { img: 'images/banana.jpg', credit: 'http://www.flickr.com/photos/jdhancock/4687393054', css: {background:'none', textShadow: '2px 0px #DDD'}},
  { img: 'images/ms_k.jpeg', credit: 'Ms. Krabappel', css: false},
  { img: '', credit: '', css: {background:'none'}},
  { img: '', credit: '', css: {background:'none'}},
  { img: 'images/rates.jpg', credit: 'http://www.flickr.com/photos/jdhancock/7681105898', css: false},
  { img: '', credit: '', css: {background:'none'}},
  { img: 'images/world_storm.jpg', credit: 'http://www.flickr.com/photos/jdhancock/3578558776', css: {color: '#fff',textShadow: '5px 5px 10px #055',  background:'none', width: '48%', top: '58%'}},
  { img: '', credit: '', css: {background:'none'}},
  { img: '', credit: '', css: {background:'none'}},
  { img: 'images/plane.jpg', credit: 'http://www.flickr.com/photos/aaronvandike/2890984258', css: {background:'none', color: '#eee', textShadow: '2px 2px 10px #f50' }},
  { img: 'images/grunt-geo.jpeg', credit: 'grunt', css: {background:'none', textShadow: '2px 2px 1px #555', color:'#fff'}},
  { img: 'images/open.jpeg', credit: 'esri2open', css: {background:'none', textShadow: '2px 2px 1px #FFF'}},
  { img: 'images/cmetcalf.jpeg', credit: 'esri2open2gist', css: {background:'none'}},
  { img: '', credit: 'qgis2gist', css: {background:'none'}},
  { img: 'images/geojsonio2.png', credit: 'geojson.io', css: {background:'none', color: '#fff', textShadow: '2px 2px 10px #555'}},
  { img: '', credit: 'mapjack', css: {background:'none'}},
  { img: 'images/wonder_woman.jpg', credit: 'http://www.flickr.com/photos/jdhancock/7038452711', css: {background:'none', color: '#fff',textShadow: '5px 5px 10px  #00f'}},
  { img: '', credit: 'geohub', css: {background:'none'}},
  { img: 'images/colors.jpg', credit: 'http://www.flickr.com/photos/jdhancock/5177358991', css: {background:'none'}},
  { img: '', credit: 'koop', css: {background:'none'}},
  { img: '', credit: 'koop', css: {background:'none'}},
  { img: 'images/cat.jpg', credit: 'http://www.flickr.com/photos/aaronvandike/2660485296', css: {background:'none', color: '#fff'}},
  { img: '', credit: 'vector tiles', css: {background:'none'}},
  { img: '', credit: 'vector tiles', css: {background:'none'}},
  { img: '', credit: 'vector tiles', css: {background:'none'}},
  { img: '', credit: 'vector tiles', css: {background:'none'}},
  { img: '', credit: 'vector tiles', css: {background:'none'}},
  { img: '', credit: 'vector tiles', css: {background:'none'}},
  { img: '', credit: 'vector tiles', css: {background:'none'}},
  { img: '', credit: 'vector tiles', css: {background:'none'}},
  { img: 'images/cat.jpg', credit: 'http://www.flickr.com/photos/aaronvandike/2660485296', css: {background:'none', color: '#fff'}}
] 

function update(e){
  var config = slideConfig[ e.index ];

  if (e.slide && config.css){
    var slide = $(e.slide); 
    slide.css(config.css);
  }
  
  var el = $('.bespoke-parent');
  if (config.img) {
    el.css("background", 'url('+config.img+')' );
  } else {
    el.css("background", '');
  }

  if ( config.credit ){
    $('.credit').html(config.credit);
  } else {
    $('.credit').html('');
  }
}

//deck.on('next', update);
//deck.on('prev', update);
deck.on('activate', update);

update({index:0});
