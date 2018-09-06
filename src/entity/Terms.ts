import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import {Post} from "./Post";

@Entity()
export class Terms {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string

  @OneToMany(type => Post, post => post.terms)
  post: Post[];
}
