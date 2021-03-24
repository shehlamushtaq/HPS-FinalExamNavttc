const express = require("express");
const router = express.Router();
const Welfare = require("../../models/welfare.js");
const Service = require("../../models/service.js");

router.post("/add", async (req, res) => {
  const welfare = new Welfare(req.body.welfare);
  //console.log(patientData);
  await welfare.save();
  // console.log("New Welfare ID:", welfare.id);

  const service = new Service({ ...req.body.service, WelfareID: welfare.id });

  await service.save();
  // console.log("New Service ID:", service.id);

  res.json({ st: 1, msg: "Patient Welfare Data saved successfully" });
});
  
router.get("/all/:mrNo", async (req, res) => {
  const mrNo = req.params.mrNo;
  // console.log(mrNo);
  // const welfares = await Welfare.find({MRNo: mrNo}, 'MRNo ReqName WelfareDate');
  const welfares = await Welfare.find({ MRNo: mrNo });

  //console.log(welfares.map((welfare) => welfare._id));
  const services = await Service.find({    
    WelfareID: { $in: welfares.map((welfare) => welfare._id)  }
  });

  // welfares.forEach ( (welfare, ind) => {
  //   console.log(welfare._id);
  //   const service = services.filter ( service => service.WelfareID == welfare._id)[0];
  //   //console.log(service);
  //   welfares[ind].services = service;
  // });

  res.json({ welfares: welfares, services: services });

  //console.log(services);
});







module.exports = router;
