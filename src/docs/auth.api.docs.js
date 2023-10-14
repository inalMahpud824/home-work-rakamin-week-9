
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
