/**
 * @file services/index.js
 * @author WuZilin <1078578847@qq.com>
 */
import axios from 'axios';

export const getData = () => axios.get('/api/getData');
export const publish = data => axios.post('/api/publish', data);
