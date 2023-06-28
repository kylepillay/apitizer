import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm'
import { RequestItem } from '../RequestItem'

@Entity('QueryParam')
export class QueryParam {
  @PrimaryGeneratedColumn()
  id: number

  @Column('text')
  key: string

  @Column('text')
  value: string

  @ManyToOne(() => RequestItem, (request) => request.queryParams)
  request: RequestItem
}
