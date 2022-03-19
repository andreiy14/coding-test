const {book,category} = require('../../models')

exports.addBook = async (req, res) => {
    try {
     
      const data = req.body
  
      let newData = await book.create({
        ...data,
        image: req.file.filename,
        
      });
      
      newData = JSON.parse(JSON.stringify(newData));

      newData = {
        ...newData,
       
        image: process.env.FILE_PATH + newData.image,
       

      };

      res.send({
        status: 'success',
        
        
        data:newData,

       
      });
    } catch (error) {
      console.log(error);
      res.send({
        status: 'failed',
        message: 'Server Error',
        
      });
    }
  };

  exports.getBook = async (req, res) => {
    const {id} = req.params
   try {
    
       
     let data = await book.findAll({
       where:{
           idCategory:id,
       },
       attributes: {
         exclude: [ 'createdAt', 'updatedAt'],
       },
      
       
       
      
      
     });
     data = JSON.parse(JSON.stringify(data));

     data = data.map((item)=>{
      return{...item, image:process.env.FILE_PATH + item.image}
    })
 
     res.send({
       status: 'success',
       data
     });
   } catch (error) {
     console.log(error);
     res.send({
       status: 'failed',
       message: 'Server Error',
     });
   }
 };