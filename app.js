const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');
const path = require('path');


const app = express();

//Bodyparse Middleware
app.use(express.urlencoded({extended:true}));

//Static Folder
app.use(express.static(path.join(__dirname, 'public')));

//Signup Route
app.post('/signup', (req,res) => {
    const{email,name} = req.body;

    //Make sure fields are filled
    if(!email || !name){
        res.redirect('/fail.html');
        return;
    }

    // Construct req data

    const data = {
        members: [{
            email_address: email,
            status: 'subscribed',
            merge_fields: {
                FNAME: name
            }
        }]
    }

    const postData = JSON.stringify(data);

    const options = {
        url: 'https://us2.api.mailchimp.com/3.0/lists/8322819500',
        method: 'POST',
        headers: {
            Authorization: 'auth 6a444f44be3422f20552d6785d80dc51-us2'
        },
        body: postData
    }

    request(options, (err, response, body) =>{
        if(err){
            //res.redirect("/fail.html");
            console.log(err)
        } else{
            if(response.statusCode === 200){
                
                res.redirect("/success.html");


            } else{
                res.redirect("/index.html");
                console.log("Failure");
            }
        }
    })

});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on ${PORT}`));


