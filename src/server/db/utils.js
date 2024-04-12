const {User, Token} = require('./models')

const userFindOrCreate = async(name, userID, image, email) => {
  let user
  if (await User.exists({userID})){
    user = User.findOne({userID})
  }
  else{
    user = await User.create({
      userID,
      name,
      image,
      email
    })
  }
  return user
}

const tokenCreateOrReplace = async(userID, access, refresh) => {
  if(await Token.exists({userID})){
    Token.deleteOne({userID})
  }

  await Token.create({
    userID,
    access,
    refresh
  })
}

module.exports = {userFindOrCreate, tokenCreateOrReplace}