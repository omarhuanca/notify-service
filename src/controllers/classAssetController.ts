import { Request, Response, NextFunction } from 'express';
import { omit, get } from 'lodash';

import ErrorHandler from '@helpers/errorHandler';
import SuccessHandler from '@helpers/successHandler';
import ClassAssetService from '@services/ClassAssetService';
import logger from '@shared/Logger';
import { IClassAsset } from '@models/classAsset';

interface IRequest extends Request {
  [key: string] : any;
};

const omitKeys = ['createdAt', 'updatedAt'];
const service = new ClassAssetService();
const successHandler = new SuccessHandler();

export const getAll = async (req: IRequest, res: Response, next: NextFunction) => {
  try {
    const defaultStatus = get(req, 'query.status', true);
    const criteria = {
      status: defaultStatus
    };
    const data = await service.findAll(criteria);

    successHandler.handleSuccess(200, 'fetch', res, next, data);
  } catch (error) {
    logger.info('ERROR: controller -> getAll', error);
    next(new ErrorHandler(error.statusCode, error.message));
  }
};

export const getOne = async (req: IRequest, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const criteria = {
      _id: id,
    };
    const data = await service.findOne(criteria);

    successHandler.handleSuccess(200, 'got', res, next, data);
  } catch (error) {
    logger.info('ERROR: controller -> getOne', error);
    next(new ErrorHandler(error.statusCode, error.message));
  }
};

export const create = async (req: IRequest, res: Response, next: NextFunction) => {
  try {
    const object: IClassAsset = req.body as IClassAsset;
    const data = await service.create(object);

    successHandler.handleSuccess(200, 'created', res, next, omit(data, omitKeys));
  } catch (error) {
    logger.info('ERROR: controller -> create', error);
    next(new ErrorHandler(error.statusCode, error.message));
  }
};

export const update = async (req: IRequest, res: Response, next: NextFunction) => {
  try {
    const updateObject = req.body;
    const { id } = req.params;
    const criteria = {
      _id: id,
    };
    const object = await service.findOne(criteria);
    if (object) {
      const data = await service.update(criteria, updateObject);

      successHandler.handleSuccess(200, 'updated', res, next, omit(data, omitKeys));
    }
  } catch (error) {
    logger.info('ERROR: controller -> update', error);
    next(new ErrorHandler(error.statusCode, error.message));
  }
};

export const softDelete = async (req: IRequest, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const criteria = {
      _id: id,
    };
    const object = await service.findOne(criteria);
    if (object) {
      const data = await service.delete(criteria);
      successHandler.handleSuccess(200, 'deleted', res, next, omit(data, omitKeys));
    }
  } catch (error) {
    logger.info('ERROR: controller -> delete', error);
    next(new ErrorHandler(error.statusCode, error.message));
  }
};
