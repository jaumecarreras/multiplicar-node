const opts = {
    base: {
        demand: true,
        alias: 'b',

    },
    limite: {
        alias: 'l',
        default: 10
    }
}



const argv = require('yargs')
    .command('listar', 'imprme en consola la tabla de ultimlicar', opts)
    .command('crear', 'genera un archivo con la tabla de multiplicar', opts)

.help()
    .argv;

module.exports = {
    argv
}