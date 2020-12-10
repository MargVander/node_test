import {Entity, PrimaryGeneratedColumn, Column, UpdateDateColumn, CreateDateColumn, ManyToMany, JoinTable} from "typeorm";
import { Role } from "./Role";

@Entity()
export class User {

    @PrimaryGeneratedColumn('uuid')
    id: number;
    
    @Column({unique: true})
    email: string;

    @Column()
    password: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column({ type: 'timestamp' })
    birthdate: Date;

    @ManyToMany(type => Role, role => role.users, {
        eager: true
    })
    @JoinTable({ name: 'user_had_role' })
    roles: Role[];

    @CreateDateColumn()
    createdAt: Date;

    hasRole(name: string) {
        return this.roles.some((role: Role) => {
            return role.name === name;
        });
    }

    hasPrivilege(operation: string) {
        return this.roles.some((role: Role) => {
            return role.hasPermission(operation);
        });
    }

    @UpdateDateColumn()
    updatedAt: Date;

}
