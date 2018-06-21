
/*const nodeEnv= env.NODE_ENV || 'development';*/
const env= process.env;
const PORT= env.PORT || 3000;

module.exports=function () {


    return PORT;
};
/*
 const logStars=function (message) {
    console.info('*********');
    console.info(message);
    console.info('*********');
};*!/
*/


