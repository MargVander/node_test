import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, CreateDateColumn} from "typeorm";
import { type } from "os";
import { Role } from "./Role";

@Entity()
export class Permission {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    operation: string

    @Column()
    description: string

    @ManyToMany(type => Role, role => role.permissions)
    roles: Role[];

    @CreateDateColumn()
    createdAt: Date;

}
