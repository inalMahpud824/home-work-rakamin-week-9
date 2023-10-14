
/**
 * @swagger
 * /movies:
 *   get:
 *     summary: Get all movies
 *     description: return a list of all movies.
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
 *               $ref: '#/components/schemas/Users'
 *       '500':
 *         description: server error
 */


/**
 * @swagger
 * /movies/{id}:
 *   get:
 *     summary: Get movies By Id
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
 *               $ref: '#/components/schemas/movies'
 *       '500':
 *         description: server error
 */

/**
 * @swagger
 * /movies/{id}:
 *   put:
 *     summary: update a movie by ID
 *     description: for update users by id.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: update movies by ID.
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/movies'
 *       '404':
 *         description: Not Found
 */

/**
 * @swagger
 * /movies/{id}:
 *   delete:
 *     summary: delete movie by ID
 *     description: for delete users by id.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: delete movie by ID.
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/movies'
 *       '404':
 *         description: Not Found
 */
