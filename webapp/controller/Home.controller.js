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

                const userName = sap.ushell.Container.getService("UserInfo").getFirstName()

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

                const oFixedTileContentSchedule = {
                    keynote: {
                        type: "Keynote",
                        preview: "“Case: O aplicativo do SAP BTP Experience”",
                        icon: 'sap-icon://microphone'
                    },
                    lecture: {
                        type: "Lecture",
                        preview: "“A importância do UX na Tecnologia da Informação”",
                        icon: 'sap-icon://tag-cloud-chart'
                    },
                    handsOn: {
                        type: "Hands-On",
                        preview: "“Prototipando apli cações Fiori SAPUI5”",
                        icon: "sap-icon://decision" 
                    }
                };

                const { keynote, lecture, handsOn } = oFixedTileContentSchedule
                const { registeredParticipants, scheduledActivities, participatingCompanies} = oFixedTileContent
                const oModel = new JSONModel({
                    sponsors: sponsorsModel.sponsors,
                    registeredParticipants,
                    scheduledActivities,
                    participatingCompanies,
                    userName,
                    keynote,
                    lecture,
                    handsOn
                });
                this.getView().setModel(oModel, "combinedModel");
            },

            onNavToSchedule: function () {
                this.getOwnerComponent().getRouter().navTo("Schedule");
            },

            onNavtoRoom: function () {
                this.getOwnerComponent().getRouter().navTo("Room");
            },

            onNavtoSponsorship: function () {
                this.getOwnerComponent().getRouter().navTo("Sponsorship");
            },

            onNavtoCompanies: function () {
                this.getOwnerComponent().getRouter().navTo("Companies");
            },

            onNavtoUsers: function () {
                this.getOwnerComponent().getRouter().navTo("Users");
            },

            onNavtoCheckin: function () {
                this.getOwnerComponent().getRouter().navTo("Checkin");
            },

            onNavToVisitorGuider: function () {
                this.getOwnerComponent().getRouter().navTo("VisitorGuider");
            },

            onNavToSessions: function () {
                this.getOwnerComponent().getRouter().navTo("Sessions");
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

            onNavToSessionsDetail: function () {
                this.getOwnerComponent().getRouter().navTo("SessionsDetail");
            }, 
        });
    });
