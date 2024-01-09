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

                const oFixedTileContent = {
                    registeredParticipants:{
                        kpivalue: 120,
                        color: "Good"
                    },
                    scheduledActivities: {
                        kpivalue: 40,
                        color: "Good"
                    },
                    participatingCompanies: {
                        kpivalue: 80,
                        color: "Good"
                    }
                };

                const { registeredParticipants, scheduledActivities, participatingCompanies} = oFixedTileContent
                const oModel = new JSONModel({
                    sponsors: sponsorsModel.sponsors,
                    registeredParticipants,
                    scheduledActivities,
                    participatingCompanies
                });
                this.getView().setModel(oModel, "combinedModel");
            },

            onNavToRegisteredParticipants: function () {
                this.getOwnerComponent().getRouter().navTo("RegisteredParticipants");
            },

            onNavToScheduledActivities: function () {
                this.getOwnerComponent().getRouter().navTo("RegisteredParticipants");
            },

            onNavToParticipatingCompanies: function () {
                this.getOwnerComponent().getRouter().navTo("RegisteredParticipants");
            },

            onNavToSponsors: function () {
                this.getOwnerComponent().getRouter().navTo("Sponsors");
            },
        });
    });
