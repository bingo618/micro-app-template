import { apiUtils } from 'yocon-lib';
import api from '@/services/api';

const ApiFunc: any = {};
for (const key in api) {
  ApiFunc[key] = apiUtils(api[key]);
}

export default ApiFunc;
