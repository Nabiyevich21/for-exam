//? POST => Register user => https://bd.minimatch.uz/users

//* body: {
//*   "phone": "+998909990099",
//*   "password": "password"
//* }

//! response
//* {
//*   "phone": "+998909990099",
//*   "password": "$2a$12$dUgMU/FwtvmbKwqSGM6F1.hdPWAQrNmeDV4yEruOkrjplPWx7dG7K",
//*   "_id": "65cd332912d46afa2b057ffa",
//*   "created_at": "2024-02-14T21:39:53.720Z",
//*   "updated_at": "2024-02-14T21:39:53.720Z"
//* }

//? POST => Login user => https://bd.minimatch.uz/auth/login

//* body: {
//*   "phone": "+998909990099",
//*   "password": "password"
//* }

//* {
//*     "msg": "Muvaffaqqiyatli kirdingiz!",
//*     "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVjZDMzMjkxMmQ0NmFmYTJiMDU3ZmZhIn0sImlhdCI6MTcwNzk0NjgzOSwiZXhwIjoxNzA4NTUxNjM5fQ.5jO6GnHp3Gax0Lxv8uRPkz6BIK5UMqNNXlWH6DrIoiw"
//* }

//? POST => Add product => https://bd.minimatch.uz/products

//* headers: {
//*   authorization: "Beader ${token}"
//* }

//* body: {
//* 	"name": "Iphone 15 Pro Max",
//*   "images": ["https://somewhere.com/iphone.jpeg"] ,
//*   "description": "The best phone in 2024",
//*   "price": 1500
//* }

//? PATCH => Edit product => https://bd.minimatch.uz/products/65c8a15298e3ee3959ffeae7

//* headers: {
//*   authorization: "Beader ${token}"
//* }

//? any key can be edited in this example only name key was changed
//* body: {
//* 	"name": "Iphone 12",
//* }

//? DELETE => Delete product => https://bd.minimatch.uz/products/65c8a15298e3ee3959ffeae7

//* headers: {
//*   authorization: "Beader ${token}"
//* }
