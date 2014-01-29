var dataService = function () {
    var urlBase = 'http://localhost:38129/api/customers',

    authenticate = function (authToken) {

    },

    getCustomers = function () {
        var response = $.getJSON(urlBase);
        return response;
    },



    getCustomer = function (id) {
        var response = $.getJSON(urlBase + '/' + id);
        return response;
    },

    getCustomerJSONP = function (id) {
        var response = $.getJSON(urlBase + '/' + id + '?callback=?');
        return response;
    },
        
    getCustomerAndOrders = function (id) {
        var response = $.when(getCustomer(id),
                        getOrders(id));
        return response;
    },
    
    //using array of promises, this looks kind of nutz
    //getCustomerAndOrders = function (id) {
    //    var responseArray = [getCustomer(id), getOrders(id)];
    //    return $.when.apply($, responseArray);

    //},

    insertCustomer = function (cust) {
        var response = $.ajax({
            url: urlBase,
            data: cust,
            type: 'POST',
            //success: alert('done')
        });
        return response;
    },

    updateCustomer = function (cust) {
        var response = $.ajax({
            url: urlBase + '/' + cust.ID,
            data: cust,
            type: 'PUT'
        });
        return response;
    },

    deleteCustomer = function (id) {
        var response = $.ajax({
            url: urlBase + '/' + id,
            type: 'DELETE'
        });
        return response;
    },

    getOrders = function (id) {
        var response = $.getJSON(urlBase + '/' + id + '/orders');
        return response;
    };

    return {
        authenticate: authenticate,
        getCustomers : getCustomers,
        getCustomer: getCustomer,
        getCustomerAndOrders: getCustomerAndOrders,
        getCustomerJSONP: getCustomerJSONP,
        insertCustomer: insertCustomer,
        updateCustomer: updateCustomer,
        deleteCustomer: deleteCustomer,
        getOrders: getOrders
    };
}();