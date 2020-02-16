/**
 * 
 */


const pgInfo = {
    development: {
        // 虚拟机ip
        host: '192.168.56.1',
        port: '5432',
        
        database: 'notes',
        password: 'Devnotes2020'，
        dialect：'postgres',
        pool: {
            max: 5,
            idle: 30000,
            acquire: 60000,
        },
        sync: { force: true },
    },
    production: {

    }
}




modules.export = pgInfo
