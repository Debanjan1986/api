var db = require('../dbconnection');

var BusRoute = {

    getAllBusRoutes: function (callback) {

        return db.query("Select * from busroute", callback);
    },
    getBusRouteById: function (id, callback) {
        return db.query("select * from busroute where Bus_ID=? ", [id], callback);
    },
    getBusRouteByRoute: function (id, callback) {
        return db.query("select * from busroute where BusRoute=? ", [id], callback);
    },
    addBusRoute: function (BusRoute, callback) {
        return db.query("Insert into busroute values(NULL,?,?,?)", [
            BusRoute.BusRoute, BusRoute.Bus_ID, BusRoute.Zone], callback);
    },
    updateBusRoute: function (id, BusRoute, callback) {
        return db.query("update busroute set Bus_ID=?,Zone=? where BusRoute=?", [
            BusRoute.Bus_ID, BusRoute.Zone,BusRoute.BusRoute], callback);
    },
    deleteBusRoute: function (id, BusRoute, callback) {
        return db.query("delete from busroute where BusRoute = ?", [id], callback);
    }
};
module.exports = BusRoute;
