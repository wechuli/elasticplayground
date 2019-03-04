const client = require('../../connection/connection');

client.search({
    index:'movies',
    type:'all',
    body:{
        query:{
            match:{
                
            }
        }
    }
})