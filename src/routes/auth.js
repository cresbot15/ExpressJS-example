import { Router } from "express"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import prisma from "#db"

const router = Router()

router.post('/register', async (req, res) => {
    const { username, email, password } = req.body;

    const conflicts = [];

    if (await prisma.user.findFirst({ where: { email } })) conflicts.push("Email already in use")
    if (await prisma.user.findFirst({ where: { username } })) conflicts.push("Username already in use")
    if (conflicts.length > 0) {
        return res.status(409).json({ errors: conflicts})
    }


    const password_hash = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
        data: {username, email, password_hash},
        select: { id: true, username: true, email: true}
    })

    res.status(201).json(user)
})

router.post('/login', async (req, res) => {
    const { email, password} = req.body;

    const user = await prisma.user.findFirst({ where: { email }});
    if (!user || !await bcrypt.compare(password, user.password_hash)) {
        return res.status(401).json({ detail: "Invalid login credentials"})
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET)
    res.status(200).json({ access_token: token, token_type: "bearer" })
})

export default router