import NotifyModel, { INotify } from '@models/notify';
import ErrorHandler from '@helpers/errorHandler';
import logger from '@shared/Logger';

class NotifyDao {

  public async findAll(criteria: any, projection: any = {}, options: any = {}) {
    try {
      return await NotifyModel.find(criteria, projection, options);
    } catch (error) {
      logger.info('TCL: findAll -> error', error);
      throw error.statusCode ? error : new ErrorHandler(500, `${error.name} ${error.errmsg}`);
    }
  }

  public async findOne(criteria: any, projection: any = {}, options: any = {}) {
    try {
      return await NotifyModel.findOne(criteria, projection, options);
    } catch (error) {
      logger.info('TCL: findOne -> error', error);
      throw new ErrorHandler(404, 'Object_NOT_FOUND');
    }
  }

  public async create(object: INotify) {
    try {
      return await NotifyModel.create(object);
    } catch (error) {
      logger.info(error)
      throw error.statusCode ? error : new ErrorHandler(500, `${error.name} ${error.message}`);
    }
  }

  public async update(criteria: any, dataToUpdate: any = {}, options: any = {}) {
    try {
      return NotifyModel.findOneAndUpdate(criteria, dataToUpdate, options);
    } catch (error) {
      throw error.statusCode ? error : new ErrorHandler(500, `${error.name} ${error.errmsg}`);
    }
  }

  public async delete(criteria: any, dataToUpdate: any = {}) {
    try {
      return await NotifyModel.findOneAndUpdate(criteria, dataToUpdate);
    } catch (error) {
      throw error.statusCode ? error : new ErrorHandler(500, `${error.name} ${error.errmsg}`);
    }
  }
}

export default NotifyDao;
