import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from "typeorm";

@Entity()
export class Taxonomy {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  post_id: number

  @Column()
  term_id: number

  @Column()
  name: string

  @Column("text")
  description: string
}
