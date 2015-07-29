var youtubePlayerToggleMute = function( player ) {
    var isMuted = player.isMuted(),
        from = to = 0,
        duration = 350;

    if(!jQuery) return false;

    if (isMuted) { // Lets unMute
        from = 0;
        to   = 100;
    } else { // Lets Mute
        from = 100;
        to   = 0;
    }

    $({volume: from}).animate({volume: to}, {
        duration: duration,
        start: function () {
            if (!from) player.unMute();
        },
        step: function () {
            player.setVolume(this.volume);
        },
        complete: function () {
            if (from) player.mute();
        }
    });
}