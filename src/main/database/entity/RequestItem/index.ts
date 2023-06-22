import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm'
import { QueryParam } from '../QueryParam'
import { Header } from '../Header'

@Entity('RequestItem')
export class RequestItem {
  @PrimaryGeneratedColumn()
  id: number

  @Column('text')
  name: string

  @Column('text')
  url: string

  @Column('text')
  method: string

  @OneToMany(() => QueryParam, (queryParam) => queryParam.request)
  queryParams: QueryParam[]

  @OneToMany(() => Header, (header) => header.request)
  headers: Header[]

  @Column('text')
  body: string
}
