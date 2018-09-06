import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
// import {Post} from "./Post";

@Entity()
export class Taxonomy {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nameTaxon: string

  @Column("text")
  description: string

//   @OneToMany(type => Post, post => post.taxonomy)
//   post: Post[];
}
