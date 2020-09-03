import NotifyDao from '@daos/NotifyDao';
import logger from '@shared/Logger';
import { INotify } from '@models/notify';

class NotifyService {

  private dao: NotifyDao;

  constructor() {
    this.dao = new NotifyDao();
  }

  public async findAll(criteria: any, projection: any = {}, options: any = {}) {
    try {
      return await this.dao.findAll(criteria, projection, options);
    } catch (error) {
      logger.info('TCL: findAll -> e', error.message);
      throw error;
    }
  }

  public async findOne(criteria: any, projection: any = {}, options: any = {}) {
    try {
      return this.dao.findOne(criteria, projection, options);
    } catch (error) {
      logger.error('TCL: findOne -> e', error);
      throw error;
    }
  }

  public async create(object: INotify) {
    try {
      return await this.dao.create(object);
    } catch (error) {
      logger.info('TCL: create -> e', error);
      throw error;
    }
  }

  public async update(criteria: any, dataToUpdate: any = {}, options: any = {}) {
    try {
      return await this.dao.update(criteria, dataToUpdate, options);
    } catch (error) {
      logger.info('TCL: update -> e', error);
      throw error;
    }
  }

  public async delete(criteria: any) {
    try {
      const dataToUpdate = {
        status: false
      };

      return await this.dao.delete(criteria, dataToUpdate);
    } catch (error) {
      logger.info('TCL: delete -> e', error);
      throw error;
    }
  }
}

export default NotifyService;
