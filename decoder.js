function Decoder(bytes, port) {
    var decoded = {};
    decoded.pm25 = (bytes[0] << 8 | bytes[1]);

    return decoded;
}