var elm   = document.getElementById('elm'),
    prog  = document.getElementById('progress');

var myScrollWatcher = scrollWatcher(elm, {
    onEnter: function(self) {
      elm.classList.add('alive');
    },
    onActive: function(self) {
      elm.classList.add('active');
    },
    onFocus: function(self) {
      elm.setAttribute('data-alive-progress', Math.floor(self.aliveProgress * 100));
      elm.setAttribute('data-active-progress', Math.floor(self.activeProgress * 100));

      prog.style.width = elm.getAttribute('data-active-progress') + '%';
    },
    onInactive: function(self) {
      elm.classList.remove('active');
    },
    onLeave: function(self) {
      elm.classList.remove('alive');
    }
});

var bh = $(document);
bh.on('scroll', function() {

});