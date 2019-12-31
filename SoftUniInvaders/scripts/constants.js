(function(scope) {
    const SIZES = {
        PLAYER: {
            WIDTH: 160,
            HEIGHT: 140,
            SPEED: 15,
        },
        BULLET: {
            WIDTH: 30,
            HEIGHT: 50,
            SPEED: -5,
        },

        ENEMY: {
            WIDTH: 50,
            HEIGHT: 50,
            SPEED: 5,
        }
    };

    const KEY_CODES = {
        LEFT: 37,
        RIGHT: 39,
        FIRE: 32,
    };

    scope.SIZES = SIZES;
    scope.KEY_CODES = KEY_CODES;
}(window));
