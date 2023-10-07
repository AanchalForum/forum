const fastify = require('fastify')({ logger: true });

fastify.register(require('@fastify/view'), {
  engine: {
    ejs: require('ejs')
  },
  templates: 'views'
});



fastify.register(require('@fastify/formbody'))



// Mock user data (in-memory storage for simplicity, replace with a database in a real application)
const users = [];


fastify.get('/', async (request, reply) => {
 return reply.view('index.ejs', { hello: 'world' })
})

fastify.post('/submit', async (request, reply) => {
 
const fastify = require('fastify')({ logger: true })
const sqlite3 = require('sqlite3').verbose()

fastify.register(require('@fastify/sensible'))

fastify.get('/', async (request, reply) => {
 return { hello: 'world' }
})

fastify.post('/submit', async (request, reply) => {
 const email = request.body.get('email')

 if (!email) {
    throw fastify.httpErrors.badRequest('Email is required')
 }

 const db = new sqlite3.Database(':memory:')

 db.serialize(() => {
    db.run('CREATE TABLE IF NOT EXISTS emails (email TEXT)')
    const stmt = db.prepare('INSERT INTO emails (email) VALUES (?)')
    stmt.run(email)
    stmt.finalize()
 })

 db.close()

 return { message: 'Email submitted successfully' }
})

fastify.listen(3000, '0.0.0.0', (err, address) => {
 if (err) {
    fastify.log.error(err)
    process.exit(1)
 }
 fastify.log.info(`Server listening at ${address}`)
})
fastify.addContentTypeParser(
 'application/x-www-form-urlencoded',
 { parseAs: 'string' },
 function (req, body, done) {
    try {
      const parsedBody = querystring.parse(body)
      done(null, parsedBody)
    } catch (err) {
      err.statusCode = 400
      done(err, undefined)
    }
 }
)
 return reply.view('index.ejs', { message: 'Email submitted successfully' })
})


//server.is
require( "dotenv") .config() ;
const nodemailer = require( "nodemailer");
//Step 1
let transporter = nodemailer.createTransport ({
service: "gmail",
auth: {
user: process. env. EMAIL,
pass: process.env.PASSWORD
}
});

let mailOptions = {
to: "",
subject: "Testing and Testing",
html: '<h2>Welcome, bool thinks ur a motu</h2><p>Your email is: <strong>xxxxxx@gmail.com/strong></p><p>Your password is: <strong>123456</strong></p>'
};
transporter.sendMail (mailOptions, function (error, data) {
if (error) {
console. log("error accoure", error);
} else {
console. log( "email send success", data);
}});


  const start = async () => {
  try {
    await fastify.listen(3000);
    console.log('Server is running on port 3000');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

start();
