import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Links {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  url: string

  @Column()
  pass: string

  @Column()
  name: string
  
  @Column()
  image: string

  @Column("text")
  description: string
}
