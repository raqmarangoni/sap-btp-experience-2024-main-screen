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

                const tilesModel = {
                    tiles: [
                        {
                            title: "Participantes confirmados por cadastro",
                            footer: "participantes",
                            kpivalue: 120,
                            color: "Good"
                        },
                        {
                            title: "Atividades programadas",
                            footer: "palestras, hands-on, hackatons etc.",
                            kpivalue: 50,
                            color: "Good",
                        },
                        {
                            title: "Empresas Participantes",
                            footer: "participantes",
                            kpivalue: 25,
                            color: "Good",
                        }
                    ]
                };
 
                const oCombinedModel = new JSONModel({
                    sponsors: sponsorsModel.sponsors,
                    tiles: tilesModel.tiles
                })
                this.getView().setModel(oCombinedModel, "combinedModel");
            },

            onNavToSponsors: function () {
                this.getOwnerComponent().getRouter().navTo("Sponsors");
            }
        });
    });
