import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'
import { Books } from './books.model'
import { Users } from 'src/user-management/model/users.model'

@Entity()
export class UserBooks {

    @PrimaryGeneratedColumn('uuid')
    id: string


    @Column()
    readingStatus: string

    @ManyToOne(() => Books, books => books.id)
    Books: Books[]

    @ManyToOne(() => Users, users => users.id)
    User: Users
}