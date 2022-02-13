function Decoder(bytes, port) {

  var decodedPayload = {
    "dust": bytes[0] << 8 | bytes[1]
  };


  return Serialize(decodedPayload)
}

// do not touch unless your Google Form fields have changed
var field_mapping = {
  "dust": "entry.589685897"
};


function Serialize(payload) {
  var str = [];
  for (var key in payload) {
    if (payload.hasOwnProperty(key)) {
      var name = encodeURIComponent(field_mapping[key]);
      var value = encodeURIComponent(payload[key]);
      str.push(name + "=" + value);
    }
  }
  return str.join("&");
}
