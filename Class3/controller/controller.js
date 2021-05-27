exports.addController = (req,res) =>{
        let {a,b} = req.body;   //shortHand
        res.json({success:true,sum:a+b});
}