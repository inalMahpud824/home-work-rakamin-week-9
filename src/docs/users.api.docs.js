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
 *           type: string
 *           description: your password for new account
 *       example:
 *         id: 123
 *         email: example@gmail.com
 *         gender: pria
 *         password: thispassword12
*/

/**
 * @swagger
 * components:
 *   schemas:
 *     movies:
 *       type: object
 *       required:
 *         - id
 *         - title
 *         - gendres
 *         - year
 *       properties:
 *         id:
 *           type: integer
 *           description: The id mush be integer
 *         title:
 *           type: string
 *           description: The title form Movies
 *         gendres:
 *           type: string
 *           description: The gendres from movies
 *         year:
 *           type: string
 *           description: The year from movies launching
 *       example:
 *         id: 123
 *         title: harry potter
 *         gendres: fantasy
 *         year: 2009
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
 *   put:
 *     summary: update a user by ID
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



