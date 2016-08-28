import {Mongo} from 'meteor/mongo';

import {User} from '../interfaces/user.interface';

export const SubscribeUsers = new Mongo.Collection<User>('subscribeusers');
