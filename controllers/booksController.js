var connection= require('../config/connection')
var book = require('../model/book');
var erase = require('fs');

module.exports = {



    index: function(req,res){
        
        book.obtain(connection, function(err,data){
            console.log(data)
            res.render('books/index', {books: data});

        })

    },



    create: function(req,res){
            res.render('books/create');
    },




    save: function(req,res){
        


        book.insert(connection, req.body, req.file, function(err){
             res.redirect('/books');
        });

        
    },



    eliminate: function(req,res){
        
        console.log('data reception'); 
        console.log(req.params.id);

        book.returnDataByID(connection,req.params.id, function (err,records) {

            var imageName ='public/images/' + (records[0].image);

            if(erase.existsSync(imageName)){
                erase.unlinkSync(imageName); //erase image from public/images
            }
            book.delete(connection,req.params.id,function (err) { //erase whole book from BD
                
                res.redirect('/books');

            })
        })
        
    },



    edit: function(req,res){

        book.returnDataByID(connection,req.params.id, function (err,records) {
            console.log(records[0])
            res.render('books/edit', {book: records[0]});

        });



    },

    
    
    update: function(req,res){
        
        console.log(req.body.name);
        
        
        if(req.file){ //update the image
            
            if(req.file.filename){
                
                book.returnDataByID(connection, req.body.id, function (err,records) {
                    
                    var imageName ='public/images/'+(records[0].image);
                    
                    if(erase.existsSync(imageName)){
                        erase.unlinkSync(imageName);
                    }
                    book.updateArchive(connection, req.body, req.file, function (err) { });
                    
                });
                
                
                
            }
            
        }
        
        
        
        if(req.body.name){
        book.update(connection,req.body,function (err) { });   //update only the name 
        
        };
        
        
        res.redirect('/books')
        
        
        
        
    },

}



