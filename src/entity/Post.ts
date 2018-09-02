import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable} from "typeorm";
import {Terms} from "./Terms";

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  author: string;
  
  @Column("text")
  title: string;

  @Column("text")
  excerpt: string;

  @Column("longtext")
  content: string;

  @Column()
  status: boolean;

  @Column()
  date: string;

  @Column()
  date_gmt: string;

  @Column()
  modified: string;

  @Column()
  modified_gmt: string;

  @ManyToMany(type => Terms, {
    cascade: true
  })
  @JoinTable()
  terms: Terms[];
}
