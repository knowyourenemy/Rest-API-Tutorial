export default {
  port: 1337,
  dbUri: "mongodb://localhost:27017/rest-api-tutorial",
  saltWorkFactor: 10,
  accessTokenTtl: "15m",
  refreshTokenTtl: "1y",
  publicKey: `-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCbMcOl0UC9K5kKE8uuKwHGVXZv
PMhFgssoRqka9G64CHpokg4sCDE4dvLHDgf4+ktr/wi4PDjclbtNL1u9BZsZgbYL
lniuNXpyrQlYAu5CstR7k1qF0gFCWmGaG6GB5+eGR8R21FzQdiCN1UUPRxq15L1A
kK5PHQySPbBRCR0A+QIDAQAB
-----END PUBLIC KEY-----`,
  privateKey: `-----BEGIN RSA PRIVATE KEY-----
MIICXAIBAAKBgQCbMcOl0UC9K5kKE8uuKwHGVXZvPMhFgssoRqka9G64CHpokg4s
CDE4dvLHDgf4+ktr/wi4PDjclbtNL1u9BZsZgbYLlniuNXpyrQlYAu5CstR7k1qF
0gFCWmGaG6GB5+eGR8R21FzQdiCN1UUPRxq15L1AkK5PHQySPbBRCR0A+QIDAQAB
AoGAEcA3aJful7SM5KIvAdTZdx3/VenV3l1/bzPl07dxkosltSA/jrnBJ3wzeKEa
OFgomEmrbac1ucVGjyWDkLM7chmdljIWp77/d/rbry7pdfHMDYeqGuT2DqRnvB3Y
AFm5ekI4SaKRBFOurvcTmYzKUNLu+iYbQzeVn388ipe7siECQQDbWgrAxYks4suq
nYw+Qxt+bJQPDZye0KyIgpphspYlKDG/RZ4KYr7VgwT4+xzkd43EnFmR7ZCM8VCG
IORtmPLzAkEAtR+hOLXQavnFQa5j296f2nNm+uMXIav0RGcKdtsJwVGi0aEj0yzs
lU+UI4J6+mlRM4iMqVNqCwX6Ph20lu3/YwJBAIWtxkfdGtBkF0MPaNy5ARR3D3Rt
Ezomaj93eKZ5s89JQ6gRwVMLAsoUYv9p6h3CTn+32U55vVJn7m8PtKamQ8kCQCpN
CtA91kFFuEYQvo25Psg8L47kvqBEkrXvAsije3HE6SvgYIePdGmivkxUyvf05NwO
Rhu9uYR9juY29dhSGVUCQCdScAkxwdZ9lz/cLFIKdHEMhF53GNvFCE/D0uPiUPKg
fby4QCvjV6CQJy0kfDvjoLq1atrrUeWiHLsB3lWtKPs=
-----END RSA PRIVATE KEY-----`,
};