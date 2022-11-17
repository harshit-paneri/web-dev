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

## show all collections:
`` show collections ``

## drop collection in db:
`` db.collection_name.drop() ``

## to insert in collection
`` db.users.insert({"name":"Harshit","email":"techspeed.hp@gmail.com","mob-num":"7062948714","address":"udaipur"}) ``

## find cmd
db.users.find()

## count
`` db.users.find().count() ``

## count in limit
`` db.users.find().limit() ``

## find specific argument
`` db.users.find({"name":"harshit"}) `` 

## to update something
`` db.users.update({"name":"Abir"},{$set:{"lastname":"Hinger","address":"Patna"}}) ``

##update values
-db.collection_name.update({param1},{param2},{param3})
param1: {key:value}         //data to be searched for
param2: {$set:{key:value,key:value,key:value}}      //data to be updated or inserted.
param3: {upsert:true}       //if there is no matching value then create new object and insert data.
*you can use updateOne similarly for updating only one value

-db.collection_name.remove({key:value})     //searches and removes the matching data objects
*you can use deleteOne and deleteMany similarly

**You can use $gte, $lte similarly, for any key, place {$filter_name:value} in value place.
-db.collection_name.find("key":{$filter_name:value})


``db.collection_name.aggregate([{$match:{key:value}},{$project:{key:1/0}}])``

--in $project - o/1 is given as binary


//aggregate:group       //it groups data objects on the basis of passed key:value pair. Meaning it will group objects with similar values to a key.
```db.collection_name.aggregate(
    [
        {
            $group:
            {
                "_id":{"address":"$address"},
                "count":{$sum:1}
            }
        }
    ]
) 
```

//here by using count, we can print the number of objects in each group.

//further aggregates like sort and project
```db.collection_name.aggregate(
    [
        {
            $group:
            {
                "_id":{"address":"$address"},
                "count":{$sum:1}
            }
        },
        {
            $sort:{
                "count":-1,
                "address":-1
            }
        },
        {
            $project:{
                "_id":1
            }
        }
    ]
)