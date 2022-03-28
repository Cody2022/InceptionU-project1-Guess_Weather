const mongoose=require("./mongoose");


const citySchema=new mongoose.Schema({
    name:{
        type: String,
        minLength: 3,
        required: true,
        unique: true
    },
    temperature:{
        type: Number,
        default:0,
    },
    guessTemp:{
        type: Number,
        default:-1000,
    },
    score:{
        type: Number,
        default:0,
    },
    createdAt:{
        type: Date,
        default: new Date()
    }
})

const userSchema=new mongoose.Schema({
    user:{
        type: String,
        minLength: 3,
        required: true,
    },
    id:{
        type: String,
        default:000,
    },
    scores:{
        type:Number,
        default:0
    },
    city:{
        type: String,
         },
    country:{
        type: String,
     },
    createdAt:{
        type: Date,
        default: new Date()
    }
})
userSchema.index({user:1, id:1},{unique:true});


const citySet=mongoose.model("citySet", citySchema);
const users=mongoose.model("users", userSchema);

//---citySet collection

const cityCreateDoc=async (newCityName)=>{
    let result= await citySet.create(newCityName, error=>{
        if(error) {console.log("error @cityCreateDoc:", error)}
    })   
    return result; 
}

const cityFindByName=async (cityToFind)=>{
    let cityFound=await citySet.findOne(cityToFind)
    if (!cityFound){console.log("Cannot find the city in database"); return false}
    else {return cityFound;}
}

const cityDeleteByName=async(cityToDelete)=>{
    let cityDeleted=await citySet.deleteOne(cityToDelete);
    return cityDeleted;
}

const cityFindAll=async ()=>{
    let cityArray=await citySet.find()
    return cityArray;
}

const cityUpdateTByName=async(city, cityNewtemperature)=>{
    let cityUpdated=await citySet.findOneAndUpdate(city, cityNewtemperature,{new:true});
    return cityUpdated;
}


//---User collections and document

const userCreateDoc=async (newUser)=>{
    let newUserDoc= await users.create(newUser, error=>{
        if(error) {return error.message}
    })   
    return newUserDoc; 
}

const userFindByName=async (cityToFind)=>{
    let userFound=await users.findOne(cityToFind)
    if (!userFound){console.log("cannot find"); return false}
    else {return userFound;}
}

const userDeleteByName=async(cityToDelete)=>{
    let userDeleted=await users.deleteOne(cityToDelete);
    return userDeleted;
}

const userFindAll=async ()=>{
    let userArray=await users.find()
    return userArray;
}

const userUpdateByNameId=async(user, scores)=>{
    let cityUpdated=await users.findOneAndUpdate(user, scores,{new:true});
    return cityUpdated;
}

//----------------

module.exports={
    cityCreateDoc, 
    cityFindByName, 
    cityDeleteByName, 
    cityFindAll, 
    cityUpdateTByName,
    userCreateDoc,
    userDeleteByName,
    userFindByName,
    userFindAll,
    userUpdateByNameId
};