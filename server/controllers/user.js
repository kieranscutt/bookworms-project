const User = require('../models/user')
const bcrypt = require('bcrypt')

async function register (req, res) {
    try {
    const data = req.body;
    const salt = await bcrypt.genSalt(parseInt(process.env.BCRYPT_SALT_ROUNDS));

    data.password = await bcrypt.hash(data.password, salt)
    
     const result = await User.create(data)


    res.status(201).send(result);
    } catch (err) {
        res.status(400).send({"error": "Could not register"})
    }
};

async function login (req, res) {
    try {
    const data = req.body;
   const user = await User.getOneByUsername(data.username);

   const authenticated = await bcrypt.compare(data.password, user.password)

  if(!authenticated) {
    throw new Error("Password does not match")
  } else {
    const token = await Token.create(user.id)
    res.status(200).send({authenticated: true, token: token})
  }
  
} catch(err) {
    res.status(401).send({"error": "Could not log in"})
}
    
}


async function destroy(req, res) {
    try {
        const name = req.params.username;
        const user = await User.getOneByUsername(name);
        const result = await user.destroy();
        res.status(204).end();
    } catch (err) {
        res.status(404).send({"error": err.message})
    }
}

async function update(req, res) {
    try {
       const name = req.params.username
       const data = req.body
       const user = await User.getOneByUsername(name)
       const result = await user.update(data)
         res.status(200).json(result)
    } catch(err) {
        res.status(404).send({"error": err.message})
    }
}


module.exports = {register, login, destroy, update}
