import { Entity,PrimaryGeneratedColumn,Column, ManyToOne } from "typeorm";
import { Company } from "./Company";

@Entity()

export class Product {
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    name : string;

    @Column()
    price: number

    @Column()
    descripton : string;

    @ManyToOne(()=> Company, (company) => company.products,{onDelete:"CASCADE"})
    company: Company;
}