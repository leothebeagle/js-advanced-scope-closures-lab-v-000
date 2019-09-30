function produceDrivingRange(blockRange) {
    return function(start, end) {
        let distanceRequested = Math.abs(parseInt(end) - parseInt(start));

        if(distanceRequested > Math.abs(blockRange)) {
            let excess = distanceRequested - blockRange;
            return `${excess} blocks out of range`;
        };
        if(distanceRequested < Math.abs(blockRange)) {
            let excess = blockRange - distanceRequested;
            return `within range by ${excess}`
        };
    };
};

function produceTipCalculator(percentage) {
    return function(fare) {
        return percentage * fare;
    };
};

function createDriver() {
    let driverId = 0;

    return class {
        constructor(name) {
            this.name = name;
            this.id = ++driverId;
        };

    };
};