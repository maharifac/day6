// var promise1 = new Promise(function(resolve,reject){
//     const x = 10;
//     const y = 10;
//     if(x === y)
//     {
//         resolve();
//     }else{
//         reject();
//     }
//     });
//     promise1.
//            then(function(){
//                console.log('equal');
//            },
//            function(){
//                console.log('not equal');
//            });
    
//promise with parameter passing
// var promise1 = new Promise(function(resolve,reject){
//         const x = 10;
//         const y = 20;
//         if(x === y)
//         {
//             resolve("success");
//         }else{
//             reject("fail");
//         }
//         });
//         promise1.
//                then(function(msg){
//                    console.log(msg);
//                }).
//                catch(function(msg){
//                    console.log(msg);
//                });


        //async and await
    
        async function f(){ 
        let promise = new Promise((resolve,reject) =>{
                    var x = 10;
                    var y = 20;
                    setTimeout(() => 
                    {
                    if(x == y)
                    {
                        resolve("done!");
                    }
                    else
                    {
                        reject("rejected") }
                    }, 1000)
                });

                await promise.                    //wait until promise resolve*
                           then(function(msg){
                               console.log(msg);  //resolve
                           }).
                           catch(function(err){
                               console.log(err);  //reject
                           });
                        }
    f();
            
    