import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
    export class User extends BaseEntity {
        @PrimaryGeneratedColumn()
        id!: number; //this is your id generator that will autoincrement

        @Column()
        firstName!: string;
        
        @Column()
        lastName!: string;

        @Column({unique: true}) //unique: true requires the usernames to be unique in the database
        username!: string;

        @Column()
        password!: string;

        //A bunch of this was highlighted with errors until he went into "experimentalDecorators": true, and uncommented it out in tsconfig.json

}