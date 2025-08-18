const ListModel = require('./ListModel');  

module.exports.getList = async(req, res) => {
    const myList = await ListModel.find();
    res.send(myList);   
}
module.exports.saveList = async (req, res) => {
    const { name, date } = req.body;
    ListModel.create({ name, date })
        .then((data) => {console.log('LIST ADDED')
            res.send(data); 
        })
}
module.exports.deleteList = async (req, res) => {
    const {_id} = req.body;
    ListModel.findByIdAndDelete(_id)
        .then(() => 
            res.send('List deleted'))}

module.exports.editList = async (req, res) => {
    const {_id, name} = req.body;
    ListModel.findByIdAndUpdate(_id, {name})
    .then(() => res.send('EDITED A LIST'))
}
      