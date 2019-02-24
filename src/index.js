
module.exports = function makeExchange(currency) {
    const costs = {
        "H": 50,
        "Q": 25,
        "D": 10,
        "N": 5,
        "P": 1
    };
    let result = {};
    if (currency > 10000) {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    } else if(currency<1){
        return {};
    }
    else {
        if (Math.floor(currency / costs.H) !== 0) {
            const h = Math.floor(currency / costs.H);
            result["H"] = h;
            currency-=h*costs.H;

        }
        if (Math.floor(currency / costs.Q) !== 0) {
            const q = Math.floor(currency / costs.Q);
            result["Q"] = q;
            currency-=q*costs.Q;
        }
        if (Math.floor(currency / costs.D) !== 0) {
            const d = Math.floor(currency / costs.D);
            result["D"] = d;
            currency-=d*costs.D;
        }
        if (Math.floor(currency / costs.N) !== 0) {
            const n = Math.floor(currency / costs.N);
            result["N"] = n;
            currency-=n*costs.N;
        }
        if (Math.floor(currency / costs.P) !== 0) {
            const p = Math.floor(currency / costs.P);
            result["P"] = p;
        }
        return result;
    }
}
