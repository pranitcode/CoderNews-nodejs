
//https://documenter.getpostman.com/view/10749950/SzYgPZb4#7b54e4c3-e594-4c24-8e63-601584dfa4ec
//for medium api





const express = require('express');
const newsRouter = express.Router();
const axios = require('axios');


newsRouter.get('', async(req, res) => {
   // res.render('news');
    
    try {
        const newsAPI = await axios.get(`https://raddy.co.uk/wp-json/wp/v2/posts/`);
        res.render('news', { articles: newsAPI.data });
    } catch (err) {
        if (err.response) {
            { articles: null }
            console.log(err.response.data);
            console.log(err.response.status);
            console.log(err.response.head)
        } else if (err.requiest) {
            { articles: null}
            console.log(err.requiest)
        } else {
            { articles:null }
            console.error('Error',err.message);
        }
        
  }
});



newsRouter.get('/:id', async(req, res) => {
    // res.render('news');
    let articleID = req.params.id
     try {
         const newsAPI = await axios.get(`https://raddy.co.uk/wp-json/wp/v2/posts/${articleID}`);
         res.render('newsSingle', { article: newsAPI.data });
     } catch (err) {
         if (err.response) {
             { article: null }
             console.log(err.response.data);
             console.log(err.response.status);
             console.log(err.response.head)
         } else if (err.requiest) {
             { article: null}
             console.log(err.requiest)
         } else {
             { article:null }
             console.error('Error',err.message);
         }
         
   }
});
 


newsRouter.post('', async(req, res) => {
    // res.render('news');
     
    let search = req.body.search
   


   try {
    const newsAPI = await axios.get(`https://raddy.co.uk/wp-json/wp/v2/posts?search=${search}`);
    res.render('newsSearch', { articles: newsAPI.data });
} catch (err) {
    if (err.response) {
        { articles: null }
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.head)
    } else if (err.requiest) {
        { articles: null}
        console.log(err.requiest)
    } else {
        { articles:null }
        console.error('Error',err.message);
    }
    
}



 });
 
 
 








//https://raddy.co.uk/wp-json/wp/v2/posts?search=photoshop
module.exports = newsRouter

