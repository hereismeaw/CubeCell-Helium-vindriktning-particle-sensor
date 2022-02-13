//Add on the before google sheet f(x)

function Decoder(bytes, port) 
{

  var decodedPayload = 

      {
        "dust": bytes[0] << 8 | bytes[1]
      };

  return Serialize(decodedPayload)
}
