const errorHandler = require('../../helpers/errorHandler')

exports.up = async query => {
    try {
        await query(`CREATE TABLE IF NOT EXISTS users (
          id int(10) unsigned NOT NULL AUTO_INCREMENT,
          name varchar(70) COLLATE utf8mb4_unicode_ci NOT NULL,
          PRIMARY KEY (id)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;`, []
        )
    } catch (e) {errorHandler(e)}


}

exports.down = async query => {
    try {
        await query(`DROP TABLE IF EXISTS users;`, [])
    } catch (e) {errorHandler(e)}
}
