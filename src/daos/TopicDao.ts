import TopicModel, { ITopic } from '@models/topic';
import ErrorHandler from '@helpers/errorHandler/index';
import logger from '@shared/Logger';

class TopicDao {

  public async findAll(criteria: any, projection: any = {}, options: any = {}) {
    try {
      return await TopicModel.find(criteria, projection, options);
    } catch (error) {
      logger.info('TCL: findAll -> error', error);
      throw error.statusCode ? error : new ErrorHandler(500, `${error.name} ${error.errmsg}`);
    }
  }

  public async findOne(criteria: any, projection: any = {}, options: any = {}) {
    try {
      return await TopicModel.findOne(criteria, projection, options);
    } catch (error) {
      logger.info('TCL: findOne -> error', error);
      throw new ErrorHandler(404, 'Object_NOT_FOUND');
    }
  }

  public async create(object: ITopic) {
    try {
      return await TopicModel.create(object);
    } catch (error) {
      logger.info(error)
      throw error.statusCode ? error : new ErrorHandler(500, `${error.name} ${error.message}`);
    }
  }

  public async update(criteria: any, dataToUpdate: any = {}, options: any = {}) {
    try {
      return TopicModel.findOneAndUpdate(criteria, dataToUpdate, options);
    } catch (error) {
      throw error.statusCode ? error : new ErrorHandler(500, `${error.name} ${error.errmsg}`);
    }
  }

  public async delete(criteria: any, dataToUpdate: any = {}) {
    try {
      return await TopicModel.findOneAndUpdate(criteria, dataToUpdate);
    } catch (error) {
      throw error.statusCode ? error : new ErrorHandler(500, `${error.name} ${error.errmsg}`);
    }
  }
}

export default TopicDao;
