import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModal: Model<UserDocument>) {}

  async create(user: Partial<UserDocument>): Promise<UserDocument> {
    const newUser = new this.userModal(user);
    return newUser.save();
  }

  async findOneByUsername(username: string): Promise<UserDocument | null> {
    return this.userModal.findOne({ username }).exec();
  }

  async findOneById(id: string): Promise<UserDocument | null> {
    return this.userModal.findById(id).exec();
  }
}
