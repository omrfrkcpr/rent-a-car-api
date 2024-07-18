"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | RENT_A_CAR API
------------------------------------------------------- */
// dateToLocaleString(date:Date):

module.exports = function (dateData) {
  return dateData.toLocaleString("tr-tr", {
    dateStyle: "full",
    timeStyle: "medium",
  });
};
