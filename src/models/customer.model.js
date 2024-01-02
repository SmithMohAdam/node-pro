let mongoose =  require('mongoose');

mongoose.connect("mongodb+srv://testDB:test123@cluster0.sufmzrt.mongodb.net/?retryWrites=true&w=majority")

let CustomerSchema = mongoose.Schema({
    name : String,
    email:{
        type: String,
        required : true,
        unique : true
    }
});

module.exports = mongoose.model('Customer' , CustomerSchema);