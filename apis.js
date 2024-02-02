module.exports = {
  createCase: function(req,res){
    let {subject,value} = req.body;
    console.log(`A new case has been created for ${subject} with value ${value}`);
  },
  sendSensorData: function(req,res){
    let {deviceId,reading} = req.body;
    console.log(`New device sensor data captured with device id ${deviceId} and the reading ${reading}`);
  }
}
