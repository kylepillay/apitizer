import { DataSource, EntityTarget, FindOptionsWhere, ObjectLiteral } from 'typeorm'
import path from 'path'
import { QueryParam } from './entity/QueryParam/index'
import { RequestItem } from './entity/RequestItem/index'
import { Header } from './entity/Header/index'
import { userDataPath } from '../main'

export default class Database {
  private dataSource: DataSource

  public async init(): Promise<void> {
    this.dataSource = new DataSource({
      type: 'sqlite',
      database: path.join(userDataPath, 'apitizer.sqlite'),
      entities: [QueryParam, RequestItem, Header],
      synchronize: true,
      logging: false,
    })

    await this.dataSource
      .initialize()
      .then(() => console.log('DataSource is Connected'))
      .catch((err) => console.log(err))
  }

  public getDataSource(): DataSource {
    return this.dataSource
  }

  public getAll = async <T extends ObjectLiteral>(model: EntityTarget<T>): Promise<T[]> => {
    const result = await this.dataSource.manager.find(model)
    return result
  }

  public insert = async <T extends ObjectLiteral>(entity: T): Promise<T> => {
    const result = await this.dataSource.manager.save(entity)
    return result
  }

  public findOneBy = async <T extends ObjectLiteral>(
    model: EntityTarget<T>,
    parameters: FindOptionsWhere<T> | FindOptionsWhere<T>[],
  ): Promise<T | null> => {
    const result = await this.dataSource.manager.findOneBy(model, parameters)
    return result
  }
}
