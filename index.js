const fetch = require('node-fetch');

class FiveM {
    constructor(ip) {
        if (!ip) throw Error('Provide a valid IP and port.');
        this.ip = ip;
    }
// basic information
    getHost() {
        return this.ip.split(':')[0];
    };

    getPort() {
        const split = this.ip.split(':')
        if (split.length >= 2) {
            return split[1];
        }
    };
// get server information (online, offline, players, etc)
    getServerStatus() {
        return new Promise((sendSuccess, sendError) => {
            fetch(`http://${this.ip}/info.json`).then((res) => res.json()).then((body) => {
                sendSuccess('online');
            }).catch((err) => {
                sendSuccess('offline')
            });
        });
    }

    getPlayers() {
        return new Promise((sendSuccess, sendError) => {
            fetch(`http://${this.ip}/players.json`).then((res) => res.json()).then((body) => {
                sendSuccess(body);
            }).catch((err) => {
                sendError(err);
            });
        });
    };

    getPlayersOnline() {
        return new Promise((sendSuccess, sendError) => {
            fetch(`http://${this.ip}/players.json`).then((res) => res.json()).then((body) => {
                sendSuccess(body.length);
            }).catch((err) => {
                sendError(err);
            });
        });
    };
// resources
    getServerResources() {
        return new Promise((sendSuccess, sendError) => {
            fetch(`http://${this.ip}/info.json`).then((res) => res.json()).then((body) => {
                sendSuccess(body.resources);
            }).catch((err) => {
                sendError(err);
            });
        });
    };
// info.json shit
    getGameName() {
        return new Promise((sendSuccess, sendError) => {
            fetch(`http://${this.ip}/info.json`).then((res) => res.json()).then((body) => {
                sendSuccess(body.vars.gamename);
            }).catch((err) => {
                sendError(err);
            });
        });
    };

    getOnesyncStatus() {
        return new Promise((sendSuccess, sendError) => {
            fetch(`http://${this.ip}/info.json`).then((res) => res.json()).then((body) => {
                sendSuccess(body.vars.onesync_enabled);
            }).catch((err) => {
                sendError(err);
            });
        });
    };

    getEnforcedBuild() {
        return new Promise((sendSuccess, sendError) => {
            fetch(`http://${this.ip}/info.json`).then((res) => res.json()).then((body) => {
                sendSuccess(body.vars.sv_enforceGameBuild);
            }).catch((err) => {
                sendError(err);
            });
        });
    };

    getEnhancedSupport() {
        return new Promise((sendSuccess, sendError) => {
            fetch(`http://${this.ip}/info.json`).then((res) => res.json()).then((body) => {
                sendSuccess(body.vars.sv_enhancedHostSupport);
            }).catch((err) => {
                sendError(err);
            });
        });
    };

    getLAN() {
        return new Promise((sendSuccess, sendError) => {
            fetch(`http://${this.ip}/info.json`).then((res) => res.json()).then((body) => {
                sendSuccess(body.vars.sv_lan);
            }).catch((err) => {
                sendError(err);
            });
        });
    };

    getOnesyncToken() {
        return new Promise((sendSuccess, sendError) => {
            fetch(`http://${this.ip}/info.json`).then((res) => res.json()).then((body) => {
                sendSuccess(body.vars.sv_licenseKeyToken);
            }).catch((err) => {
                sendError(err);
            });
        });
    };

    getMaxPlayers() {
        return new Promise((sendSuccess, sendError) => {
            fetch(`http://${this.ip}/info.json`).then((res) => res.json()).then((body) => {
                sendSuccess(body.vars.sv_maxClients);
            }).catch((err) => {
                sendError(err);
            });
        });
    };

    getHookAllowed() {
        return new Promise((sendSuccess, sendError) => {
            fetch(`http://${this.ip}/info.json`).then((res) => res.json()).then((body) => {
                sendSuccess(body.vars.sv_scriptHookAllowed);
            }).catch((err) => {
                sendError(err);
            });
        });
    };
// server version
    getServerVersion() {
        return new Promise((sendSuccess, sendError) => {
            fetch(`http://${this.ip}/info.json`).then((res) => res.json()).then((body) => {
                sendSuccess(body.version);
            }).catch((err) => {
                sendError(err);
            });
        });
    };
// fxserver build and info
    getFXServerBuild() {
        return new Promise((sendSuccess, sendError) => {
            fetch(`http://${this.ip}/info.json`).then((res) => res.json()).then((body) => {
                sendSuccess(body.server);
            }).catch((err) => {
                sendError(err);
            });
        });
    };
// dynamic.json shit
    getHostname() {
        return new Promise((sendSuccess, sendError) => {
            fetch(`http://${this.ip}/dynamic.json`).then((res) => res.json()).then((body) => {
                sendSuccess(body.hostname);
            }).catch((err) => {
                sendError(err);
            });
        });
    };
// not a fuckin clue what this is OMEGALUL
    getIV() {
        return new Promise((sendSuccess, sendError) => {
            fetch(`http://${this.ip}/dynamic.json`).then((res) => res.json()).then((body) => {
                sendSuccess(body.iv);
            }).catch((err) => {
                sendError(err);
            });
        });
    };
};

module.exports.FiveM = FiveM;