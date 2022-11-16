## how all Db:
show dbs

## change db:
use db_name //if DB doesnt exists then create one by name db_name 

show current db:
db 

delete db:
db.dropDatabase()

create new collection:
db.createCollection('collection_name')

show all collections:
show collections

drop collection in db:
db.collection_name.drop()

## to insert in collection
db.users.insert({"name":"Harshit","email":"techspeed.hp@gmail.com","mob-num":"7062948714","address":"udaipur"})