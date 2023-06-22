import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm'
import { RequestItem } from '../RequestItem'

@Entity('Header')
export class Header {
  @PrimaryGeneratedColumn()
  id: number

  @Column('text')
  key: string

  @Column('text')
  value: string

  @ManyToOne(() => RequestItem, (request) => request.headers)
  request: RequestItem
}
