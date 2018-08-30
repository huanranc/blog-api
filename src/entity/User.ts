import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  login: string

  @Column()
  pass: string

  @Column()
  portrait: string
  
  @Column()
  authority: Boolean

  @Column()
  registered: string
}
