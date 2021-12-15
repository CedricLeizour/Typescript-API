export default {
    port: 1337,
    dbUri: "mongodb://localhost:27017/typescript-api",
    saltWorkFactor: 10,
    accessTokenTtl: "15m",
    refreshTokenTtl: "1y",
    publicKey: `-----BEGIN PUBLIC KEY-----
    MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAsH30AJUhB5TxbOwEpk2k
    JkfFX4VG0PqtZAyMUGkESx8C4cT6U7WlwnZSdWM/aZ0ct6U1n5/RWoRCUIQfkNBj
    kUgf3m+cnvoWBU8shWREkD20XoS3b23KVficlqcNZzKEEWZfwjjfz4ZfDGuYJFvB
    rgw1P7ZK6WpXr7EHImX/n4U0iA2gsXG8EQrrSfOAnjZwPe7/zjzgi4Rg4UVful9i
    -----END PUBLIC KEY-----`,
    privateKey:`-----BEGIN RSA PRIVATE KEY-----
    MIIJKAIBAAKCAgEAsH30AJUhB5TxbOwEpk2kJkfFX4VG0PqtZAyMUGkESx8C4cT6
    U7WlwnZSdWM/aZ0ct6U1n5/RWoRCUIQfkNBjkUgf3m+cnvoWBU8shWREkD20XoS3
    b23KVficlqcNZzKEEWZfwjjfz4ZfDGuYJFvBrgw1P7ZK6WpXr7EHImX/n4U0iA2g
    sXG8EQrrSfOAnjZwPe7/zjzgi4Rg4UVful9iXtWYdyElxsG+7uq2mVYb095JEF+r
    MFnuBN16S1wY623DEUq+QAuZmuOnPwRvlD1CKoZbMEcKrvYp1N1iv5x4/GnxGqu8
    9YoCdY/V5EUWAQ1QFrvnuiL2V9lIL+InC6EHjiLRaiq5q5496XW45aD0GSbCh1Ot
    IZA4FCtASnASyioEZHxM9TTqghyxiZ7ew6B1D3Npsr9UWKbCFYZy/uhYqICZ9Uf8
    Hf6zL2H05tHTW7dvl2m7gxDqBDO9hiA5bd6rufAnpbgb1yOckQ/Te7M3jPE92txK
    -----END RSA PRIVATE KEY-----`,
};