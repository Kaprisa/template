const connection = require('./connection')
const pool = connection.pool
const asyncForEach = require('../helpers/asyncForEach')
const errorHandler = require('../helpers/errorHandler')

const f = async _ => {
    // await asyncForEach(items, async b => {
    //
    // })
    pool.end(e => e ? errorHandler(e) : null)
}
f().then(_ => null)
