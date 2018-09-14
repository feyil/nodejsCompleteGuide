const bcrypt = require("bcrypt");

// 1234 -> abcd

async function run() {
    const salt = await bcrypt.genSalt(10); // 10 is default
    const hashed = await bcrypt.hash("1234", salt);
    console.log(salt);
    console.log(hashed);

}

run();