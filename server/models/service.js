const mongoose = require("mongoose");

const serviceSchema = mongoose.Schema({
  WelfareID: String,
  ServiceDate: {
    type: Date,
    default: new Date(),
  },  
  Ward: String,
  Bed: String,
  TestDetails: [
    {
      TestCode: String,
      TestDescription: String,
      Cost: Number
    }
  ],
  TotalAmount: Number,
  PatientContribution: Number,
  Remarks: String,
  CreatedUser: String,
  ModifyUser: String,
});
//===========================================================

const Service = mongoose.model("service", serviceSchema);
module.exports = Service;
