const { firebase, admin } = require( "../config/firebase-config.js");

export const VerifyToken = async (req, res, next) => {
    const token = req.headers.auth;
    //Main code
    // const token = req.headers.authorization.split(" ")[1];
    console.log(token);
    // return res.json(token);
  try {
    //Hard code -temporary
    // if(token == "1234"){
    //     return next();
    // }
    // else{
    //     return res.json({ "Message": "Wrong token"});
    // }
    // Main code
    // let defaultAuth = getAuth(auth);
    // let defaultDatabase = getDatabase(auth);

    // const decodeValue = await 
    // defaultAuth.VerifyToken(token).then((decodedToken) => {
    //   res.status(200).json({
    //     status: "Login success"
    //   });
    // })
    console.log("here");
    // return res.json({message: "Inside"});

    admin.auth().verifyIdToken(token).then((decodedToken) => {
      return res.json({message: "Inside"});
      const uid = decodedToken.uid;
      // ...
    }).catch((error) => {
      return res.json({message: "Inside"});
    });
    // if (decodeValue) {
    //   // req.user = decodeValue;
    //   res.status(200).json({
    //     status: "Login success"
    //   });
    //   return next();
    // }
    // else{
    //   res.status(400).json({
    //     status:"Fail"
    //   });
    // }
  } catch (e) {
    return res.json({ message: e });
  }
};

module.exports = VerifyToken