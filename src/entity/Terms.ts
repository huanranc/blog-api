import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable} from "typeorm";
import {Taxonomy} from "./Taxonomy";

@Entity()
export class Terms {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  post_id: number

  @Column()
  name: string

  @Column()
  count: string
  
  @Column()
  order: string

  @ManyToMany(type => Taxonomy, {
    cascade: true
  })
  @JoinTable()
  taxonomys: Taxonomy[];
}
