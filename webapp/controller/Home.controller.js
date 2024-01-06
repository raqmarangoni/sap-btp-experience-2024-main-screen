sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("com.lab2dev.btpexperiencemainscreen.controller.Home", {
            onInit: function () {
                const sponsorsModel = {
                    sponsors: [
                        {
                            Empresa: "Lab2Dev",
                            Estado: "São Paulo",
                            Logo: "../img/lab2dev.png"
                        },
                        {
                            Empresa: "Empresa A",
                            Estado: "São Paulo",
                            Logo: "../img/empresa.png"
                        },
                        {
                            Empresa: "Empresa B",
                            Estado: "São Paulo",
                            Logo: "../img/empresa.png"
                        },
                        {
                            Empresa: "Empresa C",
                            Estado: "São Paulo",
                            Logo: "../img/empresa.png"
                        },
                    ]
                };
                const oModel = new JSONModel(sponsorsModel);
                this.getView().setModel(oModel);
            }
        });
    });
