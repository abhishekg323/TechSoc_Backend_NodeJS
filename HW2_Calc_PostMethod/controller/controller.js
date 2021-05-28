let a,b;
let extract = (req)=>{
    a = req.body.a;
    b = req.body.b;   
};
let sender = (res,data)=>{
    res.json({"Success":true,"Operation":true,"Result":data});
};
exports.add = (req,res ) => {
    extract(req);
    sender(res,a+b);
};
exports.sub = (req,res ) => {
    extract(req);
    sender(res,a-b);
};
exports.div = (req,res ) => {
    extract(req);
    sender(res,a/b);
};
exports.mul = (req,res ) => {
    extract(req);
    sender(res,a*b);
};