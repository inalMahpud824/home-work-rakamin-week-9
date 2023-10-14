/**
 * @swagger
 * components:
 *   schemas:
 *     users:
 *       type: object
 *       required:
 *         - id
 *         - email
 *         - gender
 *         - password
 *       properties:
 *         id:
 *           type: integer
 *           description: The id mush be integer
 *         email:
 *           type: string
 *           description: the email mush be unique
 *         gender:
 *           type: string
 *           description: your gender
 *         password:
 *           description: your password for new account
 *       example:
 *         id: 123
 *         email: example@gmail.com
 *         gender: pria
 *         password: thispassword12
*/

/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Rigister for create new account
 *     requestBody: 
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: Registration failed.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       400:
 *         description: bad requset
 */

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: for login
 *     requestBody: 
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: login succes.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       401:
 *         description: Username or password wrong
 */


/**
 * @swagger
 * /users:
 *   get:
 *     summary: Get all users
 *     description: return a list of all users.
 *     parameters:
 *       - in: query
 *         name: required
 *         schema:
 *           type: string
 *         description: An optional parameter
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       '500':
 *         description: server error
 */

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Get all users By Id
 *     description: return a list of users by id.
 *     parameters:
 *       - required: true
 *       - in: query
 *         name: required
 *         schema:
 *           type: string
 *         description: id of users
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       '500':
 *         description: server error
 */

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Get a user by ID
 *     description: Retrieve a user based on their ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the user to retrieve.
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       '500':
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /users/{id}:
 *   put:
 *     summary: Get a user by ID
 *     description: for update users by id.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: update user by ID.
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       '404':
 *         description: Not Found
 */

/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     summary: delete user by ID
 *     description: for delete users by id.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: delete user by ID.
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       '404':
 *         description: Not Found
 */



