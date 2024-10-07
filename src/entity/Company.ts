import { Column, PrimaryGeneratedColumn,Entity, OneToMany } from "typeorm";
import { Product } from "./Product";

@Entity()

export class Company {
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    name : string;

    @Column()
    descripton : string

    @OneToMany(()=> Product ,(product) => product.company ,{cascade:true,eager :true})
    products: Product[]
}