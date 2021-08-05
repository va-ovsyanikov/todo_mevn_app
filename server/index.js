const express = require('express')

const app = express()

const PORT = process.env.PORT || 3000

const mongoose = require('mongoose')

const routes = require('./routers/routes')

const cors = require('cors')


app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(routes)


if(process.env.NODE_ENV === 'production'){
    app.use(express.static(__dirname + '/dist/'))


    app.get('*', function (_, res) {
        const index = path.join(__dirname, 'dist', 'index.html');
        res.sendFile(index);
      });



    // app.get(/.*/, (_, res)=> res.sendFile(__dirname + '/dist/index.html' ))
}


mongoose.connect(
    'mongodb+srv://Ovsyan:ov240988ov@cluster0.owehi.mongodb.net/todoListDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
},
    function (error) {
        if (error) {
            console.log(error)
        } else {
            console.log('db started')
            app.listen(PORT,(error)=>{
                if(error){
                    console.log(error)
                }else{
                    console.log(`express started`)
                }
            })
        }
    })





