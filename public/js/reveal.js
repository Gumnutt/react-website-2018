window.sr = ScrollReveal();

var revealer = {
  origin   : "left",
  distance : "0",
  duration : 1500,
  scale    : 1,
  reset    : true,
  delay    : 100,
}

sr.reveal('.title', revealer);
sr.reveal('.left-content', {
  beforeReveal: function(el) {
    $('#project-1').addClass('blockRevealer');
    $('#project-1').removeClass('revealer-hidden');
  },
  afterReset: function(el){
    $('#project-1').addClass('blockRevealer revealer-hidden');
  },
  origin   : "left",
  distance : "0",
  duration : 1500,
  scale    : 1,
  reset    : true,
  delay    : 100,
});
sr.reveal('.right-content', {
  beforeReveal: function(el) {
    $('#project-2').addClass('blockRevealer');
    $('#project-2').removeClass('revealer-hidden');
  },
  afterReset: function(el){
    $('#project-2').addClass('blockRevealer revealer-hidden');
  },
  origin   : "left",
  distance : "0",
  duration : 1500,
  scale    : 1,
  reset    : true,
  delay    : 100,
});