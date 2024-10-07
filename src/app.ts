import "reflect-metadata";
import express,{Request,Response} from "express";
import { DataSource, LessThan } from "typeorm";
import { Company } from "./entity/Company";
import { Product } from "./entity/Product";






const app = express();
app.use(express.json())
const PORT = 4014;


//postgres port :5432



app.get("/data" ,async(req:Request,res: Response)=>{

const companyRepo =  AppDataSource.getRepository(Company);
const productRepo = AppDataSource.getRepository(Product)
 await companyRepo.delete(8);
 res.json('id deleted')

})


 const AppDataSource = new DataSource({
    type : "postgres",
    host : 'localhost',
    port : 5432,
    username : "postgres",
    password : "$@hil4958",
    database : "typeorm_db",
    entities : ["src/entity/*{.ts,.js}"],
    synchronize : true,
    logging : true
 })




AppDataSource.initialize().then(()=>{
    console.log('Your Database Connected Sucessfullly');

    app.listen(PORT , ():void=>{
        console.log(`Your Server has been running at http://localhost:${PORT}`);
    
    })


    
}).catch((err)=>{
    console.log("Some aerror occured",err);
    console.log("Server can't start");
    
    
}) 




///////////////////////////////////////////////////////////////////////////////////////////////////////////

// let products: Product[] = [];

// let iPhone = new Product();
// iPhone.name = "IPhone";
// iPhone.descripton = "Samrt IPhone";
// iPhone.price = 455555;

// let iPad = new Product();
// iPad.name = "IPad";
// iPad.descripton = "Smart Tablet";
// iPad.price = 999555;

// let macBook = new Product();
// macBook.name = "IPhone";
// macBook.descripton = "Apple company macbook";
// macBook.price = 44445555;

// let smartWatch = new Product();
// smartWatch.name = "iseries34";
// smartWatch.descripton = "this smarth watch is not so smart";
// smartWatch.price = 300000

// products.push(iPhone,iPad,macBook,smartWatch);
// await productRepo.save(products)


// //insert


// let company = new Company()
// company.name = "Techy Panther";
// company.descripton = "Tehcy Panther is a service based company"
// company.products = products

// const dataInserted = await companyRepo.save(company);
// res.json(dataInserted)

// // }catch(error){
// // console.log("Error occured" , error);
// // res.status(500).json({error : "an error occured"})
// // }



//////////////////////////////////////////////////////////////////////////////////


//find the data
// const companyFound = await companyRepo.find(
//     {
//         relations :
//         {
//             products:true
//         },where : {
//             products : {
//                 price : LessThan(5000000)
//             }
//         }
//     })
// res.json(companyFound)



//update


// const company =  await companyRepo.findOne({where : {id:8}})
// if(company ){
//   company.name = "Way to web";
//   company.descripton = "Lotera company"


// //  for(let i = 0; i<company.products.length;i++){
// //     company.products[i].price = 100
// //  } 
//   company.products.forEach(product =>{
// product.price =1000
//   })
    
  

//   const dataChanged = await companyRepo.save(company);
//   res.json(dataChanged)
// }else{
//     res.json("id is not found")
//}