// Algebra 1 Item Bank — data loader
// Each items_unitXX.js sets window.ITEMS_UNITXX
// This merges them all into window.ITEMS before the app initialises
(function(){
  var keys = ['UNIT0A','UNIT0B','UNIT1','UNIT2','UNIT3',
              'UNIT4','UNIT5','UNIT6','UNIT7','UNIT8','OTHER'];
  window.ITEMS = [];
  keys.forEach(function(k){
    var arr = window['ITEMS_'+k];
    if(Array.isArray(arr)) window.ITEMS = window.ITEMS.concat(arr);
  });
})();
