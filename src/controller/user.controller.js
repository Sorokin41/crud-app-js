 const db = require('../../src/database/db')

class UserController{

    async createUser(req, res) {
        const {name, surname} = req.body
        const newPerson = await db.query(`INSERT INTO person (name, surname) values($1, $2) RETURNING *`, [name, surname])
        res.json(newPerson.rows[0])
    }

    async getUsers(req, res) {
        const users = await db.query('SELECT * FROM person')
        res.json(users.rows[0])
    }

    async getOneUser(req, res) {
        const id = req.params.id
        const user = await db.query('SELECT * FROM person WHERE id = $1', [id])
        res.json(user.rows[0])

    }

    async updateUser(req, res) {
        const {id, name, surname} = req.body
        const newUser = await db.query('UPDATE person SET name = $2, surname = $3 WHERE id = $1 RETURNING *', [id, name, surname])
        res.json(newUser.rows[0])
    }

    async deleteUser(req, res) {
        const id = req.params.id
        const user = await db.query('DELETE FROM person WHERE id = $1', [id])
        res.json(user.rows[0])
    }
}

module.exports = new UserController()