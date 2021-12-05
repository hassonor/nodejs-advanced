
const crypto = require('crypto');

const start = Date.now();
crypto.pbkdf2('a', 'b', 100000, 512, 'sha512',
    () => {
        console.log(`1: ${Date.now() - start}ms`);
});

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512',
    () => {
        console.log(`2: ${Date.now() - start}ms`);
});

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512',
    () => {
        console.log(`3: ${Date.now() - start}ms`);
    });

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512',
    () => {
        console.log(`4: ${Date.now() - start}ms`);
    });

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512',
    () => {
        console.log(`5: ${Date.now() - start}ms`);
    });
